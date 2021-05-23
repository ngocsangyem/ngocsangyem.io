---
layout: post
title: 'Javascript engine'
author: Sang
categories: [Javascript]
image: assets/images/webp/08_2020/javascript_engine.webp
rating: false
comments: false
---

We know that Javascript engine takes our written Javascript code and does somethings magic to tell the computer to do what we want it to do.

![Just do it](/assets/images/08_2020/just_do_it.gif)

#### Inside the engine

{% responsive_image path: assets/images/webp/08_2020/inside_javascript_engine3.webp alt: 'Inside the javascript engine'%}

We give it a Javascript file and first it does something called `lexical analysis` which breaks the code into something called `tokens` to identify their meaning.

So that we know what the code is trying to do and these `tokens` are formed into what we call AST - `Abstract Syntax Tree`. There is a fun little tool online that you can use to demo this - [astexplorer.net](https://astexplorer.net/).

After went through the AST, the javascript code will go through something called an `interpreter` -> `profiler` -> `compiler`,... This whole engine is going to spit out some code that computer understand.

#### Interpreter and Compiler

In programming there are generally two ways of translating to machine language or something that our computers can understand.

##### Interpreter

The interpretor translate and read the files line by line on the fly.

```javascript
function someCalculation(x, y) {
	return x + y;
}

for (let i = 0; i < 1000; i++) {
	someCalculation(5, 4);
}
// 9
```

With the demo above, we got result is 9 but the loop go over and over. If we give this code to an `interpreter` the translation happends line by line on the fly. Because interpreting code simply means taking a set of instructions and returning an answer and doing something with that code. It's just like we telling the computer do something.

##### Compiler

The compiler unlike an interpretor, doesn't translate on the fly. It works `ahead of time` to create a translation of what code we've just written and it compiles down to usually a language that can be understood by our machines.

```javascript
function someCalculation(x, y) {
	return x + y;
}

for (let i = 0; i < 1000; i++) {
	someCalculation(5, 4);
}
// 9
```

With the compiler, it going to take on pass through the code and try understand what the code does and it's going to take the program in Javascript or any type of language then write into a new program language.

Have you heard of Babel or [TypeScript](https://www.typescriptlang.org/)? They are heavily used in the Javascript ecosystem and you should now have a good idea of what they are:

Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).
Typescript is a superset of Javascript that compiles down to Javascript.

Both of these do exactly what compilers do: Take one language and convert into a different one!

#### Summary

All languages have to be interpreted and complied because it has to run, it has to be interpreted and it also has to get translated into something low level like machine code.
