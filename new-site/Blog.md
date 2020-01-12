---
layout: layouts/base.njk
title: Blog
permalink: /posts/
eleventyNavigation:
    key: Blog
    order: 2
---

{%- assign posts = collections.post | reverse -%}
{% for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}