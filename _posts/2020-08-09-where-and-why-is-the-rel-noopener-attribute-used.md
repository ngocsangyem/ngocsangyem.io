---
layout: post
title: 'Where and why is the rel="noopener" attribute used?'
author: Sang
categories: [HTML, 30 seconds of knowledge]
image: assets/images/webp/08_2020/rel_noopener2.webp
rating: false
comments: false
---

The `rel="noopener"` is an attribute used in `<a>` elements (hyperlinks). It prevents pages from having a window.opener property, which would otherwise point to the page from where the link was opened and would allow the page opened from the hyperlink to manipulate the page where the hyperlink is.

### Good to hear

-   `rel="noopener"` is applied to hyperlinks.
-   `rel="noopener"` prevents opened links from manipulating the source page.
-   [How to fix target=”\_blank” links: a security and performance issue in web pages](https://medium.com/sedeo/how-to-fix-target-blank-a-security-and-performance-issue-in-web-pages-2118eba1ce2f)

### Additional links

-   [Open external anchors using rel="noopener"](https://web.dev/external-anchors-use-rel-noopener/)
-   [About rel="noopener"](https://mathiasbynens.github.io/rel-noopener/)

source: [30 seconds of knowledge](https://30secondsofknowledge.com/)
