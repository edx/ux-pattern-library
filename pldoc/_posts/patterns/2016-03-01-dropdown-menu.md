---
layout:                 pattern
title:                  Dropdown Menu
date:                   2016-02-29 00:00:00

categories:             patterns
tags:
- atomic
- pattern
- js
- dropdown
- menu

slug:                   dropdown menu

url_styles:             "patterns/_dropdown-menu.scss"

description:            Dropdown Menu in a view.

info:                   A JavaScript controlled dropdown menu.
ui-toolkit-component:   dropdown-menu
js:                     "/examples/dropdown-menu-js.html"
---
<h4 class="hd-6 example-set-hd">Basic Dropdown</h4>
<div class="example-set">
    <div class="js-user-cta"></div>
</div>

<h4 class="hd-6 example-set-hd">Dropdown with Image</h4>
<div class="example-set">
    <div class="js-user-cta-img"></div>
</div>

<h4 class="hd-6 example-set-hd">Pre-Rendered DOM</h4>
<div class="example-set prerendered-dropdown js-dropdown-menu-vol-4">
    <div class="wrapper-more-actions dropdown-menu-container">
        <a href="/" class="menu-title">Vol 4</a>
        <button type="button" class="menu-button button-more has-dropdown js-dropdown-button default-icon" aria-haspopup="true" aria-expanded="false" aria-controls="edx-prerendered-user-menu">
            <span class="sr-only">User options dropdown</span>
        </button>
        <ul class="dropdown-menu is-hidden" id="edx-prerendered-user-menu" tabindex="-1">
            <li class="dropdown-item"><a href="/" class="action">Wheels Of Confusion</a></li>
            <li class="dropdown-item"><a href="/" class="action">Tomorrow's Dream</a></li>
            <li class="dropdown-item"><a href="/" class="action">Changes</a></li>
            <li class="dropdown-item"><a href="/" class="action">FX</a></li>
            <li class="dropdown-item"><a href="/" class="action">Supernaut</a></li>
            <li class="dropdown-item"><a href="/" class="action">Snowblind</a></li>
            <li class="dropdown-item"><a href="/" class="action">Cornucopia</a></li>
            <li class="dropdown-item"><a href="/" class="action">Laguna Sunrise</a></li>
            <li class="dropdown-item"><a href="/" class="action">St. Vitus Dance</a></li>
            <li class="dropdown-item"><a href="/" class="action">Under The Sun</a></li>
         </ul>
    </div>
</div>