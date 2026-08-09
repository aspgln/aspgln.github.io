---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications-minimal">

{% bibliography --template bib_minimal --group_by none %}

<h2>Selected Conference Abstracts</h2>

{% bibliography -f abstracts --query @*[feature=true] --template bib_minimal --group_by none %}

</div>
