---
layout: post
title: 'Inside the V8 engine'
author: Sang
categories: [Javascript]
image: assets/images/webp/08_2020/V8_engine.webp
rating: false
comments: false
---

#### Interpreter vs Compiler

Interpreters are quick to get up and running. Back to example in [Javascript engine](/javascript-engine) article.

```javascript
function someCalculation(x, y) {
	return x + y;
}

for (let i = 0; i < 1000; i++) {
	someCalculation(5, 4);
}
// 9
```

We don't have to convert this code into a another language. But there is a cons with using interpreter and this is the same problem that Google had back in the day when they had Google Maps running a lot of javascript but it will get slower and slower because the problem, with the interpreters. When you are running the same code more than once (the code above).

While the compiler takes a little bit more time to start up because it has to go through that compilation step at the beginning. Go through our code to understand it and spit it out into a another language. But the compiler will be smart enough that when it sees code like example above, it just simplified the code instead of calling the function multiple times.

```javascript
...

for (let i = 0; i < 1000; i++) {
	// Just replace someCalculation function by 9
	9
}
```

> Compiler takes a little bit longer to get up and running but the code is going to eventually run faster. Interpreter is really fast to get up and running but it doesn't do any optimization.

Instead of using one of the Compiler or Interpreter, we can combine these two and create something called `JIT` compiler or `Just In Time` compiler.

{% responsive_image path: assets/images/webp/08_2020/inside_javascript_engine3.webp alt: 'Inside the javascript engine'%}

We `Parser` the code then turn it to an `Abstract Syntax Tree` and then this code initially goes to an `Interpreter`. (in V8 engine it called ignition). It takes the AST and spits out bytecode. Bytecode not as low level as machine code but it's code that is able to be interpreted by the Javascript engine in prder to run our programs.

Then we see `Profiler`. This `Profiler` also called a monitor. Monitors and watches our code as it runs and makes noted on how we can optimize this code such as how many times it is being run. If the same lines of code are run a few times, it will pass off some of this code to the compiler or a JIT compiler.
