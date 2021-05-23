---
layout: post
title: 'Building our first Angular component'
author: Sang
categories: [Angular]
image: assets/images/webp/07_2020/angular_component.webp
rating: false
comments: false
---

In this article we will discusse how one of the main features of Angular is that gives us the ability of creating our own custom elements. We are going to be creating our first Angular custom component.

You can clone it on [Github](https://github.com/ngocsangyem/angular-core-deep-dive).

```sh
git clone https://github.com/ngocsangyem/angular-core-deep-dive
```

```sh
ng serve
```

The component we get in `app.component.html` is `card` similar to this one.

```html
<section class="cards py-5">
	<div class="container">
		<div class="row">
			<div class="card">
				<img
					class="card-img-top"
					src="/assets/images/1.jpeg"
					alt="Card image cap"
				/>
				<div class="card-body">
					<h4 class="card-title"><a>Card title</a></h4>
					<p class="card-text">
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>
					<a href="#" class="btn btn-primary">Button</a>
				</div>
			</div>
		</div>
	</div>
</section>
```

Result:

{% responsive_image path: assets/images/webp/07_2020/app_card.webp alt: 'Card component result'%}

Now imagine that our application has several places where we would like to display `card`. And we don't want to repeat these HTML everywhere on the application. Also the data that we are displaying in the `card` might be dynamic. We might have multiple `card` such as a list of cards is displayed and we want to pass to each card the data that we are retrieving from the Back-end instead of hard coding everything on the Front-end.

So let's see how a component is going to help us to implement those use cases.

In order to create a new component, open the `command line` and stop our server by `Command + C` ( `Control + C` ). We going to use the Angular-cli to scaffold a new component.

```sh
ng generate component [component_name]

Ex: ng generate component card
```

For short syntax

```sh
ng g c card
```

After running this command we see that the `Angular-cli` has generated a few different files. In this article is `card component`.

    - Typescript file - card.component.ts
    - HTML template file - card.component.html
    - CSS file - card.component.css
    - Test file - card.component.spec.ts

Let's have a look at these files. The first is `card.component.ts`.

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
```

As we can see this file contains a typescript class called `CardComponent`. We can see that these correspond to a regular component which represents a custom element because of the presence of the `@Component` decorator. Inside the decorator configuration we have a series of properties. The first is the `selector` property that defines which is the HTML tag belongs to `CardComponent`.

Back to the `app.component.html`. The `selector` means that we are going to replace these card's HTML by a a new custom HTML element called `app-card`.

```html
<section class="cards py-5">
	<app-card></app-card>
</section>
```

So the name of this custom extremal tag is the same as the selector string that we have in `card.component.ts`.

> Remember, you have to import our component into declarations of `app.module.ts` file. You can read [this](/How-an-Angular-app-gets-loaded-and-started/) article to know why.

The next thing that we have in our component configuration is the `template` which points to the HTML template file. For now, this file will contain our card's HTML. So let's move it to the `card.component.html`.

After that, we can start the server up. We can see that we get the exact same result that we had before. This means that if we create in `app.component.html` two or three extra HTML tags and we refresh the application, we are going to see that we have three instances over the card of the component as expected.

```html
<section class="cards py-5">
	<app-card></app-card>
	<app-card></app-card>
	<app-card></app-card>
</section>
```

### Summary

As you can see using Angular, we managed to create a new component in only a couple of minutes and new custom HTML element that we can use to build our application. If the application have multiple screens where we have to show list of card, we could use `CardComponent` instead of coping all HTML everywhere where we need.
