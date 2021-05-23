---
layout: post
title: 'What is Dependency Injection?'
author: Sang
categories: [Javascript, OOP]
image: assets/images/08_2020/Dependency-Injection.jpeg
rating: false
comments: false
---

The literal meaning is to inject dependency. So what is dependency?

`Dependency` is just that your class needs the function of another object. For example you have a `model` class that fetches data from a `database` object. We can say that your modal class has a dependency of that database object.

{% responsive_image path: assets/images/webp/08_2020/dependency_1.webp alt: 'Model dependency%}

`Injecting dependency` just means that the dependency is pushed into the class from the outside.

> That mean you should not instantiate dependencies using the new operator from inside of the class. Instead take it as a constructor parameter or a setter

{% responsive_image path: assets/images/webp/08_2020/dependency_2.webp alt: 'Model dependency%}

But why should we inject dependencies in a first place? Let's imagine that you are programming a house building robot. You start with a pile of plumber and you program it to start building walls then you get to a doorway, what do you do? You program it to build a custom door out of raw material each time or you program it to take a ready-made door from the supplier and install that.

{% responsive_image path: assets/images/webp/08_2020/dependency_3.webp alt: 'Model dependency%}

The most flexible way to do it would be to take the door from a supplier and that's exactly what dependency injection dose. it decouples your classes construction from from the construction of it's dependencies.

{% responsive_image path: assets/images/webp/08_2020/dependency_4.webp alt: 'Model dependency%}

The reason that this is so important is the `dependency inversion principle`

### Dependency Inversion Principle

The DIP is the principal that the code should depend upon `abstractions`. By depending upon the `abstractions`, we are decoupling our implementations from each other. In PHP that means your code should depend upon in their faces.

That way we can substitute different dependencies as long as they all satisfy the required interface.

{% responsive_image path: assets/images/webp/08_2020/dependency_5.webp alt: 'Model dependency%}

> By using dependency injection we decouple our code from the lower-level implementations. Making our code cleaner, easier to modify and easier to read.

We have another problem. Each of out classes require all of these dependencies. So now to construct each and every class we not only need to figure out what dependencies they need, we need figure out how to instansiate the dependencies?

{% responsive_image path: assets/images/webp/08_2020/dependency_6.webp alt: 'Model dependency%}

There is a solution, enter the dependency injection container. At the root the container is nothing more than a map of dependencies that your class needs with the logic to create those dependencies if thay haven't been created yet.

{% responsive_image path: assets/images/webp/08_2020/dependency_7.webp alt: 'Model dependency%}

So every time you ask for a dependency, the map will figure out which dependency to use and then the container will check to see if it created one of those dependencies already. If it has it will just use that one, otherwise it will create the dependency store it and return it.

{% responsive_image path: assets/images/webp/08_2020/dependency_8.webp alt: 'Model dependency%}

So instead of constructing all of your classes yourself, you ask the container for a new instance. It will resolve the dependencies, construct your object and return it to you.

{% responsive_image path: assets/images/webp/08_2020/dependency_9.webp alt: 'Model dependency%}

The best part of it is that the container can resolve complex dependencies transparently and if you want to swap out a generic dependency. You only need to update the container. Cleaner and mor modular code.

{% responsive_image path: assets/images/webp/08_2020/dependency_10.webp alt: 'Model dependency%}

author: [Anthony Ferrara](https://www.youtube.com/watch?v=IKD2-MAkXyQ)
