---
layout: post
title: 'Transform centering'
author: Sang
categories: [CSS, 30 seconds of knowledge]
image: assets/images/webp/08_2020/css_transform.webp
rating: false
comments: false
---

Vertically and horizontally centers a child element within its parent element using position: absolute and transform: translate() (as an alternative to flexbox or display: table). Similar to flexbox, this method does not require you to know the height or width of your parent or child so it is ideal for responsive applications.

```html
<div class="parent">
	<div class="child">Centered content</div>
</div>
```

```css
.parent {
	border: 1px solid #333;
	height: 250px;
	position: relative;
	width: 250px;
}

.child {
	left: 50%;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
}
```

##### Demo

{% codepen https://codepen.io/ngocsangyem/pen/qBZBLLP %}

#### Explanation

-   `position`: absolute on the child element allows it to be positioned based on its containing block.
-   `left`: 50% and `top`: 50% offsets the child 50% from the left and top edge of its containing block.
-   `transform: translate(-50%, -50%)` allows the height and width of the child element to be negated so that it is vertically and horizontally centered.

**Note**: Fixed height and width on parent element is for the demo only.

#### Browser support

[https://caniuse.com/#search=transform](https://caniuse.com/#search=transform)

source: [30 seconds of knowledge](https://30secondsofknowledge.com/)
