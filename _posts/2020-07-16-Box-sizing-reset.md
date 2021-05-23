---
layout: post
title: 'Box-sizing reset'
author: Sang
categories: [CSS, 30 seconds of knowledge]
image: assets/images/webp/07_2020/box-sizing.webp
rating: false
comments: false
---

Resets the box-model so that widths and heights are not affected by their borders or padding.

```html
<div class="box">border-box</div>
<div class="box content-box">content-box</div>
```

```css
html {
	box-sizing: border-box;
}
*,
*::before,
*::after {
	box-sizing: inherit;
}
.box {
	display: inline-block;
	width: 150px;
	height: 150px;
	padding: 10px;
	background: tomato;
	color: white;
	border: 10px solid red;
}
.content-box {
	box-sizing: content-box;
}
```

##### Demo

{% codepen https://codepen.io/ngocsangyem/pen/jOWePYG %}

#### Explanation

-   box-sizing: border-box makes the addition of padding or borders not affect an element's width or height.
-   box-sizing: inherit makes an element respect its parent's box-sizing rule.

#### Browser support

:white_check_mark: No caveats.

[caniuse](https://caniuse.com/#feat=css3-boxsizing)

source: [30 seconds of knowledge](https://30secondsofknowledge.com/)
