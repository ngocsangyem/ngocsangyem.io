---
layout: post
title: 'Call Stack and Memory Heap'
author: Sang
categories: [Javascript]
image: assets/images/08_2020/Call_Stack_and_Memory_Heap.jpeg
rating: false
comments: false
---

We known that the Javascript engine does a lot of work for us. With that the biggest thing is actually reading our code and executing it.

There are two most important things in this step:

> A place to store and write information that is to store our variables, our objects, our data of our apps. A place actually run and keep track of what's happening line by line on our code. We use `Call Stack` and `Memory heap` for that.

-   We need the `Memeory Heap` as a place to store and write information because at the end of the day all programs are just read and write operations. That way we have a place to allocate memory, use memory and release memory.

-   With the `Call Stack`, we have a place to keep track of where we are in the code. So with that we can run the code in order.

#### Memory Heap

Memory heap is simply a free store. It's a large region in memory that the Javascript engine provides for us which can be used to store any type of arbitrary data in an unordered fashion.

#### Call Stack

Call Stack store function and variables as our code executes at each entry state of the stack also called the stack frame which is the frame. These stacks allows us to know where we are in the code and runs in a first in last out mode. Then we use the memory heap to actually point to different variables and objects and data that we store so that we know where to look.
