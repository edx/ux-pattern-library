---
layout:         pattern
title:          Tables
date:           2015-12-11 00:00:00

categories:     component
tags:
- atomic
- pattern
- buttons

slug:           tables

url_styles:     "patterns/_tables.scss"

description:    A collection of table styles and options available for displaying tabular data in the edX platform.

info:           Tables are used for displaying information in tabular format, where is useful to be able to examine and compare data or information in columns and rows. edX offers several table styles to provide ways to display most tabular data, including an example that contains the full set of supported semantic elements.

---

<h3 class="hd-6 example-set-hd">Basic</h3>
<div class="example-set">
  <table class="table">
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Lineage</th>
    </tr>
    <tr>
      <td>Aragorn II</td>
      <td>Elessar</td>
      <td>Son of Arathorn</td>
    </tr>
    <tr>
      <td>Bilbo</td>
      <td>Baggins</td>
      <td>Bag End</td>
    </tr>
    <tr>
      <td>Meriadoc</td>
      <td>Brandybuck</td>
      <td>Buckland</td>
    </tr>
    <tr>
      <td>Treebeard</td>
      <td>Fangorn</td>
      <td>Fangorn Forest</td>
    </tr>
  </table>
</div>

<h3 class="hd-6 example-set-hd">Simplified and cozy</h3>

<div class="example-set-description copy-meta">
    <p>A tighter table layout.</p>
</div>

<div class="example-set">
  <table class="table table-simplified table-cozy">
    <tr>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Lineage</th>
    </tr>
    <tr>
      <td>Aragorn II</td>
      <td>Elessar</td>
      <td>Son of Arathorn</td>
    </tr>
    <tr>
      <td>Bilbo</td>
      <td>Baggins</td>
      <td>Bag End</td>
    </tr>
    <tr>
      <td>Meriadoc</td>
      <td>Brandybuck</td>
      <td>Buckland</td>
    </tr>
    <tr>
      <td>Treebeard</td>
      <td>Fangorn</td>
      <td>Fangorn Forest</td>
    </tr>
  </table>
</div>

<h3 class="hd-6 example-set-hd">Full Semantic Set</h3>

<div class="example-set-description copy-meta">
    <p>Tables can include a variety of elements that carry semantic meaning; the following example includes a caption, colgroups with highlighted columns, headers for both columns and rows, and a table footer. It also includes some classes for special cases: a wrapper div that allows for scrolling on smaller screens, highlights for columns or cells, and classes for overriding text alignment.</p>
</div>

<div class="example-set">
  <div class="wrapper-table-scrollable">
    <table class="table">
      <caption>Some fantastical towns and their key characteristics</caption>
      <colgroup class="colgroup">
        <col class="col col1">
      </colgroup>
      <colgroup class="colgroup">
        <col class="col col2">
        <col class="col col3 is-highlighted">
        <col class="col col4">
        <col class="col col5">
      </colgroup>
      <colgroup class="colgroup is-highlighted">
        <col class="col col6">
      </colgroup>
      <thead>
        <tr>
          <th scope="col">Town Name</th>
          <th scope="col">Founding feature</th>
          <th scope="col">Weaknesses</th>
          <th scope="col">Strengths</th>
          <th scope="col">Primary Inhabitants</th>
          <th scope="col">No. Inhabitants</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Pernrith</th>
          <td>Ancient water source</td>
          <td>Low economy</td>
          <td>Rare animal training and rare herbalism</td>
          <td>People</td>
          <td class="align-right">15</td>
        </tr>
        <tr>
          <th scope="row">Fandralore</th>
          <td>Strong metal ores</td>
          <td>Armorsmithing</td>
          <td>Sustainable hunting and prosperous trade</td>
          <td>Elves</td>
          <td class="align-right">20</td>
        </tr>
        <tr class="highlight">
          <th scope="row">Kasmord</th>
          <td>Precious gems</td>
          <td>Medicine</td>
          <td>Strong magicians and refined baking</td>
          <td>Elves</td>
          <td class="align-right">25</td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="align-right">
          <th scope="row" colspan="5">Total World Inhabitants</th>
          <td class="align-right">60</td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>

<h3 class="hd-6 example-set-hd">Responsive (with Column hiding)</h3>

<div class="example-set-description copy-meta">
    <p>The example below shows a way to hide non-essential table columns to accommodate small screens.</p>
</div>

<div class="example-set">
  <table class="table table-responsive">
    <colgroup class="colgroup">
      <col class="col col1">
    </colgroup>
    <colgroup class="colgroup">
      <col class="col col2">
      <col class="col col3">
      <col class="col col4">
      <col class="col col5">
    </colgroup>
    <colgroup class="colgroup">
      <col class="col col6">
    </colgroup>
    <thead>
      <tr>
        <th scope="col">Town Name</th>
        <th scope="col">Founding feature</th>
        <th scope="col" class="supplemental">Weaknesses</th>
        <th scope="col" class="supplemental">Strengths</th>
        <th scope="col">Primary Inhabitants</th>
        <th scope="col">No. Inhabitants</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Pernrith</th>
        <td>Ancient water source</td>
        <td class="supplemental">Low economy</td>
        <td class="supplemental">Rare animal training and rare herbalism</td>
        <td>People</td>
        <td>15</td>
      </tr>
      <tr>
        <th scope="row">Fandralore</th>
        <td>Strong metal ores</td>
        <td class="supplemental">Armorsmithing</td>
        <td class="supplemental">Sustainable hunting and prosperous trade</td>
        <td>Elves</td>
        <td>20</td>
      </tr>
      <tr>
        <th scope="row">Kasmord</th>
        <td>Precious gems</td>
        <td class="supplemental">Medicine</td>
        <td class="supplemental">Strong magicians and refined baking</td>
        <td>Elves</td>
        <td>25</td>
      </tr>
    </tbody>
  </table>
</div>


<h3 class="hd-6 example-set-hd">Sortable</h3>
<div class="example-set">
  <table class="table table-sortable">
    <tr>
      <th scope="col" class="sortable sort-current sort-descending">
        First
        <button class="sort action-sort">
          <span class="icon-fallback icon-fallback-text">
            <span class="icon icon-sort" aria-hidden="true"></span>
            <span class="text">Sort<span class="sr">&nbsp;Ascending</span></span>
          </span>
        </button>
      </th>
      <th scope="col" class="sortable">
        Last
        <button class="sort action-sort">
          <span class="icon-fallback icon-fallback-text">
            <span class="icon icon-sort" aria-hidden="true"></span>
            <span class="text">Sort<span class="sr">&nbsp;Ascending</span></span>
          </span>
        </button>
      </th>
      <th scope="col" class="sortable">
        Lineage
        <button class="sort action-sort">
          <span class="icon-fallback icon-fallback-text">
            <span class="icon icon-sort" aria-hidden="true"></span>
            <span class="text">Sort<span class="sr">&nbsp;Ascending</span></span>
          </span>
        </button>
      </th>
    </tr>
    <tr>
      <td>Aragorn II</td>
      <td>Elessar</td>
      <td>Son of Arathorn</td>
    </tr>
    <tr>
      <td>Bilbo</td>
      <td>Baggins</td>
      <td>Bag End</td>
    </tr>
    <tr>
      <td>Meriadoc</td>
      <td>Brandybuck</td>
      <td>Buckland</td>
    </tr>
    <tr>
      <td>Treebeard</td>
      <td>Fangorn</td>
      <td>Fangorn Forest</td>
    </tr>
  </table>
</div>
