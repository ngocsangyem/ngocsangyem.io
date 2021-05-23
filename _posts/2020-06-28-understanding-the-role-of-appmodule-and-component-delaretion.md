---
layout: post
title: 'Understanding the Role of AppModule and Component Declaration'
author: Sang
categories: [Angular]
image: assets/images/webp/06_2020/angular_components.webp
rating: false
comments: false

---

Angular use components to build web pages and use modules to basically bundle different pieces. For example components of our app into package.

{% responsive_image path: assets/images/webp/06_2020/modules.webp alt: 'Placeholder'%}

As you can see, It's also just an emty class Typescrip class like our component. As the component, we transform it into something else by adding a decorator. Here, It's the **@NgModule** decorator which is also imported from _@angular/core_

```javascript
@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
```

We see four properties set up on the object which we passed to _@NgModule_:

    -   declarations
    -   imports
    -   providers
    -   bootstrap

**bootstrap** is used to identify the root component of our application component tree. It was responsible for telling Angular which component should be aware of at the point of the time the whole application start. Basically, in the _index.html_ which component would recognized and that was the app component.

> We don't add any more component selectors to the _index.html_. Therefore, we don't touch the bootstrap array.

But we need to add a new component to Angular and this new component now has to be registered in the module. So that Angular knows that this component exists. By default, Angular will not scan all your files.

So if we dont't tell the Angular app that the new component exists, It doesn't know it, just creating the file is not enough.

That is why we have to register it in the **@NgModule** to tell Angular the new component is exist in the app. We do register new component in _declarations_ array.

```javascript
...

import { CardComponent } from './components/card/card.component';

@NgModule({
	declarations: [AppComponent, CardComponent],
	...
})
```

**imports** simples allow us to add another modules to this module. We can split our app into multiple modules and then we can import these modules to basically make the main module a bit cleaner and outsource some stuff into another module.

**providers**

> A provider is an instruction to the Dependency Injection system on how to obtain a value for a dependency. Most of the time, these dependencies are services that you create and provide.
