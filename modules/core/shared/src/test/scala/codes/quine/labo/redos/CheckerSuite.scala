package codes.quine.labo.redos

import scala.util.Success
import scala.util.Try

import data.IChar
import regexp.Compiler
import regexp.Parser
import util.Timeout
import Checker._

class CheckerSuite extends munit.FunSuite {

  /** Timeout checking is disabled in testing. */
  implicit val timeout: Timeout.NoTimeout.type = Timeout.NoTimeout

  /** Runs a checker against the RegExp. */
  def check(source: String, flags: String): Try[Complexity] =
    for {
      pattern <- Parser.parse(source, flags)
      epsNFA <- Compiler.compile(pattern)
      result <- Checker.check(epsNFA)
    } yield result

  test("Checker.check: constant") {
    assertEquals(check("^foo$", ""), Success(Complexity.Constant))
    assertEquals(check("^((fi|bu)z{2}){1,2}$", ""), Success(Complexity.Constant))
  }

  test("Checker.check: linear") {
    assertEquals(check("a*", ""), Success(Complexity.Linear))
    assertEquals(check("(a*)*", ""), Success(Complexity.Linear))
    assertEquals(check("^([a:]|\\b)*$", ""), Success(Complexity.Linear))
  }

  test("Checker.check: polynomial") {
    val a = IChar('a')
    val other = IChar('a').complement(false)
    assertEquals(
      check("^.*a.*a$", "s"),
      Success(Complexity.Polynomial(2, Witness(Seq((Seq(a), Seq(a))), Seq(other))))
    )
    assertEquals(
      check("^(.a)*a(.a)*a$", "s"),
      Success(Complexity.Polynomial(2, Witness(Seq((Seq(other, a), Seq(a, a))), Seq(a, a, a))))
    )
    assertEquals(
      check("^.*a.*a.*a$", "s"),
      Success(Complexity.Polynomial(3, Witness(Seq((Seq(a), Seq(a)), (Seq.empty, Seq(a))), Seq(other))))
    )
  }

  test("Checker.check: exponential") {
    val a = IChar('a')
    val b = IChar('b')
    val other1 = IChar('a').complement(false)
    val other2 = IChar.union(Seq(a, b)).complement(false)
    assertEquals(
      check("^(a|a)*$", ""),
      Success(Complexity.Exponential(Witness(Seq((Seq(a), Seq(a))), Seq(other1))))
    )
    assertEquals(
      check("^((a)*)*$", ""),
      Success(Complexity.Exponential(Witness(Seq((Seq(a), Seq(a))), Seq(other1))))
    )
    assertEquals(
      check("^(a|b|ab)*$", ""),
      Success(Complexity.Exponential(Witness(Seq((Seq(b), Seq(b, a))), Seq(other2))))
    )
  }

  test("Checker.check: failure") {
    intercept[InvalidRegExpException](check("(", "").get)
    intercept[UnsupportedException](check("(?<=a)", "").get)
  }
}
