---
layout: layouts/base.njk
title: Projects
permalink: /projects/
eleventyNavigation:
  key: Projects
  order: 3
---
## Latest Posts:
{%- assign posts = collections.posts | reverse -%}
{% for post in posts %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}