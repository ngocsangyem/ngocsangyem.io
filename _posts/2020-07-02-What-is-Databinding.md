---
layout: post
title: 'What is Data Binding?'
author: Sang
categories: [Angular]
image: assets/images/webp/07_2020/angular_databinding.webp
rating: false
comments: false
---

We could basically translate `data binding` with `communication`. Communication betwwen our `Typescript` code of our component and the `template` which the users see.

### String interpolation and poperty binding

We might have some result in our Typescript code because we fetched something from a server or finish some calculation which we want to display to the users. And the only thing users see is the `template`. So you need some kind of communication between both pieces to be able to really do something in our app. That is where `data binding` comes into play because it is responsible for this communicateion.

We get different ways of commucation, for example:

We want to output data from our Typescript code to the HTML code - the template. We can use `string interpolation`.

{% responsive_image path: assets/images/webp/07_2020/angular_string_interpolation.webp alt: 'string interpolation'%}

Or `property binding`.

{% responsive_image path: assets/images/webp/07_2020/angular_property_binding.webp alt: 'property binding'%}

### Event binding

If the user clicks a button on the template, we may want to trigger something in our Typescript code. With that we can use `event binding`. So we can bind to click event to excute some code whenever it occurs

We also have one additional form of data binding where we combine both directions - `two-ways data binding`. Where we are able to react events and output something at the same time.
