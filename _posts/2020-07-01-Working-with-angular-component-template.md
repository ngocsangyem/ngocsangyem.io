---
layout: post
title: 'Working with Angular component template'
author: Sang
categories: [Angular]
image: assets/images/webp/07_2020/angular_html.webp
rating: false
comments: false
---

Instead of using an external template file, we can also use an inline template which means you define the `HTML`code in the `Typescript` code.

We can do this by simply going to our component change `templateUrl` to `template`.


{% responsive_image path: assets/images/webp/07_2020/angular_template_code_1.webp alt: 'Angular template code'%}

> Either linked to an external template or just the template to define it in component's typescript file, one of two has to be present. Each component needs to have a template, this is the one property you have to have at all times.

Now we can write our template code in `Typescript` file.

{% responsive_image path: assets/images/webp/07_2020/angular_template_code_2.webp alt: 'Angular template code'%}

If you want to write multi-line strings, which you probably want if you add more HTML code to it, you can switch from a normal string with single quotation marks to using back ticks by `Javascript template expressions`, to be able to write multi-line strings.

{% responsive_image path: assets/images/webp/07_2020/angular_template_code_3.webp alt: 'Angular template code'%}