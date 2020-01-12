---
layout: layouts/base.njk
title: Home
permalink: /
eleventyNavigation:
  key: 🏠
  order: 1
---
# Hello! I'm Koa.

I am a web developer with particular interest in lightweight micro-sites compatible with featurephones and Kai OS. Please take a look around and feel free to contact me with any questions or inquiries.

## Latest Posts:
{%- assign posts = collections.post | reverse -%}
{% for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}