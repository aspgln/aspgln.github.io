---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed journal publications and conference abstracts.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications-minimal">

<h2>Journal Publications</h2>

{% bibliography --template bib_minimal --group_by none %}

<h2>Conference Abstracts</h2>

{% bibliography -f abstracts --template bib_minimal --group_by none %}

</div>
