---
layout:         pattern
title:          Buttons
date:           2015-12-28 00:00:00

categories:     component
tags:           
- atomic
- pattern
- buttons

slug:           buttons

url_styles:     "patterns/_buttons.scss"
url_documentation:  Styleguide:-Accessibility#buttons-and-links

description:    A collection of buttons available for using within the edX platform.

info:          Buttons should be used for performing actions within the edX environment.  While you may apply the visual style of these elements to both semantic links and buttons, a good rule of thumb is that buttons do something while links go somewhere. Buttons have several visual weights, sizes, and add-ons that can be configured alongside their use.
---

<h3 class="example-set-hd">Default</h3>
<div class="example-set">
    <button type="button" class="btn">Default</button>
    <button type="button" class="btn btn-large">Default Large</button>
    <button type="button" class="btn btn-small">Default Small</button>
    <button type="button" class="btn" disabled>Base Disabled</button>
</div>

<h3 class="example-set-hd">Neutral</h3>
<div class="example-set">
    <button type="button" class="btn-neutral">Neutral</button>
    <button type="button" class="btn-neutral btn-large">Neutral Large</button>
    <button type="button" class="btn-neutral btn-small">Neutral Small</button>
    <button type="button" class="btn-neutral" disabled>Neutral Disabled</button>
</div>

<h3 class="example-set-hd">Brand</h3>
<div class="example-set">
    <button type="button" class="btn-brand">Primary</button>
    <button type="button" class="btn-brand btn-large">Primary Large</button>
    <button type="button" class="btn-brand btn-small">Primary Small</button>
    <button type="button" class="btn-brand" disabled>Primary Disabled</button>
</div>

<h3 class="example-set-hd">Elevated</h3>
<div class="example-set">
    <button type="button" class="btn-elevated">Elevated</button>
    <button type="button" class="btn-elevated btn-large">Elevated Large</button>
    <button type="button" class="btn-elevated btn-small">Elevated Small</button>
    <button type="button" class="btn-elevated" disabled>Elevated Disabled</button>
</div>

<h3 class="example-set-hd">Buttons with icons</h3>
<div class="example-set">
    <button type="button" class="btn">
        <span class="icon fa fa-comment" aria-hidden="true"></span>
        Default
    </button>
    <button type="button" class="btn-neutral">
        <span class="icon fa fa-comment" aria-hidden="true"></span>
        Neutral
    </button>
    <button type="button" class="btn-brand">
        <span class="icon fa fa-comment" aria-hidden="true"></span>
        Brand
    </button>
    <button type="button" class="btn-elevated">
        <span class="icon fa fa-comment" aria-hidden="true"></span>
        Elevated
    </button>
</div>

<h3 class="example-set-hd">Combo</h3>
<div class="example-set">
    <div class="btn-group" role="group">
        <button type="button" class="btn">Date</button>
        <button type="button" class="btn">Popularity</button>
        <button type="button" class="btn">Comments</button>
        <button type="button" class="btn">Length</button>
        <button type="button" class="btn">By You</button>
    </div>

    <div class="btn-group" role="group">
        <button type="button" class="btn">Edit</button>
        <button type="button" class="btn">Preview</button>
    </div>
</div>

<h3 class="example-set-hd">Inverse</h3>
<div class="example-set">
    <div class="button-overlay-demo">
        <button type="button" class="btn-inverse">Inverse</button>
        <button type="button" class="btn-inverse btn-large">Inverse Large</button>
        <button type="button" class="btn-inverse btn-small">Inverse Small</button>
        <button type="button" class="btn" disabled>Base Disabled</button>
    </div>
</div>

<h3 class="example-set-hd">Links with visual styling applied</h3>
<div class="example-set">
    <a href="http://ux.edx.org/" class="btn">View the UX Pattern Library</a>
    <a href="http://ux.edx.org/" class="btn-neutral">View the UX Pattern Library</a>
    <a href="http://ux.edx.org/" class="btn-brand">View the UX Pattern Library</a>
    <a href="http://ux.edx.org/" class="btn-elevated">View the UX Pattern Library</a>
</div>

<h3 class="example-set-hd">Links without visual styling</h3>
<div class="example-set">
    <button type="button" class="btn-link">Link</button>
    <button type="button" class="btn-link btn-large">Link Large</button>
    <button type="button" class="btn-link btn-small">Link Small</button>
</div>
