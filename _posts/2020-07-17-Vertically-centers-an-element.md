---
layout: post
title: 'Vertically centers an element without flexbox'
author: Sang
categories: [30 seconds of knowledge, Tricks, Css]
image: assets/images/webp/07_2020/ghost_trick.webp
rating: false
comments: false
---

Vertically centers an element in another.

```html
<div class="ghost-trick">
	<div class="ghosting">
		<p>Vertically centered without changing the position property.</p>
	</div>
</div>
```

```css
.ghosting {
	height: 300px;
	background: #0ff;
}

.ghosting:before {
	content: '';
	display: inline-block;
	height: 100%;
	vertical-align: middle;
}

p {
	display: inline-block;
	vertical-align: middle;
}
```

##### Demo

{% codepen https://codepen.io/ngocsangyem/pen/Rwrqwra %}

#### Explanation

Use the style of a :before pseudo-element to vertically align inline elements without changing their position property.

source: [30 seconds of knowledge](https://30secondsofknowledge.com/)
