# edX Pattern Library

The (working) UI library and Front End Styleguide for edX/Open edX applications and sites.

[![GitHub version](https://badge.fury.io/gh/edx%2Fux-pattern-library.svg)](https://badge.fury.io/gh/edx%2Fux-pattern-library)
[![npm version](https://badge.fury.io/js/edx-pattern-library.svg)](https://badge.fury.io/js/edx-pattern-library)
[![Bower version](https://badge.fury.io/bo/edx-pattern-library.svg)](https://badge.fury.io/bo/edx-pattern-library)

<a href="https://nodei.co/npm/edx-pattern-library/"><img src="https://nodei.co/npm/edx-pattern-library.png?downloads=true&downloadRank=true&stars=true"></a>

- - -

## Table of Contents

1. [Overview](#overview)
2. [License](#license)
3. [Dependencies](#dependencies)
4. [Documentation](#documentation)
5. [Getting Started](#getting-started)
6. [Contributions](#contributions)

- - -

## Overview

This library contains the following:

* [A working preview and documentation system for edX application UI](http://ux.edx.org) - known as "PLDOC".
* Styleguides and standards for [general Front End](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-General), [HTML](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-HTML), [Sass/CSS](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS), and [Accessibility-minded](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Accessibility) development.
* Portable Sass/CSS utilities and modules for use within edX applications.

## License

The code in this repository is licensed the Apache 2.0 license unless otherwise
noted. Please see the [LICENSE file](https://github.com/edx/ux-pattern-library/blob/master/LICENSE) for details.

## Dependencies

Using the edX Pattern Library source code in a project current requires:

* Locally installing a package manager (either [Node/npm](https://nodejs.org) or [Bower)](http://bower.io/).
* Use of modern web browsers - see [Open edX/edX browser support](http://docstrings.readthedocs.org/en/latest/front_matter/browsers.html)
* The use and compilation of Sass into CSS using perferrably [LibSass](http://sass-lang.com/libsass) (if using the Sass method for including the pattern library).


### Third Party Dependencies

Also, the Pattern Library currently relies on the following thrd party libraries:

| Library                                                         | Version       | Purpose                                                       |  
| -------------                                                   | ------------- | -------------                                                 |  
| [Bourbon](https://github.com/thoughtbot/bourbon)                | 4.2.6         | basic sass/CSS utilities                                      |
| [bi-app-sass](https://github.com/anasnakawa/bi-app-sass)        | latest        | right-to-left/left-to-right directional support for layouts   |  
| [breakpoint-sass](https://github.com/at-import/breakpoint)      | 2.6.1         | CSS breakpoint/media-query management                         |  
| [susy](https://github.com/ericam/susy)                          | 2.2.9         | Grid configuration and utilities                              |  
| [Font Awesome](https://github.com/FortAwesome/Font-Awesome)     | 4.6.3         | Accessibility-minded iconic font |  

## Documentation

The edX Pattern Library has its own living documentation site at
http://ux.edx.org. Additionally, we have many [styleguides and how-to wiki
documents](https://github.com/edx/ux-pattern-library/wiki) in the Github
repository.

## Getting Started
* If you want to use the edX Pattern Library in your project or work, please see [How to Work and Develop on Documentation Site (PLDOC)](https://github.com/edx/ux-pattern-library/wiki#how-to-use-and-deploy-the-uxpl-in-your-project)
* If you'd like to set up or work on the living documentation site locally, check out [How to Work and Develop on Documentation Site (PLDOC)](https://github.com/edx/ux-pattern-library/wiki#how-to-work-and-develop-on-documentation-site-pldoc)
* If you'd like to work on or contribute to the edX Pattern Library package, read [How to Work/Develop on the edX Pattern Library Package](https://github.com/edx/ux-pattern-library/wiki#how-to-workdevelop-on-the-ux-pattern-library-package)


## Contributions
Contributions are very welcome. The easiest way is to fork this repo, and then
make a pull request from your fork. The first time you make a pull request, you
may be asked to sign a Contributor Agreement.

Please refer to our [contributor guidelines](https://github.com/edx/edx-
platform/blob/master/CONTRIBUTING.rst) in the main edx-platform repo for
important additional information.

### Contributing and the edX Pattern Library
There are a few additional details alongside our general guidelines to keep in mind contributing to the edX Pattern Library:

#### Pattern Library Features, Ideas, and Improvements
If you're looking to suggest an idea or you're thinking about developing a
feature, start a discussion [by visiting the Open edX JIRA
site](https://openedx.atlassian.net/secure/Dashboard.jspa) and  create a new
"Issue" by selecting the "Create" button at the top of the page. Choose the
project "edX Pattern Library" and the issue type "New Feature" or "Improvement"
(you may first need to [create a free JIRA
account](https://openedx.atlassian.net/admin/users/sign-up)).

#### Bugs and Issues
If you notice an issue or a bug with the Pattern Library, we would love ot hear
about it! Follow the above instructions on logging a new edX Pattern Library JIRA issue and then assign the issue type of "Bug" to your issue. An edX UX & Front End Development Team member will then take it from there and triage your bug.

Conversely, if you want to help resolve any known [bugs/issues](https://openedx.atlassian.net/projects/UXPL/issues), which are tracked in JIRA, you can [create a free JIRA account](https://openedx.atlassian.net/admin/users/sign-up) and then comment on the ticket to indicate that you are working on it. Don't hesitate to ask clarifying questions on the ticket as needed, too, if anything is unclear.

#### Submitting Code
For code contributions, please open up a pull request! PRs will get OSPR tickets assigned to them, as mentioned in the above contributing guidelines.

#### Approval by UX and Front End Team Members
An edX UX or Front End Development Team member will be working with you on any pull requests you make.
They will be evaulating your pull request from a design point of view as well as from a Front End Development perspective. Other team members as well as UI/Front End Developers may also lend a hand.

#### Tests
The edX Pattern Library source code doesn't currently leverage the Open edX test
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
