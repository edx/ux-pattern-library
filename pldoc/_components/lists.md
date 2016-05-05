---
layout:       pattern
title:        Lists
date:         2016-01-06 00:00:00

categories:         component
tags:               
- atomic
- pattern
- lists

slug:               lists

url_styles:         "patterns/_lists.scss"
url_documentation:  Styleguide:-Lists

description:        Lists are used to group related content in a number of settings and cases.

info:               Lists are used to group related content in a number of settings (e.g. ordered, unordered) and cases (e.g. definitions, links, etc.).
---

<h3 class="hd-6 example-set-hd">Bulleted List</h3>

<div class="example-set-description copy copy-meta">
    <p>Bulleted, or unordered , lists show a loose association with no sequential meaning. Its important to note that list-based styling can be applied to non-semantic list markup, but only when appropriate (and when leveraging any necessary role attributes).</p>
</div>

<div class="example-set">
    <ul class="list-bulleted">
        <li class="item">Apples</li>
        <li class="item">Apricots</li>
        <li class="item">Bananas</li>
        <li class="item">Blackberries</li>
        <li class="item">Blueberries</li>
        <li class="item">Cherries</li>
        <li class="item">Coconuts</li>
        <li class="item">Cranberries</li>
        <li class="item">Figs</li>
        <li class="item">Oranges</li>
        <li class="item">Plums</li>
    </ul>

    <ul class="list-bulleted list-circle">
        <li class="item">Blueberries</li>
        <li class="item">Cherries</li>
        <li class="item">Coconuts</li>
        <li class="item">Cranberries</li>
    </ul>

    <div class="list-bulleted" role="list">
        <p class="item" role="listitem">Designed on top of an ocean, the town of Darnassea is home to dark elves lead by Colonel Alduin. This town wasn't built by an ocean by accident, as it has ancient, lost technologies, which is of great importance to the people of Darnassea and its success.</p>
        <p class="item" role="listitem">Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming.</p>
        <p class="item">Raised inside a geyser field, the port of Darkwell is home to vikings lead by Mrs. Chilson. This port wasn't built by a geyser field by accident, as it has rare resources, which is of great importance to the people of Darkwell and its success.</p>
    </div>

    <ul class="list-bulleted list-disc no-indent">
        <li class="item">Figs (No Indent)</li>
        <li class="item">Oranges (No Indent)</li>
        <li class="item">Plums (No Indent)</li>
    </ul>
</div>

<h3 class="hd-6 example-set-hd">Ordered Lists</h3>

<div class="example-set-description copy copy-meta">
    <p>Ordered lists show a sequentially-based association between items. Its important to note that list-based styling can be applied to non-semantic list markup, but only when appropriate (and when leveraging any necessary role attributes).</p>
</div>

<div class="example-set">
    <ol class="list-ordered">
        <li class="item">Apples</li>
        <li class="item">Apricots</li>
        <li class="item">Bananas</li>
        <li class="item">Blackberries</li>
        <li class="item">Blueberries</li>
        <li class="item">Cherries</li>
        <li class="item">Coconuts</li>
        <li class="item">Cranberries</li>
        <li class="item">Figs</li>
        <li class="item">Oranges</li>
        <li class="item">Plums</li>
    </ol>

    <div class="list-ordered" role="list">
        <p class="item" role="listitem">Designed on top of an ocean, the town of Darnassea is home to dark elves lead by Colonel Alduin. This town wasn't built by an ocean by accident, as it has ancient, lost technologies, which is of great importance to the people of Darnassea and its success.</p>
        <p class="item" role="listitem">Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming.</p>
        <p class="item" role="listitem">Raised inside a geyser field, the port of Darkwell is home to vikings lead by Mrs. Chilson. This port wasn't built by a geyser field by accident, as it has rare resources, which is of great importance to the people of Darkwell and its success.</p>
    </div>

    <ol class="list-ordered no-indent">
        <li class="item">Figs (No Indent)</li>
        <li class="item">Oranges (No Indent)</li>
        <li class="item">Plums (No Indent)</li>
    </ol>
</div>


<h3 class="hd-6 example-set-hd">Unstyled Lists</h3>
<div class="example-set">
    <ul class="list-unstyled">
        <li class="item">Apples</li>
        <li class="item">Apricots</li>
        <li class="item">
            <a href="https://solidthreads.com/media/catalog/product/i/m/image_78.jpg">Bananas</a>
        </li>
        <li class="item">Blackberries</li>
    </ul>
</div>


<h3 class="hd-6 example-set-hd">Inline List</h3>
<div class="example-set">
    <ol class="list-inline">
        <li class="item">Install</li>
        <li class="item">Configure</li>
        <li class="item">Create New File</li>
        <li class="item">
            <a href="https://solidthreads.com/media/catalog/product/i/m/image_78.jpg">Begin Authoring</a>
        </li>
    </ol>
</div>

<h3 class="hd-6 example-set-hd">Nested Lists</h3>
<div class="example-set">
    <ul>
        <li class="item">
            Apples

            <ul>
                <li>Red Delicious</li>
                <li>Macintosh</li>
                <li>Granny Smith</li>
                <li>Honey Crisp</li>
            </ul>
        </li>
        <li class="item">Apricots</li>
        <li class="item">Bananas</li>
        <li class="item">Blackberries</li>
    </ul>

    <ol>
        <li class="item">Blueberries</li>
        <li class="item">
            Cherries

            <ol>
                <li>Bing</li>
                <li>Balaton</li>
                <li>Ulster</li>
                <li>Maraschino</li>
            </ol>
        </li>
        <li class="item">Coconuts</li>
        <li class="item">Cranberries</li>
    </ol>
</div>

<h3 class="hd-6 example-set-hd">Definition Lists</h3>
<div class="example-set">
    <dl>
        <dt class="hd-3">RSS (hd-3)</dt>
        <dd>An XML format for aggregating information from websites whose 
        content is frequently updated.</dd>
        <dt class="hd-3">Weblog  (hd-3)</dt>
        <dd>Contraction of the term "web log", a weblog is a 
        website that is periodically updated, like a journal</dd>
    </dl>

    <dl>
        <dt class="hd-6">Founders: (hd-6)</dt>
        <dd class="copy-meta">Clark Kent (meta copy)</dd>
        <dd class="copy-meta">Bruce Wayne (meta copy)</dd>
        <dd class="copy-meta">Diana Prince (meta copy)</dd>
        <dt class="hd-6">Members: (hd-6)</dt>
        <dd class="copy-meta">Hal Jordan (meta copy)</dd>
        <dd class="copy-meta">Barry Allen (meta copy)</dd>
        <dd class="copy-meta">J'onn J'onzz (meta copy)</dd>
    </dl>
</div>

<h3 class="hd-6 example-set-hd">List with Visual Dividers</h3>
<div class="example-set">
    <ul class="list-divided">
        <li class="item">Apples</li>
        <li class="item">Apricots</li>
        <li class="item">
            <a href="https://solidthreads.com/media/catalog/product/i/m/image_78.jpg">Bananas</a>
        </li>
        <li class="item">Blackberries</li>
    </ul>

    <ul class="list-divided">
        <li class="item has-block-link">
            <a href="http://ux.edx.org/">Apples (Block-level links)</a>
        </li>
        <li class="item has-block-link">
            <a href="http://ux.edx.org/">Apricots (Block-level links)</a>
        </li>
        <li class="item has-block-link">
            <a href="http://ux.edx.org/">Bananas (Block-level links)</a>
        </li>
    </ul>
</div>

<h3 class="hd-6 example-set-hd">Lists with Complex Content</h3>

<div class="example-set-description copy copy-meta">
    <p>Light scaffolding for more complex UI/visually appearing lists is provided. Please note that the best semantic markup for the situation should be chosen when leveraging this extension.</p>
</div>

<div class="example-set">
    <div class="list" role="list">
        <div class="item item-complex" role="listitem">
            <h2 class="item-hd">Home</h2>
            <p class="item-copy">You know, where the heart is</p>
        </div>
        <div class="item item-complex" role="listitem">
            <span class="item-hd">Darnassea</span>
            <p class="item-copy">Designed on top of an ocean, the town of Darnassea is home to dark elves lead by Colonel Alduin.
This town wasn't built by an ocean by accident, as it has ancient, lost technologies, which is of great importance to the people of Darnassea and its success.</p>
        </div>
        <div class="item item-complex" role="listitem">
            <h2 class="item-hd hd-2">Complex Item Heading (hd-2)</h2>
            <p class="item-copy-large">Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming (large copy).</p>
        </div>
        <div class="item item-complex" role="listitem">
            <h2 class="item-hd hd-5">Darkwell (hd-5)</h2>
            <p class="item-copy-meta">Raised inside a geyser field, the port of Darkwell is home to vikings lead by Mrs. Chilson. This port wasn't built by a geyser field by accident, as it has rare resources, which is of great importance to the people of Darkwell and its success (meta copy).</p>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Grouped Lists</h3>

<div class="example-set-description copy copy-meta">
    <p>Grouped lists more strongly show a relationship between items. Additionally, they can be used in tandem with block-level link styling.</p>
</div>

<div class="example-set">
    <ul class="list-grouped">
        <li class="item">Apples</li>
        <li class="item">Apricots</li>
        <li class="item"><a href="http://ux.edx.org">Bananas</a></li>
        <li class="item">Blackberries</li>
    </ul>
    
    <div class="list-grouped" role="list">
        <div class="item item-complex" role="listitem">
            <span class="item-hd">Darnassea</span>
            <p class="item-copy">Designed on top of an ocean, the town of Darnassea is home to dark elves lead by Colonel Alduin.
This town wasn't built by an ocean by accident, as it has ancient, lost technologies, which is of great importance to the people of Darnassea and its success</p>
        </div>
        <div class="item item-complex" role="listitem">
            <h5 class="item-hd hd-2">Darkwell (hd-2)</h5>
            <p class="item-copy-large">Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming (large copy).</p>
        </div>
    </div>

    <ul class="list-grouped">
        <li class="item has-block-link">
            <a href="http://ux.edx.org/">Apples (Block-level links)</a>
        </li>
        <li class="item has-block-link">
            <a href="http://ux.edx.org/">Apricots (Block-level links)</a>
        </li>
        <li class="item item-complex">
            <h5 class="item-hd hd-2">Darkwell (hd-2)</h5>
            <p class="item-copy-large">Darkwell has a troubled economy, which is mainly supported by jewelcrafting, fishing and fletching. But their biggest strengths are intricate jewelcrafting and rare herbalism. However, Darkwell lacks people skilled in farming (large copy).</p>
        </li>
        <li class="item has-block-link">
            <a href="http://ux.edx.org/">Bananas (Block-level links)</a>
        </li>
    </ul>
</div>
