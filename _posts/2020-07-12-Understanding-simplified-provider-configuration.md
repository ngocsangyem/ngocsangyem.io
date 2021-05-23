---
layout: post
title: 'Understanding simplified provider configuration (Part 2)'
author: Sang
categories: [Angular]
image: assets/images/webp/07_2020/dependencies_injection_2.webp
rating: false
comments: false
---

In the [previous artical](/Understanding-Providers-and-Injection-Tokens/), we wrote our provider for the photo service dependency and we have defind a unique injection token.

Normally we don't need to write these factory functions or provide injection tokens. It's all works in a much simpler way.

How does ANgular know what dependency to inject without using `@Inject()` decorator ?. Because Angular supports injection token `as a class name`. So in the provide function instead of creating a manual injection token, we can specify a name of a class. It's also work as a unique identifier for a dependency.

```javascript
...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: PhotosService,
      ...
    },
  ],
})
...
```
> The class name exsists at runtime under the form of a constructor function. On the other hand we would not be able to use an interface as a injection token because an interface does not exist at runtime, it's a compile time constructor only.

Another thing that we don't need to do is to write our manual provide function. Because of the in Angular dependency injection system we use the `useClass` property instead of `useFactory` and the dependencies(`deps: []`). We spectify the `useClass` by the name of the class in this case is `PhotosService`. Then Angular knows that he needs to call the new constructor on this class and it need to provide the dependency that are needed by the constructor.

```javascript
...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: PhotosService,
      useClass: PhotosService
    },
  ],
})
...
```

We are using the `PhotosService` class on multiple places. It's can be further simplified into the following notation.

```javascript
...
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    PhotosService
  ],
})
...
```