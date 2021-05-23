---
layout: post
title: 'Rxjs operators'
author: Sang
categories: [Rxjs, Angular]
image: assets/images/webp/08_2020/pipe.webp
rating: false
comments: false
---

-   [What is operators](#what-is-operators)
-   [shareReplay](#sharereplay)
-   [concatMap](#concatmap)
-   [mergeMap](#mergemap)
-   [exhaustMap](#exhaustmap)
-   [debounceTime](#debouncetime)
-   [distinctUntilChanged](#distinctuntilchanged)
-   [switchMap](#switchmap)

#### What is operators?

Operators are functions. There are two kinds of operators:

Pipeable Operators are the kind that can be piped to Observables using the syntax observableInstance.pipe(operator()). These include, filter(...), and mergeMap(...). When called, they do not change the existing Observable instance. Instead, they return a new Observable, whose subscription logic is based on the first Observable.

A Pipeable Operator is a function that takes an Observable as its input and returns another Observable. It is a pure operation: the previous Observable stays unmodified.

A Pipeable Operator is essentially a pure function which takes one Observable as input and generates another Observable as output. Subscribing to the output Observable will also subscribe to the input Observable.

-[Rxjs dev](https://rxjs-dev.firebaseapp.com/guide/operators)-

#### shareReplay

We don't want our application to do multiple HTTP request to fetch the exact same data again and again from the Back-end. To solve this problem we use the [shareReplay](https://www.learnrxjs.io/learn-rxjs/operators/multicasting/sharereplay) operator.

#### concatMap

{% responsive_image path: assets/images/webp/08_2020/concatMap.webp alt: 'concatMap operator'%}

We have a source observable that is emitting a series of values (1, 3, 5). Then we have a mapping function which takes an input value and then it produces an observable. These observable will emit three times the input value multiplied by 10 and then it will complete. So mapping function is the function that transforms a value into an observable.

We are going to listen to the values of the first onservable until it complete. For each value of the source observable we are going to create a second derived observable. We took one value and we converted it into an observable. As long as these observable is emitting values those will be emitting in the output of the concatMap. And only when these initial observable is completed (in this case is observable from value 1) then we will create a new observable (from value 3)

#### mergeMap

If you would like to perform multiple cal to you Back-end in parallel and fetch the results of each call as they arrive over time then you should use `mergeMap` operator.

{% responsive_image path: assets/images/webp/08_2020/mergeMap.webp alt: 'mergeMap operator'%}

`mergeMap` is very similar to `concatMap`, we are going to take the values of the source observable and we are going to apply a mapping function that to take the value and when to produce a new observable.

For example, with the first value we created new observable and we subscribe to it then we have values in the output. Next, we take the value 3 and turn it into new observable, we emit the first value then the second value. But before the second observable that we have created has the chance to emit the last value and complete. before that happens, the value 5 get emitted.

> So we are going to create a new observable using mapping function and we don't want to subscribe to it and start emitting its value without having to wait that the previous observables complete.

We only complte the output observable when the source observable has completed.

#### exhaustMap

If we want ignore repeated event, for example is click have same value request. We can you the `exhaustMap` operator.

{% responsive_image path: assets/images/webp/08_2020/exhaustMap.webp alt: 'exhaustMap operator'%}

We have the source observable that is emitting multiple values (1, 3, 5). Each value is going to transformed into a seperate observable using the mapping function which take values then return observables. These observable are going to emit multiple values and then completes. The values emitted by these observables which created from the source observable are going to be passed to the output af the exhaust map and these observable will eventually complete.

Mean while these observables are still active if we have earlier value emitted by the source observable, those values would be ignored.

#### debounceTime

Ignore dozens of unnecessary requests.

{% responsive_image path: assets/images/webp/08_2020/debounceTime.webp alt: 'debounceTime operator'%}

This operator takes a stream of input values that is emitting values (1, 2, 3, 4, 5, 6) also a delay in miliseconds.

We have the input stream and at a given moment we have a new value that get emitted. This value is not immediately reflected in the output. Instead we are going to start counting 10 milliseconds.

During these 10 milliseconds we are going to wait to see if the source observer emits some other value. The value 1 is only passed to the output if it remains stable for at lest 10 milliseconds.

Meaning that after value 1 gets emitted in the input, we need to wait for a period of silence of at leasr 10 milliseconds before considering a stable value and adding it to the output.

Next we have the value 2 and we started counting and now the new interval of 10 milliseconds. During those 10 milliseconds, we have new values (3, 4, 5). because the delay between 2 3 4 5are less than 10 milliseconds. Then value 2 is not considered a stable value. So it gets discarded in the output.

#### distinctUntilChanged

If two consecutive values are exactly the same. We only want to emit one value. We will use `distinctUntilChanged` operator

{% responsive_image path: assets/images/webp/08_2020/distinctUntilChanged.webp alt: 'distinctUntilChanged operator'%}

#### switchMap

{% responsive_image path: assets/images/webp/08_2020/switchMap.webp alt: 'switchMap operator'%}

We have the input observable that is emitting these values (1, 3, 5). We also have a mapping function, it take one value of the stream and creates an observable.

Everyting is going normal, but take a look in the value 3. After using mapping function, we get the output of the value 3. While the value 3 is emitted, we have another value emitted by the source observable.

So the `switchMap` is going to unsubscribe from the second observable (value 3) that was emitting thre values. Then it switch to the new observable (value 5).
