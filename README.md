# edX Pattern Library
The (working) Visual, UI, and Front End Styleguide for edX.

## Overview
This library contains the following:

* [A working preview and documentation system for edX application UI](http://code.edx.org/ux-pattern-library)
* Styleguides and standards for [general Front End](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-General), [HTML](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-HTML), [Sass/CSS](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS), and [Accessibility-minded](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Accessibility) development
* TODO: Portable Sass/CSS modules for use within edX applications

- - -

## Usage

### Install Jekyll
The Pattern Library is managed through Jekyll, so you'll need to install that initially. [Jekyll requires Ruby, Rubygems and a Linux, Unix or Mac OSX system](http://jekyllrb.com/docs/installation/).

**Mac Users**:
```
$ gem install jekyll
```

Windows users: Windows users have a bit more work to do, but luckily [@juthilo](https://github.com/juthilo) has provided some instructions with his [Run Jekyll on Windows guide](https://github.com/juthilo/run-jekyll-on-windows).

You may also need to install Pygments, the Python syntax highlighter for code snippets that plays nicely with Jekyll (which we use to highlight Front End source code). Read more about this in [the Jekyll docs](http://jekyllrb.com/docs/templates/#code_snippet_highlighting).

### Run Locally
To view the Pattern Library locally, start a Jekyll server (which will watch for changes to templates and elements in the library and rebuild the site locally). In a terminal, from the ux-pattern-library root directory, run:

```
$ jekyll serve
```
Open http://localhost:4000 in your browser

### Publishing & Viewing Remotely
The most up-to-date version of the library can be viewed on our public domain, **http://code.edx.org/ux-pattern-library**

When contributing, please:

1. Make pull requests against the master branch
2. Wait for an edX UX Team member to review your contribution

**NOTE:** Merging or committing to the ``gh-pages`` branch of this repo is never a good idea. This branch is used to publish releases of the library to its public domain.

- - -

## Contributing
**NOTE**: We are currently not accepting contributions from individuals outside of edX. Once we have more progress under our belts and awareness of the standards and methods used to in this library, we'll be reaching out to more individuals for support.

If you have questions in the meantime, please email [ux@edx.org](mailto:ux@edx.org).

- - -

## Contributors
* Chris Rodriguez (@clrux)
* Brian Talbot (@talbs)
