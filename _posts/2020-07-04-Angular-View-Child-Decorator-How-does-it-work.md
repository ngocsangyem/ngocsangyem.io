---
layout: post
title: 'Angular View Child Decorator - How does it work?'
author: Sang
categories: [Angular]
image: assets/images/webp/07_2020/angular_view_child.webp
rating: false
comments: false
---

View child and View children are two decorator that we have available for performing queries in our component's template.

As we have know before many times we can code the interaction berween our components or the different elements of the template by simply using `template references` and accessing the element directly in the template.

```html
<img
	class="card-img-top"
	src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
	alt="Card image cap"
	*ngIf="isImageVisible(); else noImage"
/>

// template references noImage
<ng-template #noImage>
	<p class="my-4 text-center">There is no image</p>
</ng-template>
```

However what happens if we add template references at the level of our template and coding all our logic directly on the template is not sufficient. Sometimes our component itself needs a programmatic reference to some of the elements of the template.

For exemple, we have card component and it need a reference to the image or to the button directly at the level of the component class - typescript class and not only at the level of the template itself.

```javascript
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
	@Input() card;
	constructor() {}

	ngOnInit(): void {}
}
```

{% responsive_image path: assets/images/webp/07_2020/demo_card_code.webp alt: 'Demo card html'%}

So in that case what we want to do is perform a `template query` for obtaining a reference to an element template - an access at the level of our component class. That's what the `@ViewChild` and `@ViewChildren` decorators for.

We have card component in our `app.component.html` file.

```html
<app-card></app-card>
```

We are going to query this template and adding a reference at the level of our application - the app component. Now let's see how can the application component template can get a reference to this card. In order to obtain a reference to the card component that we are going to be using the `ViewChild` decorator.

```javascript
import { Component, ViewChild } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	cardData = {
		imageSrc: 'https://mdbootstrap.com/img/Photos/Others/images/43.jpg',
		title: 'Card title',
		description:
			"Some quick example text to build on the card title and make up the bulk of the card's content.",
	};
	@ViewChild(CardComponent)
	card: CardComponent;
}
```

Let's see that indeed `card` variable is getting populated by create a button with `onCardSelected` click function in `app.component.html`.

```html
<app-card [card]="cardData"></app-card>

<button type="button" (click)="onCardSelected()">Click</button>
```

```javascript
...

export class AppComponent {
	@ViewChild(CardComponent)
	card: CardComponent;

	onCardSelected() {
		console.log('Card', this.card);
	}
}
```

Open the console and let's have a look at what gets printed when we click the button on view.

{% responsive_image path: assets/images/webp/07_2020/viewchild_card.webp alt: 'Demo card html'%}

As you can see `ViewChild` decorator is a template quering mechanism. We can use it to get references to any element in the template.

> Noted, if we have same multiple component the `ViewChild` only return the first matching element.
