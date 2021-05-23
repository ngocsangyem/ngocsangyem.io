---
layout: post
title: 'Observable Concatenation'
author: Sang
categories: [Rxjs, Observable, Javascript, Angular]
image: assets/images/webp/08_2020/rxjs_2.webp
rating: false
comments: false
---

This is an example of the concatenation of two Observables

{% responsive_image path: assets/images/webp/08_2020/rxjs_concat.webp alt: 'concat observales'%}

The first observable emits two values `a` and `b` and then it complete in the vertical dash.

{% responsive_image path: assets/images/webp/08_2020/rxjs_concat_2.webp alt: 'concat observales'%}

Next we have one separate observable that start after the completion of the first observale which have values a and b. It emit a couple of values `x` and `y` and then it completees the observable that we are trying to create.

{% responsive_image path: assets/images/webp/08_2020/rxjs_concat_4.webp alt: 'concat observales'%}

The observable that we are trying to create which is the result of the concatenating these two previous observables. So what does it mean to concatenate two observales?

We are going to take the first observable of the least that we will to concatenate and we are going to `subscribe` to it. For each of the values of the first observable, we are going to out put in our output abservable so the values `a` and `b` are shown here

{% responsive_image path: assets/images/webp/08_2020/rxjs_concat_5.webp alt: 'concat observales'%}

And we will continue to emit values from the observable until the observable completes. Only when the first observable complte then we will subscribe to the second observable and we are going to take the output values and add it to the combined observable.

{% responsive_image path: assets/images/webp/08_2020/rxjs_concat_6.webp alt: 'concat observales'%}

When the second observable completes then we have concatenated all the observables that we were trying to concatenate.

{% responsive_image path: assets/images/webp/08_2020/rxjs_concat_7.webp alt: 'concat observales'%}

So the result concatenated observable will also completed as we an see the key notion in observable is the notion of completion.

{% responsive_image path: assets/images/webp/08_2020/rxjs_concat_8.webp alt: 'concat observales'%}

For example, we will create 3 observables by [of](https://www.learnrxjs.io/learn-rxjs/operators/creation/of) function. This function very useful for defining all sorts of observales.

```javascript
import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';

@Component({
	selector: 'about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		const sourse1$ = of(1, 2, 3);
		const sourse2$ = of(4, 5, 6);
		const sourse3$ = of(7, 8, 9);

		const result = concat(sourse1$, sourse2$, sourse3$);

		result.subscribe(console.log); // 1, 2, 3, 4, 5, 6, 7, 8, 9
	}
}
```
