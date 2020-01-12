---
layout: layouts/base.njk
title: Home
permalink: /
eleventyNavigation:
  key: Home
  order: 1
---
## Latest Posts:
{%- assign posts = collections.post | reverse -%}
{% for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}