---
layout: post
title: 'What is this'
author: Sang
categories: [Javascript]
image: assets/images/webp/08_2020/this.webp
rating: false
comments: false
---

This afternoon, I have a Front-end interview with a company. They have asked me for `this` keyword. I could not explain it in a simple way. So I after finished the interview, I opened google to find the answer. Here is what I found.

The `this` keyword is an object that represents the context of an executing function. Regular functions can have their `this` value changed with the methods `call()`, `apply()` and `bind()`. Arrow functions implicitly `bind` `this` so that it refers to the context of its lexical environment, regardless of whether or not its context is ser explicitly with `call()`

Here are some common examples of how `this` works:

#### Object literals

`this` refers to the object itself inside regular functions if the object precedes the invocation of the function.

Properties set as this do not refer to the object.

```javascript
var myObject = {
	property: this,
	regularFunction: function () {
		return this;
	},
	arrowFunction: () => {
		return this;
	},
	iife: (function () {
		return this;
	})(),
};
myObject.regularFunction(); // myObject
myObject['regularFunction'](); // my Object

myObject.property; // NOT myObject; lexical `this`
myObject.arrowFunction(); // NOT myObject; lexical `this`
myObject.iife; // NOT myObject; lexical `this`
const regularFunction = myObject.regularFunction;
regularFunction(); // NOT myObject; lexical `this`
```

#### Event listeners

`this` refers to the element listening to the event.

```javascript
document.body.addEventListener('click', function () {
	console.log(this); // document.body
});
```

#### Constructors

`this` refers to the newly created object.

```javascript
class Example {
	constructor() {
		console.log(this); // myExample
	}
}
const myExample = new Example();
```

#### Manual

With `call()` and `apply()`, this refers to the object passed as the first argument.

```javascript
var myFunction = function () {
	return this;
};
myFunction.call({ customThis: true }); // { customThis: true }
```

#### Unwanted `this`

Because `this` can change depending on the scope, it can have unexpected values when using regular functions.

```javascript
var obj = {
	arr: [1, 2, 3],
	doubleArr() {
		return this.arr.map(function (value) {
			// this is now this.arr
			return this.double(value);
		});
	},
	double() {
		return value * 2;
	},
};
obj.doubleArr(); // Uncaught TypeError: this.double is not a function
```

### Summary

-   In non-strict mode, global this is the global object (window in browsers), while in strict mode global this is undefined.
-   Function.prototype.call and Function.prototype.apply set the this context of an executing function as the first argument, with call accepting a variadic number of arguments thereafter, and apply accepting an array as the second argument which are fed to the function in a variadic manner.
-   `Function.prototype.bind` returns a new function that enforces the this context as the first argument which cannot be changed by other functions.
-   If a function requires its this context to be changed based on how it is called, you must use the function keyword. Use arrow functions when you want this to be the surrounding (lexical) context.
