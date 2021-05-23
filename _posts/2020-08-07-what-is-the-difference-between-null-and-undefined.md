---
layout: post
title: 'What is the difference between null and undefined?'
author: Sang
categories: [CSS, 30 seconds of knowledge]
image: assets/images/webp/08_2020/null_undefined.webp
rating: false
comments: false
---

In JavaScript, two values discretely represent nothing - undefined and null. The concrete difference between them is that null is explicit, while undefined is implicit. When a property does not exist or a variable has not been given a value, the value is undefined. null is set as the value to explicitly indicate “no value”. In essence, undefined is used when the nothing is not known, and null is used when the nothing is known.

### Good to hear

-   typeof undefined evaluates to "undefined".
-   typeof null evaluates "object". However, it is still a primitive value and this is considered an implementation bug in JavaScript.
-   undefined == null evaluates to true.

source: [30 seconds of knowledge](https://30secondsofknowledge.com/)
