---
layout:       pattern
title:        Colors
date:         2015-04-03 00:00:00

categories:   design_element
tags:
- atomic
- demo
- colors

slug:         colors

description:  Predefined system and configurable colors with calculated ranges

info: These are the predefined colors used throughout our patterns. Each color is displayed on various background colors for easy combinations. Those colors which have a yellow warning icon are not accessible combinations and should be avoided. For example, our grayscale below does not provide enough contrast on a white background (nor white on the gray background). Click any color for more information and developer values.
---

<div class="info-pane is-hidden" tabindex="-1">
    <header class="info-pane-header">
        <button type="button" class="close-button">
            <span class="icon fa fa-close" aria-hidden="true"></span>
            <span>Close</span>
        </button>
        <h2 class="hd-4 color-info-title"></h2>
        <div class="color-description"></div>
    </header>
    <div class="color-info-content">
        <div class="color-usage">
            <p>Optimum color combinations:</p>
            <div class="list-background">
                <h3 class="hd-6 emphasized" id="color-combination-background">Best on backgrounds that are</h3>
                <ul class="color-combinations background" aria-describedby="color-combination-background"></ul>
            </div>
        </div>
        <div class="color-technics">
            <h3 class="hd-6 emphasized">Developers</h3>
            <dl>
                <dt>Sass:</dt>
                <dd class="color-reference is-copyable"></dd>
                <dt>RGB:</dt>
                <dd class="color-rgb is-copyable"></dd>
                <dt>HEX:</dt>
                <dd class="color-hex is-copyable"></dd>
            </dl>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Base Palette</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row on-white">
                <div class="col col-4">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">primary</span>
                        </div>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">secondary</span>
                        </div>
                    </div>
                </div>
                <div class="col col-4">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">gray</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row on-white">
                <div class="col col-4">
                    <button type="button" class="swatch primary base" title="Swatch: Primary Base"></button>
                </div>
                <div class="col col-4">
                    <button type="button" class="swatch secondary base" title="Swatch: Secondary Base"></button>
                </div>
                <div class="col col-4">
                    <button type="button" class="swatch grayscale base" title="Swatch: Gray Base"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Brand Primary</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2"></div>
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">base</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">back</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">x-back</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row on-dark-primary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on white"></button>
                </div>
            </div>
            <div class="row on-base-primary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        base
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on gray"></button>
                </div>
            </div>
            <div class="row on-accent-primary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        accent
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on accent"></button>
                </div>
            </div>
            <div class="row on-back-primary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on background"></button>
                </div>
            </div>
            <div class="row on-x-back-primary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        x-back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on very light background"></button>
                </div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on white"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on dark gray"></button>
                </div>
            </div>
            <div class="row on-base-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        base
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on base"></button>
                </div>
            </div>
            <div class="row on-accent-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        accent
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on accent"></button>
                </div>
            </div>
            <div class="row on-back-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on back"></button>
                </div>
            </div>
            <div class="row on-x-back-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        x-back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary dark" title="Primary Dark on x-back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary base" title="Primary Base on x-back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary accent" title="Primary Accent on x-back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary back" title="Primary Background on x-back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch primary x-back" title="Primary Extra light background on x-back"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Brand Secondary</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2"></div>
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">base</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">back</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">x-back</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row on-dark-secondary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on white"></button>
                </div>
            </div>
            <div class="row on-base-secondary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        base
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on gray"></button>
                </div>
            </div>
            <div class="row on-accent-secondary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        accent
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on accent"></button>
                </div>
            </div>
            <div class="row on-back-secondary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on background"></button>
                </div>
            </div>
            <div class="row on-x-back-secondary">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        x-back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on very light background"></button>
                </div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on white"></button>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on dark gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on dark gray"></button>
                </div>
            </div>
            <div class="row on-base-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        base
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on base"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on base"></button>
                </div>
            </div>
            <div class="row on-accent-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        accent
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on accent"></button>
                </div>
            </div>
            <div class="row on-back-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on back"></button>
                </div>
            </div>
            <div class="row on-x-back-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        x-back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary dark" title="Secondary Dark on x-back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary base" title="Secondary Base on x-back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary accent" title="Secondary Accent on x-back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary back" title="Secondary Background on x-back"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch secondary x-back" title="Secondary Extra light background on x-back"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Brand Gray</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2"></div>
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">dark</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">base</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">back</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">x-back</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row on-dark-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        dark
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Gray Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Gray Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale accent" title="Gray Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-back" title="Gray Extra light background on white"></button>
                </div>
            </div>
            <div class="row on-base-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        base
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Gray Dark on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Gray Base on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale accent" title="Gray Accent on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on gray"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-back" title="Gray Extra light background on gray"></button>
                </div>
            </div>
            <div class="row on-accent-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        accent
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Gray Dark on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Gray Base on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale accent" title="Gray Accent on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on accent"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-back" title="Gray Extra light background on accent"></button>
                </div>
            </div>
            <div class="row on-back-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Gray Dark on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Gray Base on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale accent" title="Gray Accent on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-back" title="Gray Extra light background on background"></button>
                </div>
            </div>
            <div class="row on-x-back-grayscale">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        x-back
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Gray Dark on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Gray Base on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale accent" title="Gray Accent on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on very light background"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-back" title="Gray Extra light background on very light background"></button>
                </div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale dark" title="Gray Dark on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale base" title="Gray Base on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale accent" title="Gray Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale back" title="Gray Background on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch grayscale x-back" title="Gray Extra light background on white"></button>
                </div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Success</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">text</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">back</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success text" title="Success Text on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success accent" title="Success Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch success back" title="Success Background on white"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Error</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">text</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">back</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error text" title="Error Text on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error accent" title="Error Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch error back" title="Error Background on white"></button>
                </div>
                <div class="col col-2 post-2"></div>
            </div>
        </div>
    </div>
</div>

<h3 class="hd-6 example-set-hd">Warning</h3>
<div class="example-set">
    <div class="example-container">
        <div class="grid-container grid-manual">
            <div class="row">
                <div class="col col-2 pre-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">accent</span>
                        </div>
                    </div>
                </div>
                <div class="col col-2">
                    <div class="swatch">
                        <div class="color-info">
                            <span class="color-class">back</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col col-2 post-4"></div>
            <div class="row on-white">
                <div class="col col-2">
                    <div class="swatch color-description copy">
                        white
                    </div>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning accent" title="Warning Accent on white"></button>
                </div>
                <div class="col col-2">
                    <button type="button" class="swatch warning back" title="Warning Background on white"></button>
                </div>
                <div class="col col-2 post-4"></div>
            </div>
        </div>
    </div>
</div>
