---
layout: post
title: 'Higher Order Functions'
author: Sang
categories: [Javascript]
image: assets/images/11_2020/higher_order_function.png
rating: false
comments: false
---

> Higher order functions - HOF are simply a function that can take a function as an argument or a function that returns another function.

{% responsive_image path: assets/images/12_2020/HOF_Goku.png alt: 'Higher Order Functions'%}

Most of us know what a HOF are but don't really understand why they are useful and why we are?!

Let's start off with `function` and see what sort of problems we have with just a simple function.

Let's say we are creating a system for our company where we have to let users log in.

```javascript
function letAdamLogin() {
	let array = [];

	for(let i = 0; i < 1000000; i++>) {
		array.push(i);
	}

	return 'Access Granted to Adam';
}

letAdamLogin() // Access Granted to Adam
```

The simple function above is going to do some sort of work to authenticate the user. As you can see there's a bit of time that takes to grant access to Adam.

We just created a function that lets Adam log in but our company has more employees, right? What if we have another employee name Eva. Well, so lets create another function for Eva.

```javascript
function letEvaLogin() {
	let array = [];

	for(let i = 0; i < 1000000; i++>) {
		array.push(i);
	}

	return 'Access Granted to Eva';
}

letEvaLogin() // Access Granted to Eva
```

Now what's the problem with this code?? The principle that we always hear as developers is `DRY - do not repeat yourself`. We have created some code that is not very flexible, right? For each user that we have, we have to copy and paste code and repeat ourself. And imagine if we had hundreds and hundreds of employees doing this every time. Well that's not very clean, is it?

Let's move on to next level to fix this problem. Move from a simple function to a function that accepts parameters to gain some superpowers.

Instead of doing the authenticate by manually, let's create a generic `letUserLogin` function. In this function is going to accept a parameter `user`.

```javascript
const giveAccessTo = (name) => `Access Granted to ${name}`;

function letUserLogin(user) {
	let array = [];

	for(let i = 0; i < 1000000; i++>) {
		array.push(i);
	}

	return giveAccessTo(user);
}

letUserLogin('Adam') // Access Granted to Adam
letUserLogin('Eva') // Access Granted to Eva
```

We leveled up over here because in `letUserLogin` we have done something amazing. We tell the function what data to use when we call it.

Before we had a function and that function when we actually called it, decided what to do with that data. Instead we now have a more generic function that says: Hey! I am going to give you later on some generic piece of data. I don't know what yet but when I pass you the user do some sort of functionality to it.

So that instead of defining Eva and Adam inside of the function, **we can just define that later on when we actually invoke.**. We have the ability when we call the function to define the data so we essentially have a bit more flexibility instead of when we define the function telling it what exactly one needs to be done. we can delay that until execution time and this gives us more flexibility.

But we might have another problem here. What if we also have admin who with a lot higher privilege.

```javascript
function letAdminLogin(admin) {
	let array = [];

	for(let i = 0; i < 1000000; i++>) {
		array.push(i);
	}

	return giveAccessTo(admin);
}
```

Because they are admin, they have to go through a bit more security procedures and let's say it takes a little bit more time for them to get authenticate.

```javascript
function letAdminLogin(admin) {
	let array = [];

	for(let i = 0; i < 5000000; i++>) {
		array.push(i);
	}

	return giveAccessTo(admin);
}
```

We have a different loop here, a different permission process. We just copy more code, we're not being very DRY, are we?! Imagine if we had many more roles in the company instead of just users and admins maybe we have: managers, secretaries, guest,...

This is where HOF are gonna come into play. We ran from function to function with parameters. That way instead of just saying when we defined the function exactly what to do and what data to use, we are able to define the function what it dose but later on we will tell what data we need. With a HOF we get to do both of those things.

> We call the function that we can give it the data and also tell the function what to do or some extra abilities when we actually invoke it.

Let's create an authenticate function and this function will take a parameter which is the verification process in our case we will just give it a number which is the time of authentication.

```javascript
function authenticate(verify) {
	let array = [];

	for(let i = 0; i < verify; i++>) {
		array.push(i);
	}

	return true;
}
```

Instead of `letAdminLogin()` or `letUserLogin()`, let's remove them and create a general function that accepts a person as the first parameter and then a function as the second parameter.

```javascript
function letPerson(person, fn) {
	if (person.level === 'admin') {
		fn(500000);
	} else if (person.level === 'user') {
		fn(100000);
	}

	return giveAccessTo(person.name);
}

letPerson({ level: 'user', name: 'Adam' }, authenticate); // Access Granted to Adam
letPerson({ level: 'admin', name: 'Tim' }, authenticate); // Access Granted to Tim
```

We have now gained the power to not only tell it what data to use but we also got the power to tell it what to do.
