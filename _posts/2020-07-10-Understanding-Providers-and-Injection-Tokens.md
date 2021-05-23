---
layout: post
title: 'Understanding Providers and Injection Tokens (Part 1)'
author: Sang
categories: [Angular]
image: assets/images/webp/07_2020/dependencies_injection_2.webp
rating: false
comments: false
---

We are going to write a `provider` manually as an exercise to understand how Angular dependency injection system works and how `provider` work under the hood, also to become aware of all the configuration options that we have.

We will continue to use [this example](https://github.com/ngocsangyem/angular-dependencies-injection-demo) in the [previous article](/Angular-Dependency-Injection/). Code for this article is in `understanding-providers-and-injection-tokens` branch.

Now we remove `providedIn` property in the configuration of the `photos.service.ts` file, we will get the error message `No provider for PhotosService!`. Don't worry we will fix this issue in the manualy way.

{% responsive_image path: assets/images/webp/07_2020/Dependency_error_1.webp alt: 'Dependency error'%}

> A provider is simply a function that we need to pass to the Angular dependency injection system and that function is going to be called by the dependency injection system and provide the dependency that it is needed.

So in this case in our `app.component.ts` file, we want to create a function that returns `PhotosService`. This function needs to call the `new constructor` on `PhotosService` and needs to provide it's own dependencies. The dependency we need here is the `HttpClient`, the `HttpClient` will called as an parameter.

```javascript
function photosServiceProvider(http: HttpClient): PhotosService {
  return new PhotosService(http);
}
```

As you can see, it's simply a function, it's returns `PhotosService` and it's call the constructor. That's simply what the provider is. Now the question is how the function going to get the http dependency.

Let's remember, the dependency injection system will have the missing dependency (`HttpClient`) and it will be able to pass the `HttpClient` to the function above. What we need to do now is plug the `photosServiceProvider()` to Angular dependency injection system. There are multiple ways to do that. We are going to be using the `provider` property of the `@Component` decoration.

If we take the `photosServiceProvider()` and we pass it to the provider's array, we are going to get error. Because the provider function by it self is not sufficient for making the dependency to work.

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    photosServiceProvider // Error
  ]
})
```

Instead of passing the function directly, we need to pass a configuration object and in this configuration object we are going to define what exactly are we providing. This means that we need to give our `PhotosService` dependency a name - a dependency injection unique name. The unique name of the dependency is known as an `injection token`.

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: ..., useFactory: ...
    }
  ]
})
```

We are going to give the `injection token` a name - `PHOTOS_SERVICE`. This is the name of the unique dependency injection token associated to the PhotosService's dependency. To instaniate the token, just simply call to constructor of `InjectionToken()` provided by Angular, so this `InjectionToken()` is a unique identifier for a dependency.

Each dependency has its own unique injection token, the injection token takes a parameter type - the type of the dependency being injected. So we are going to have `PhotosService` that the dependency link to dependency injection token. In the constructor of `InjectionToken()` we will pass a string - a unique string that unique identifies these dependency. In this example, we called it `PHOTOS_SERVICE`.

```javascript
const PHOTOS_SERVICE = new InjectionToken<PhotosService>('PHOTOS_SERVICE');
```

Now that we have here our dependency injection token, so we can configured the dependency injection system. We are going to provide token for this dependency.

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: PHOTOS_SERVICE, useFactory: ...
    }
  ]
})
```
In order to parsing the provider function we need to populate the `useFactory` property. This is the one that we need to use to pass the `photosServiceProvider()` to the Angular dependency injection system.

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: PHOTOS_SERVICE,
      useFactory: photosServiceProvider,
    },
  ],
})
```

So let's review what we did in order to solve `No provider for PhotosService!`. We need to pass a function to the dependency injection system so that Angular knows how to create a `PhotosService`. We have created our provider function - `photosServiceProvider()` that simply creates the dependency that it needed in constructor. Each dependency in the dependency injection system needs to have a unique name - injection token. The injection token is knows as an injection token, it's like a unique identifier for the dependency. After having the dependency identifier and after having the factory function, we informed the Angular how to create a service by specifying these two things.

Let's save and refresh our server...hmmm...we still get an error.

{% responsive_image path: assets/images/webp/07_2020/Dependency_error_2.webp alt: 'Dependency error'%}

So the dependency injection system at this point is trying to call the factory function in order to create the `PhotosService`. But the problem is it does not know how to get the http dependency. Angular can not access the parameter of the factory function and determine what dependencies are needed. To solve this, we need to use another property called `deps`. This property is an array, it take multuple dependencies needed by the `photosServiceProvider()`, in this case is the `HttpClient`.

```javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      ...
      deps: [HttpClient]
    },
  ],
})
```

So try it out...hmmm...we get the same error that we have at the begining, but we just wrote the provider and we know that the dependency injection system can call and get the http dependency. So what going on in here.

It's very simple, because there is no way for Angular to link the request for the `PhotosService` instance to the particular injectable that we have configurally in the providers. In the constructor we are just asking for an instance of `PhotosService` but we are not seeing anywhere that we need the dependency link to these unique injection token.

> The injection token is what uniquely identifies the dependency.

We need to request it via injection token. In order to identify the correct inject token, we are going to add an extra decorator is call `@Inject()`. Inside the decorator we spectify the name of the injection token that we need -  `@Inject(PHOTOS_SERVICE)`.

```javascript
export class AppComponent implements OnInit {
  ...
  constructor(@Inject(PHOTOS_SERVICE) private photoService: PhotosService) {}

  ...
}
```

### Summary

The dependency injection system is what allows Angular to inject the dependency into the constructor. Every dependency has internally and injection token which is a unique identifier for the dependency and a provider factory function that is called in order to create the dependency.