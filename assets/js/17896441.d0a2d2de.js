"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{7434:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var n=a(7378),l=a(8944),i=a(7044),r=a(3604),s=a(558),o=a(3656),c=a(4723),d=a(7696);function m(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(c.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function u(e){var t=e.lastUpdatedBy;return n.createElement(c.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function v(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:d.kM.common.lastUpdated},n.createElement(c.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(m,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(u,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var g=a(2397),h=a(5465),p="lastUpdated_vA0S";function b(e){return n.createElement("div",{className:(0,l.Z)(d.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(h.Z,e)))}function E(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(d.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(g.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",p)},(a||i)&&n.createElement(v,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function f(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,m=!!(a||i||s);return c||m?n.createElement("footer",{className:(0,l.Z)(d.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(b,{tags:o}),m&&n.createElement(E,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:r})):null}var N=a(7615),Z="tocCollapsible_aX8Q",k="tocCollapsibleButton_Va7b",L="tocCollapsibleContent_EOAA",_="tocCollapsibleExpanded_mrpG",C=a(7513);function U(e){var t,a=e.toc,i=e.className,r=e.minHeadingLevel,s=e.maxHeadingLevel,o=(0,d.uR)({initialState:!0}),m=o.collapsed,u=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(Z,(t={},t[_]=!m,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",k),onClick:u},n.createElement(c.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(d.zF,{lazy:!0,className:L,collapsed:m},n.createElement(C.Z,{toc:a,minHeadingLevel:r,maxHeadingLevel:s})))}var T=a(4192),y="docItemContainer_yJzi",A="docItemCol_ygLL",w="tocMobile_By44";function M(e){var t,a=e.content,c=a.metadata,m=a.frontMatter,u=m.image,v=m.keywords,g=m.hide_title,h=m.hide_table_of_contents,p=m.toc_min_heading_level,b=m.toc_max_heading_level,E=c.description,Z=c.title,k=!g&&void 0===a.contentTitle,L=(0,d.iP)(),_=!h&&a.toc&&a.toc.length>0,C=_&&("desktop"===L||"ssr"===L);return n.createElement(n.Fragment,null,n.createElement(o.Z,{title:Z,description:E,keywords:v,image:u}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[A]=!h,t))},n.createElement(r.Z,null),n.createElement("div",{className:y},n.createElement("article",null,n.createElement(s.Z,null),_&&n.createElement(U,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:b,className:(0,l.Z)(d.kM.docs.docTocMobile,w)}),n.createElement("div",{className:(0,l.Z)(d.kM.docs.docMarkdown,"markdown")},k&&n.createElement("header",null,n.createElement(T.Z,{as:"h1"},Z)),n.createElement(a,null)),n.createElement(f,e)),n.createElement(i.Z,{previous:c.previous,next:c.next}))),C&&n.createElement("div",{className:"col col--3"},n.createElement(N.Z,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:b,className:d.kM.docs.docTocDesktop}))))}},7044:function(e,t,a){var n=a(5773),l=a(7378),i=a(4723),r=a(9241);t.Z=function(e){var t=e.previous,a=e.next;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(r.Z,(0,n.Z)({},t,{subLabel:l.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(r.Z,(0,n.Z)({},a,{subLabel:l.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}},558:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7378),l=a(7696),i=a(8944);function r(e){var t=e.className,a=(0,l.E6)();return a.badge?n.createElement("span",{className:(0,i.Z)(t,l.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}},3604:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7378),l=a(4014),i=a(2957),r=a(4723),s=a(3119),o=a(7696),c=a(8944);var d={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function m(e){var t=d[e.versionMetadata.banner];return n.createElement(t,e)}function u(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v(e){var t,a=e.className,i=e.versionMetadata,r=(0,l.Z)().siteConfig.title,d=(0,s.useActivePlugin)({failfast:!0}).pluginId,v=(0,o.J)(d).savePreferredVersionName,g=(0,s.useDocVersionSuggestions)(d),h=g.latestDocSuggestion,p=g.latestVersionSuggestion,b=null!=h?h:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,c.Z)(a,o.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(m,{siteTitle:r,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(u,{versionLabel:p.label,to:b.path,onClick:function(){return v(p.name)}})))}function g(e){var t=e.className,a=(0,o.E6)();return a.banner?n.createElement(v,{className:t,versionMetadata:a}):null}},2397:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7378),l=a(4723),i=a(5773),r=a(808),s=a(8944),o="iconEdit_OMbO",c=["className"];var d=function(e){var t=e.className,a=(0,r.Z)(e,c);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=a(7696);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4192:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(5773),l=a(808),i=a(7378),r=a(8944),s=a(4723),o=a(7696),c="anchorWithStickyNavbar_YDjN",d="anchorWithHideOnScrollNavbar_c5FC",m=["as","id"],u=["as"];function v(e){var t,a=e.as,u=e.id,v=(0,l.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(a,(0,n.Z)({},v,{className:(0,r.Z)("anchor",(t={},t[d]=g,t[c]=!g,t)),id:u}),v.children,i.createElement("a",{className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(a,v)}function g(e){var t=e.as,a=(0,l.Z)(e,u);return"h1"===t?i.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):i.createElement(v,(0,n.Z)({as:t},a))}},9241:function(e,t,a){var n=a(7378),l=a(2957);t.Z=function(e){var t=e.permalink,a=e.title,i=e.subLabel;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},7615:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(5773),l=a(808),i=a(7378),r=a(8944),s=a(7513),o="tableOfContents_jWtb",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},i.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7513:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(5773),l=a(808),i=a(7378),r=a(7696),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,h=e.maxHeadingLevel,p=(0,l.Z)(e,s),b=(0,r.LU)(),E=null!=g?g:b.tableOfContents.minHeadingLevel,f=null!=h?h:b.tableOfContents.maxHeadingLevel,N=(0,r.DA)({toc:t,minHeadingLevel:E,maxHeadingLevel:f}),Z=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:E,maxHeadingLevel:f}}),[m,v,E,f]);return(0,r.Si)(Z),i.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},p))}},5465:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(7378),l=a(8944),i=a(4723),r=a(2957),s="tag_VWGF",o="tagRegular_sIPu",c="tagWithCount_YgKf";var d=function(e){var t,a=e.permalink,i=e.name,d=e.count;return n.createElement(r.Z,{href:a,className:(0,l.Z)(s,(t={},t[o]=!d,t[c]=d,t))},i,d&&n.createElement("span",null,d))},m="tags_WPdo",u="tag_XHyC";function v(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(m,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:u},n.createElement(d,{name:t,permalink:a}))}))))}}}]);