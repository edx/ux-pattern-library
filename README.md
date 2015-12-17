# edX UX Pattern Library (UXPL)

The (working) UI library and Front End Styleguide for edX/Open edX applications and sites.

- - -

## Table of Contents

1. [Overview](#overview)
2. [License](#license)
3. [Dependencies](#dependencies)
4. [Documentation](#documentation)
5. [Development - Documentation Site](#development---documentation-site-pldoc)
6. [Development - UX Pattern Library Package](#development---ux-pattern-library-nodejs-package)
7. [Use and Deployment](#use-and-deployment)
8. [Contributions](#contributions)

- - -

## Overview

This library contains the following:

* [A working preview and documentation system for edX application UI](http://ux.edx.org) - known as "PLDOC".
* Styleguides and standards for [general Front End](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-General), [HTML](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-HTML), [Sass/CSS](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS), and [Accessibility-minded](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Accessibility) development
* Portable Sass/CSS utilities and modules for use within edX applications

## License

The code in this repository is licensed the Apache 2.0 license unless otherwise
noted. Please see the [LICENSE file](https://github.com/edx/ux-pattern-
library/blob/master/LICENSE.txt) for details.

## Dependencies

Using the edX Pattern Library source code in a project current requires:

* locally installing a package manager [a package manager (either [Node/npm](https://nodejs.org) or [Bower)](http://bower.io/).
* Use of modern web browsers - see [Open edX/edX browser support](http://docstrings.readthedocs.org/en/latest/front_matter/browsers.html)
* the use and compilation of Sass into CSS using perferrably [LibSass](http://sass-lang.com/libsass) (if using the Sass method for including the pattern library).


### Third Party Dependencies

Also, the Pattern Library currently relies on the following thrd party libraries:

| Library                                                         | Version       | Purpose                                                       |  
| -------------                                                   | ------------- | -------------                                                 |  
| [Bourbon](https://github.com/thoughtbot/bourbon)                | 4.2.6         | basic sass/CSS utilities                                      |  
| [Animate.css](https://github.com/daneden/animate.css)           | 3.4.0         | pre-set CSS animations                                        |  
| [bi-app-sass](https://github.com/anasnakawa/bi-app-sass)        | latest        | right-to-left/left-to-right directional support for layouts   |  
| [breakpoint-sass](https://github.com/at-import/breakpoint)      | 2.6.1         | CSS breakpoint/media-query management                         |  
| [susy](https://github.com/ericam/susy)                          | 2.2.9         | Grid configuration and utilities                              |  
| [A Font Garde](https://github.com/filamentgroup/a-font-garde)   | 0.1.6         | A set of reliable (nay, bulletproof) patterns for icon fonts. |  

## Documentation

The UX Pattern Library has its own living documentation site at
http://ux.edx.org. Additionally, we have many [styleguides and how-to wiki
documents](https://github.com/edx/ux-pattern-library/wiki) in the Github
repository.

## Development - Documentation Site (PLDOC)

To work on the code of the documentation site portion of this repo, you'll need
recent versions of the following things installed on your local machine.

| Library                                                              | Version         | Purpose                                                            |  
| -------------                                                        | -------------   | -------------                                                      |  
| [Bundler](http://bundler.io/)                                        | 1.10            | Used to install [jekyll](http://jekyllrb.com) and its dependencies |  
| [Node.js](http://nodejs.org/)                                         | 0.12.x or 4.0.x | Third-party dependency package management
| [GulpJS](https://github.com/gulpjs/gulp) + other gulp-based packages | 3.9.0           | Task runner for build process                                      |  


- - -

### Step 1: Install Jekyll

The Pattern Library is managed through Jekyll, a static website generator, so you'll need to install that.

**Mac Users**

We use a Ruby gem called Bundler to install Jekyll, as that allows us to track the version of Jekyll running on github pages easily.

We assume you have ruby 2.0.0 or later installed. If you don't, an easy way to do that is to use [RVM](http://rvm.io).

With that out of the way, next step is to install bundler, and then to use that to install Jekyll:

```
$ gem install bundler
$ bundle install
```

**Windows users**

Windows users have a bit more work to do, but luckily
[@juthilo](https://github.com/juthilo) has provided some instructions with his
[Run Jekyll on Windows guide](https://github.com/juthilo/run-jekyll-on-windows).

You may also need to install Pygments, the Python syntax highlighter for code
snippets that plays nicely with Jekyll (which we use to highlight Front End
source code). Read more about this in [the Jekyll
docs](http://jekyllrb.com/docs/templates/#code_snippet_highlighting).

- - -

### Step 2: Install Node.js and Node Package Manager (npm)

The npm command-line tool is bundled with [Node.js](https://nodejs.org). If you have it installed, then you already have npm too. If not, go [download Node.js](https://nodejs.org/en/download/).

- - -

### Step 3: Install Project Dependencies & Gulp Task Flow

From the directory you've checked out this repo into locally, run:

```
npm install
```

This runs through all dependencies listed in package.json and downloads them to
a `node_modules` folder in your project directory.

**NOTE:** You may need to run this more than just once (if encountering errors
when running the gulp command) as new dependencies may have been added.

To run the version of gulp installed local to the project, in the root of your
this project, run:

```
./node_modules/.bin/gulp
```

- - -

### Step 4: Run Locally (w/ Gulp Workflow)

To view the Pattern Library locally (and to watch for any local changes to
content/assets), run the `default` gulp task with:

```
gulp
```

This will run the `default` gulp task defined in `gulpfile.js`, which includes the general local development set-up task (``build-development``) and file/asset watching (``watch``).

After running the default task, your local instance of the Pattern Library can
be viewable at http://localhost:3000. There are additional views:

* ``http://localhost:3000/examples/**/*`` - where full page examples and demos are kept
* ``http://localhost:3000/patterns/**/*`` - permalinks for individually documented pattern library patterns
- - -

### Committing Code to PLDOC

When developing changes or new work within the PLDOC, please make sure to:

1. leave the Pattern Library Source Code (contained in ``pattern-library``) unedited (or edit in a separate branch/commit)
2. run the production preparation-focused gulp task ``gulp build-production``, which will optimize any checked in production assets (styles, images, and scripts), if you've added or heavily edited new PLDOC assets.

## Development - UX Pattern Library Package

If you add or edit any patterns in this repo (found in ``_src/pattern-library/``) or change any package-centric settings (e.g. ``package.json`` or ``bower.json``), please do the following:

1. test that the change you've made will not negatively affect the node package manager (npm) or Bower packages other apps and codebases are relying on
2. talk to the UX Team about any bumps (based on [semantic versioning](http://semver.org/)) in the npm or Bower packages' version number that are needed.

- - -

## Use and Deployment

The UX Pattern Library is meant to be a starting UI Framework to support edX
and Open edX applications and sites. To start using the UX Pattern Library in an
edX/Open edX app, please follow these steps:

### Step 0: Install Node
You'll need to [download Node.js](https://nodejs.org/en/download/) in order to use either of the UXPL packages.

### Step 1: Install and Configure UXPL Packages
Next, you'll want to add the edx-pattern-library registered package as a dependency for your project and install it all at once. You have a few options for what package manager to do that through:

#### Using Node
In your project's main directory, you'll need to create a ``package.json`` file that will manage locally installed npm packages. To create a package.json run:

```
$ npm init
```

You'll be walked through some basic settings for your project's package. See also [npm's documentation on setting up a package](https://docs.npmjs.com/getting-started/using-a-package.json).


Next, you'll want to add the ``edx-pattern-library`` registered package as a dependency for your project and install it all at once.

```
$ npm install edx-pattern-library --save
```

See also, [npm's documentation on installing/saving dependencies](https://docs.npmjs.com/getting-started/using-a-package.json#the-save-and-save-dev-install-flags).


#### Using Bower
After instaling Node.js, you can install [Bower](http://bower.io/), a package manager we use to download and maintain many of our vendor and external library refereces.

To install Bower globally:

```
npm install -g bower
```

Next, you'll want to add the ``edx-pattern-library`` registered package as a
bower dependency and install it all at once.

```
bower install edx-pattern-library --save
```

**NOTE:** Bower recommends initializing your project as a bower project in order to manage third party dependencies such as the `edx-pattern-library` bower package. [Bower explains how to do that well with bower.json](http://bower.io/docs/creating-packages/#bowerjson).

- - -

### Step 2: Use the UX Pattern Library in your project's Styling

#### Use the pre-compiled UX Pattern Library CSS files (BETA)
You can use the edX UX Pattern Library as a static CSS base alongside other CSS files. To do so add a reference in the ``<head>`` of your app's HTML

```html
<link rel="stylesheet" href="[path to your package manager (npm or bower) or manually managed assets]/edx-pattern-library-ltr.min.css" />
```

**NOTE**: The node package manager (npm) package comes with several variations of compiled CSS, including:

* RTL and LTR support - noted by either a ``*-ltr`` or ``*-rtl`` suffix)
* Minified and expanded CSS output formats - for production and development/debugging purposes respectively.

**NOTE:** This way of using the edX UX Pattern Library is currently in beta is not as widely tested as the Sass method (described below). If you find bugs/issues, please [log them](#bugs-and-issues).
.
#### Reference UX Pattern Library Partials in your Sass Compile
You can also use the edX UX Pattern Library as part of your CSS's Sass compilation (**our preferred method**). To do so,
just import all utilities (see the ``utilities`` directory) and what components  (see the ``components`` directory)  you want. 

##### Default Reference/Import
All components and utilities can be imported by default by importing the ``_edx-pattern-library.scss`` partial. See the example below taken from [``main-ltr.scss``]() +  the [``_build.scss``](https://github.com/edx/ux-pattern-library/blob/master/_src/pldoc/static/sass/_build.scss) compilation of the edX Pattern Library's Documentation Site:

```scss
// ------------------------------
// edX Pattern Library Site: Main Style Compile - LTR

// About: Sass compile for the edX Pattern Library Site. This does not contain styles for other edX products/experiences (e.g. account/onboarding). Any styles defined in the partials contained here should be prefixed with ".pldoc-" to avoid cascade/run-off into the element stylings.


// ------------------------------
// #CONFIG
// ------------------------------
$layout-direction: ltr;
@import 'config';


// ------------------------------
// #LIB
// ------------------------------
@import 'lib';
@import '{path to edx-pattern-library package}/pattern-library/sass/edx-pattern-library';


// ------------------------------
// #EXTENSIONS
// ------------------------------
@import 'utilities';
@import 'components';
@import 'layouts';
@import 'views';
@import 'overrides';

```

**NOTE**: Since both libSass and RubySass lack a way to pass in variables/configuration into their ``@import {file}`` method, each app is responsible for 1) storing any npm-based dependencies, including the edx-pattern-library, in the best directory structure for that app's set up and 2) creating a ``_lib.scss`` partial to import all third party library dependencies from that structure for the Pattern Library to use (see above example).

See [the UX Pattern Library Files + Application Files guidelines](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS#ux-pattern-library-files--application-files) and [example style compile](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS#main-style-compile) for more examples, details on how to use partials, and general background.

##### Custom Reference/Import
If you'd like to customize what to import, you can manually import specific elements from the edx-pattern-library package. Here's an example of customizing the default import demo above:

```scss
// ------------------------------
// edX Pattern Library Site: Main Style Compile - LTR

// About: **Customized** Sass compile for the edX Pattern Library Site. This does not contain styles for other edX products/experiences (e.g. account/onboarding). Any styles defined in the partials contained here should be prefixed with ".pldoc-" to avoid cascade/run-off into the element stylings.


// ------------------------------
// #CONFIG
// ------------------------------
$layout-direction: ltr;
@import 'config';


// ------------------------------
// #LIB
// ------------------------------
@import 'lib';
@import '{path to edx-pattern-library package}/pattern-library/sass/global/core';

// use UXPL's buttons, headings, copy, grid, and layouts
@import '{path to edx-pattern-library package}/pattern-library/sass/patterns/buttons';
@import '{path to edx-pattern-library package}/pattern-library/sass/patterns/headings';
@import '{path to edx-pattern-library package}/pattern-library/sass/patterns/copy';
@import '{path to edx-pattern-library package}/pattern-library/sass/patterns/grid';
@import '{path to edx-pattern-library package}/pattern-library/sass/patterns/layouts';


// ------------------------------
// #EXTENSIONS
// ------------------------------
@import 'utilities';
@import 'components';
@import 'layouts';
@import 'views';
@import 'overrides';

```

##### Configure Settings
There are a few places you can start to explore configuring aspects of the UX
Pattern Library for your purposes. You can find many configurations and base
settings in ``src/sass/utilities/_variables.scss`` and can override/customize
those in your application's ``utilities.scss`` partial (they'll be used
throughout the rest of the compile).

**NOTE:** The code and design contained in the library has not been tested for use
alongside other UI Frameworks such as Bootstrap or Foundation.

**NOTE:** The source code of the Pattern Library does not include any local or
production-focused Sass/Front End tooling. It's expected that your app/site
has its own Sass compiler (preferrably LibSass).

## Contributions
Contributions are very welcome. The easiest way is to fork this repo, and then
make a pull request from your fork. The first time you make a pull request, you
may be asked to sign a Contributor Agreement.

Please refer to our [contributor guidelines](https://github.com/edx/edx-
platform/blob/master/CONTRIBUTING.rst) in the main edx-platform repo for
important additional information.

### Contributing and the UX Pattern Library
There are a few additional details alongside our general guidelines to keep in mind contributing to the UX Pattern Library:

#### Pattern Library Features, Ideas, and Improvements
If you're looking to suggest an idea or you're thinking about developing a
feature, start a discussion [by visiting the Open edX JIRA
site](https://openedx.atlassian.net/secure/Dashboard.jspa) and  create a new
"Issue" by selecting the "Create" button at the top of the page. Choose the
project "UX Pattern Library" and the issue type "New Feature" or "Improvement"
(you may first need to [create a free JIRA
account](https://openedx.atlassian.net/admin/users/sign-up)).

#### Bugs and Issues
If you notice an issue or a bug with the Pattern Library, we would love ot hear
about it! Follow the above instructions on logging a new UX Pattern Library JIRA
issue and then assign the issue type of "Bug" to your issue. An edX UX Team
member will then take it from there and triage your bug.

Conversely, if you want to help resolve any known
[bugs/issues](https://openedx.atlassian.net/projects/UXPL/issues), which are
tracked in JIRA, you can [create a free JIRA
account](https://openedx.atlassian.net/admin/users/sign-up) and then comment on
the ticket to indicate that you are working on it. Don't hesitate to ask
clarifying questions on the ticket as needed, too, if anything is unclear.

#### Submitting Code
For code contributions, please open up a pull request! PRs will get OSPR tickets
assigned to them, as mentioned in the above contributing guidelines.

#### Approval by UX and Front End Team Members
An edX UX Team member will be working with you on any pull requests you make.
They will be evaulating your pull request from a design point of view as well as from
a Front End Development perspective. Other team members as well as UI/Front End
Developers may also lend a hand.

#### Tests
The Pattern library source code doesn't currently leverage the Open edX test
suite nor are there any automated tests configured for this codebase currently.

#### Front End Development Standards
In addition to the general contributor documentation, any contributions should
meet specific Front End Development requirements, including the guidelines and
principles listed in:

* [General Front End Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-General)
* [Accessibility Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Accessibility)
* [HTML Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-HTML)
* [Forms Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Forms)
* [Sass & CSS Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS), including [right-to-left support](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS#right-to-left-rtl-support)
* [JavaScript Styleguide](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-JavaScript)
