---
layout:                 pattern
title:                  Breadcrumbs
date:                   2016-02-29 00:00:00

categories:             component
tags:
- atomic
- pattern
- js
- breadcrumbs
- nav

slug:                   breadcrumbs

url_styles:             "patterns/_breadcrumbs.scss"

description:            Breadcrumb navigation.

info:                   Accessible tiered navigation using breadcrumbs.
ui-toolkit-component:   breadcrumbs
js:                     "/examples/breadcrumbs-js.html"
---
<div class="breadcrumbs-basic example-set">
  <h2>Basic breadcrumbs</h2>
  <div class="has-breadcrumbs hd-3"></div>
  <a class="add-breadcrumb" href="">Add breadcrumb</a>
</div>

<div class="breadcrumbs-prerendered example-set">
  <h2>Pre-rendered breadcrumbs</h2>
  <div class="has-breadcrumbs hd-3">
    <nav class="breadcrumbs list-inline" aria-label="Example of pre-rendered breadcrumbs navigation">
      <span class="nav-item">
          <a href="/components/breadcrumbs/">Initial page</a>
          <span class="fa fa-angle-right" aria-hidden="true"></span>
      </span>
      <span class="nav-item">
          <a href="/components/breadcrumbs/foo">foo</a>
          <span class="fa fa-angle-right" aria-hidden="true"></span>
      </span>
      <span class="nav-item">
          <a href="/components/breadcrumbs/foo/buzz">buzz</a>
          <span class="fa fa-angle-right" aria-hidden="true"></span>
      </span>
      <span class="nav-item">
          <a href="/components/breadcrumbs/foo/buzz/bar">bar</a>
          <span class="fa fa-angle-right" aria-hidden="true"></span>
      </span>
      <span class="nav-item">buzz</span>
    </nav>
  </div>
</div>
