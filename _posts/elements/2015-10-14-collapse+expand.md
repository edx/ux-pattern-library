---
layout:       element
title:        Collapse + Expand
date:         2015-10-14 00:00:00

categories:   elements
tags:
- atomic
- pattern
- collapse
- expand

slug:         collapse-expand
scssurl:      "components/_collapse-expand.scss"



description:  Collapse and expand elements in a view.

info: Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.
---

<h3 class="hd-6 example-set-hd">Basic Example</h3>

<div class="example-set-description copy copy-meta">
    <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.</p>
</div>

<div id="collapsible-example" data-collapse-text="Expand Toggle" data-expand-text="Collapse Toggle">

    <button type="button" aria-controls="collapsible-target" class="btn btn-link btn-base js-collapsible-toggle">
        Collapse Toggle
    </button>

    <div id="collapsible-target" class="js-collapsible-target">
        <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum.</p>
    </div>

</div>
