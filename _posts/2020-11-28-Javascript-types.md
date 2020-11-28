---
layout: post
title: 'Javascript types'
author: Sang
categories: [Javascript]
image: assets/images/11_2020/javascript_types.jpg
rating: false
comments: false
---

Luckily for us there aren't that many data types in Javascript. There's only 7 of them.

```javascript
5
true
'To be or not to be'
undefined
null
Symbol
{}
```

Javascript has an operator called `type of` that tells us the type of an item.

```javascript
typeof 5 // number
typeof true //boolean
typeof 'To be or not to be' // string
typeof undefined // undefined
typeof null // object
typeof Symbol // symbol
typeof {} // object
```

> `undefined` is the absence of a definition. It's used as the default value when the Javascript engine initialize is own variables.

> `null` is the absence of value. It means there is no value there.

[Read more](/what-is-the-difference-between-null-and-undefined)

Wait...Why `typeof null` is `object`?? The f*ck?? This is actually a mistake of Javascript. Even the creator of the language [Brendan Eich](https://vi.wikipedia.org/wiki/Brendan_Eich) who created Javascript acknowledged it. No programming language is perfect.

Let's talk about `array` and `function`.

```javascript
typeof [] // object
typeof function(){} // function
```

As you see the code above, you might think that Javascript also have function type. Well technically **no**.

> Arrays and Functions are Objects

{% responsive_image path: assets/images/11_2020/array_function.png alt: 'Arrays and Functions are Objects'%}

Event though `typeof function` gives us a function but underneath the hood a function in Javascript is just an object.

```javascript
function person() {
	return 'Hello World'
}

person.name = 'Yem';

console.log(person.name) // Yem
```

##### Primitive types vs Non-primitive types

In Javascript we have two distinctions:

**Primitive types**

A data that only represents a single value.

```javascript
typeof 5
typeof true
typeof 'To be or not to be'
typeof undefined
typeof null
typeof Symbol
```

**Non-primitive types**

```javascript
typeof {}
typeof []
typeof function(){}
```

Non-primitive type doesn't contain the actual value directly.

```javascript
const person = {
	name: 'Yem',
	age: 21
};
```

The person object above doesn't actually contain the value `{name: ..., age: ...}`. Instead it has a reference, similar to a pointer to somewhere in memory that the object is have.

> Everything in Javascript is an object.

Many things that we interact with directly in Javascript such just strings, numbers, boolean which are primitive and not objects. But the fact that these primitives have object wrappers like `String()` or `Number()` or `Boolean()`.

```javascript
true.toString() // 'true'
```

Javascript silently creates a wrapper object when we try attempt to access a property on a primitive.

```javascript
Boolean(true).toString() // 'true'
```