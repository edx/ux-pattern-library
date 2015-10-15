---
layout:         pattern
title:          Collapse + Expand
date:           2015-10-14 00:00:00

categories:     patterns
tags:           
- atomic
- pattern
- collapse
- expand

slug:           collapse-expand
scssurl:        "components/_collapse-expand.scss"

description:    Collapse and expand elements in a view.

info:           Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.
---

<h3 class="hd-6 example-set-hd">Basic Example</h3>
<div class="example-set example-collapsible-1">
    <div class="collapsible-container" data-collapsed-text="Expand Toggle" data-expanded-text="Collapse Toggle">

        <button type="button" aria-controls="collapsible-target" class="btn btn-default btn-small collapsible-toggle js-collapsible-toggle">Show Collapsed Help (collapsible-target)</button>

        <div class="js-collapsible-target collapsible-target">
            <p class="copy copy-base">Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming. (collapsible-target)</p>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Basic Example with Icons</h3>
<div class="example-set example-collapsible-2">
    <div class="collapsible-container" data-collapsed-text="Expand Toggle" data-expanded-text="Collapse Toggle">

        <button type="button" aria-controls="collapsible-target" class="btn btn-default btn-small collapsible-toggle js-collapsible-toggle">
            <span class="icon icon-arrow-up icon-inline" aria-hidden="true"></span>
            Show Collapsed Help (collapsible-target)
        </button>

        <div class="js-collapsible-target collapsible-target">
            <p class="copy copy-base">Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming. (collapsible-target)</p>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Other Examples</h3>

<div class="example-set example-collapsible-3">
    <div class="collapsible-container" data-collapsed-text="Show Fine Print" data-expanded-text="Hide Fine Print">

        <h4 class="hd hd-3">Example App's Terms of Service</h4>

        <section class="copy copy-base">
            <p>Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming.</p>

            <p>Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming.</p>
        </section>

        <h5 class="hd hd-4">Your Rights to Use this Example App</h5>

        <section class="copy copy-base">
            <p>Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming.</p>

            <p>Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming.</p>

            <p>Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming.</p>
        </section>

        <div class="js-collapsible-target collapsible-target">
            <h5 class="hd hd-7 de-emphasized">Legalese and The Fine Print</h5>

            <div class="copy copy-micro">
                <p>Raised inside a geyser field, the port of Darkwell is home to vikings lead by Mrs. Chilson. This port wasn't built by a geyser field by accident, as it has rare resources, which is of great importance to the people of Darkwell and its success. (de-emphasized lead copy)</p>

                <p>Raised inside a geyser field, the port of Darkwell is home to vikings lead by Mrs. Chilson. This port wasn't built by a geyser field by accident, as it has rare resources, which is of great importance to the people of Darkwell and its success. (de-emphasized lead copy)</p>
            </div>
        </div>

        <button type="button" aria-controls="collapsible-target" class="btn btn-link btn-small collapsible-toggle js-collapsible-toggle">Show/Hide Fine Print</button>
    </div>
</div>

<div class="example-set example-collapsible-4">

    <div class="collapsible-container" data-collapsed-text="Show Messages" data-expanded-text="Hide Messages">

        <button type="button" aria-controls="collapsible-target" class="btn btn-link btn-small collapsible-toggle js-collapsible-toggle">Show/Hide Notifications</button>

        <div class="js-collapsible-target collapsible-target">
            <div class="card">
                <h4 class="hd hd-5">Hey! You haven't completed your profile yet</h4>

                <p class="copy copy-meta">Completing your edX profile helps us suggest better courses and subjects to you and it helps your fellow students find and connect with you easier.</p>

                <button type="button" class="btn btn-primary btn-small">Spiff up your profile!</button>
            </div>

            <div class="card">
                <h4 class="hd hd-5">Exam time!</h4>

                <p class="copy copy-meta">You have an exam in 2 days. Time to crack the books and study. Let's try <a href="http://ux.edx.org">revisiting a few key lessons</a>.</p>
            </div>

            <div class="card">
                <h4 class="hd hd-5">Welcome back, JaneDoe</h4>

                <p class="copy copy-meta">We haven't seen you in a bit! Let's get going again in <a href="http://ux.edx.org">Course Name</a></p>

                <a href="http://ux.edx.org" class="btn btn-primary btn-small">Take me to Week #2</a>
            </div>
        </div>
    </div>
</div>
