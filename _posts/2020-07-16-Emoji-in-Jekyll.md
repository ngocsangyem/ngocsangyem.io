---
layout: post
title: 'Emoji in Jekyll'
author: Sang
categories: [Jekyll]
image: assets/images/webp/07_2020/emoji.webp
rating: false
comments: false
---

Add the following to your site's `Gemfile`

```sh
gem 'jemoji'
```

And add the following to your site's `_config.yml`

```sh
plugins:
  - jemoji
```

> If you are using a Jekyll version less than 3.5.0, use the gems key instead of plugins.

In any page or post, use emoji as you would normally, e.g.

```sh
I give this plugin two :+1:!
```

[A handy emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
