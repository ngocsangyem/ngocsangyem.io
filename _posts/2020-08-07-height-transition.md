---
layout: post
title: 'Height transition'
author: Sang
categories: [CSS, 30 seconds of knowledge]
image: assets/images/webp/08_2020/css_height.webp
rating: false
comments: false
---

Transitions an element's height from 0 to auto when its height is unknown.

```html
<div class="trigger">
	Hover me to see a height transition.
	<div class="el">content</div>
</div>
```

```css
.el {
	transition: max-height 0.5s;
	overflow: hidden;
	max-height: 0;
}

.trigger:hover > .el {
	max-height: var(--max-height);
}
```

```javascript
const el = document.querySelector('.el');
const height = el.scrollHeight;

el.style.setProperty('--max-height', height + 'px');
```

##### Demo

{% codepen https://codepen.io/ngocsangyem/pen/zYqxawz %}

#### Explanation

`el.scrollHeight` is the height of the element including overflow, which will change dynamically based on the content of the element.

`el.style.setProperty(...)` sets the `--max-height` CSS variable which is used to specify the max-height of the element the target is hovered over, allowing it to transition smoothly from 0 to auto.

#### Browser Support

-   [https://caniuse.com/#feat=css-variables](https://caniuse.com/#feat=css-variables)
-   [https://caniuse.com/#feat=css-transitions](https://caniuse.com/#feat=css-transitions)

source: [30 seconds of knowledge](https://30secondsofknowledge.com/)
