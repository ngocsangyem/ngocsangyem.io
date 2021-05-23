---
layout: post
title: 'Angular Dependency Injection'
author: Sang
categories: [Angular]
image: assets/images/webp/07_2020/dependencies_injection_1.webp
rating: false
comments: false
---

Dependency injection is a critical part of the Angular system. For example:

You can clone the code demo on github.

```sh
git clone https://github.com/ngocsangyem/angular-dependencies-injection-demo.git
```

In `app.component.ts` we are injecting the `PhotosService` directly in constructor app component.

```javascript
...

export class AppComponent implements OnInit {
  ...

  constructor(private photoService: PhotosService) {}

  ...
}
```

This is what `Dependency Injection` look like. Any dependencies that the given class has such a component or a directive can be injected directly via the constructor. So the component itself does not know how to create its dependency.

The `PhotosService` can also have it's own dependencies injective in the constructor and so forth.

```javascript
...
export class PhotosService {
  constructor(private http: HttpClient) {}

  ...
}
```

These dependency injection system has multiple advantages:

- It's easier to test our classes because maybe we can have injected a dependency that we don't know if it's an actual service that it's connecting to the Back-end and fetching data or mock for test implementation.
- Benefit in the context of building our UI with a lot of nested components. For example our photo component that is depply nested in our UI, if this component also need the `PhotosService`, so we can inject it directly via the constructor. We don't have to pass it as an `@Input()` property .In order to access our dependencies, we would need to receive them as inputs, that mean we will have to pass the dependency all the way around the component tree.

> Injecting dependencies transparently via the constructor is much easier to maintain.

##### So how Angular obtain these dependencies ?

> Noted: The Class dose not extend the dependency - `PhotosService`. It's gets the the dependency injected by Angular.

We see that we were using special `providedIn` in `photos.service.ts`. We will talk about this `providedIn` in [next artical](/Understanding-Providers-and-Injection-Tokens).

Let's for a moment remove this `providedIn` and run our application to see what happends.

```javascript
...

@Injectable()
export class PhotosService {
  constructor(private http: HttpClient) {}

  ...
}
```
We can see our application is broken and if the have a look in console. We will see the following error message: `No provider for PhotosService!`

{% responsive_image path: assets/images/webp/07_2020/Dependency_error_1.webp alt: 'Dependency error'%}

What this message mean is that somewhere in our application, for example here the application component. We are trying to inject the `PhotosService` but the dependency system of Angular `does not know` how to create this dependency. So the question here is what is the `provider`?!

> The `provider` is what creates the dependency on behalf of the Angular dependency injection system.

So somehow the dependency injection system needs to create an instance of `PhotosService`. And the way to create that dependency is the `provider`, it will give the Angular dependency injection system a function known as a factory function that creates a dependency. The Angular dependency injection system will then call the factory function and generates the dependency when  it needs and passes the dependency to part of the application, for example the application component via the constructor.