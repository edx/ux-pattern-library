# edX Pattern Library
The (working) Visual, UI, and Front End Styleguide for edX.

## Overview
This library contains the following:

* [A working preview and documentation system for edX application UI](http://ux.edx.org)
* Styleguides and standards for [general Front End](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-General), [HTML](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-HTML), [Sass/CSS](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Sass-&-CSS), and [Accessibility-minded](https://github.com/edx/ux-pattern-library/wiki/Styleguide:-Accessibility) development
* TODO: Portable Sass/CSS modules for use within edX applications

- - -

## Usage
To work on the code of this project, you'll need the following things installed on your local machine.

1. [Jekyll](http://jekyllrb.com/)
2. [NodeJS](http://nodejs.org/)
3. [Bower](http://bower.io/)
4. [GulpJS](https://github.com/gulpjs/gulp) + other gulp-based packages

### Install Jekyll
The Pattern Library is managed through Jekyll, so you'll need to install that initially. [Jekyll requires Ruby, Rubygems and a Linux, Unix or Mac OSX system](http://jekyllrb.com/docs/installation/).

**Mac Users**:
```
$ gem install jekyll
```

Windows users: Windows users have a bit more work to do, but luckily [@juthilo](https://github.com/juthilo) has provided some instructions with his [Run Jekyll on Windows guide](https://github.com/juthilo/run-jekyll-on-windows).

You may also need to install Pygments, the Python syntax highlighter for code snippets that plays nicely with Jekyll (which we use to highlight Front End source code). Read more about this in [the Jekyll docs](http://jekyllrb.com/docs/templates/#code_snippet_highlighting).

### Install NodeJS
If you've never used Node or npm before, you'll need to install Node. If you use homebrew, do:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Bower
After instaling NodeJS, you can install [Bower](http://bower.io/), a package manager we use to download and maintain many of our vendor and external library refereces.

To install Bower globally:
```
npm install -g bower
```

After Bower is installed, you can install all of the edX UX Pattern Library dependecies with:

```
bower install
```

NOTE: Bower packages are installed to the ``_src/components`` directory. These files should not be edited or removed outside of the Bower workflow.

### Install/Update Gulp + Project Dependencies
From the directory you've checked out this repo into locally, run:

```
npm install
```

This runs through all dependencies listed in package.json and downloads them to a node_modules folder in your project directory.

**NOTE: You may need to run this more than just once (if encountering errors when running the gulp command) as new dependencies may have been added**

#### The Gulp Command
To run the version of gulp installed local to the project, in the root of your this project, run:

```
./node_modules/.bin/gulp
```

**WAT.** Why can't I just run `gulp`? Well, you could install gulp globally with `npm install -g gulp`, which will add the gulp script to your global bin folder, but it's always better to use the version that's specified in your project's package.json.  My solution to this is to simply alias `./node_modules/.bin/gulp` to `gulp`. Open up `~/.zshrc` or `~./bashrc` and add the following line:

```
alias gulp='node_modules/.bin/gulp'
```

Now, running `gulp` in the project directory will use the version specified and installed from the `package.json` file.

### Run Locally (w/ Gulp Workflow)
To view the Pattern Library locally (and to watch for any local changes to content/assets), run the `default` gulp task with:

```
gulp
```

This will run the `default` gulp task defined in `gulpfile.js`, which has the following task dependencies: `['styles', pldoc_styles', 'images', 'pldoc_images', scripts, pldoc_scripts, jekyll-build', 'watch']`

* The `styles` and `pldoc_styles` tasks compile your css files.
* `images` and `pldoc_images` copies images from a source folder, performs optimizations, the outputs them into the build folder
* `jekyll-build` and `jekyll-rebuild` run the local jekyll server/preview and re-process any layouts, posts, or templates changed.
* `watch` will start watching source files and will re-run the appropriate tasks when those files change.

After running the default task, your local instance of the Pattern Library can be viewable at http://localhost:3000. There are additional views:

* http://localhost:3000/examples/**/* - where full page examples and demos are kept
* http://localhost:3000/elements/**/* - permalinks for individually documented pattern library elements

**NOTE: some gulp tasks had to be separated to support both the pattern library 1)elements and 2)reference site UI separately.** Any task prefixed with `pldoc_*` refers to the reference site UI and not the elements.

### Publishing & Viewing Remotely
The most up-to-date version of the library can be viewed on our public domain, **http://ux.edx.org**

When contributing, please:

1. Make pull requests against the master branch
2. Wait for an edX UX Team member to review your contribution

**NOTE:** Merging or committing to the ``gh-pages`` branch of this repo is never a good idea. This branch is used to publish releases of the library to its public domain.

- - -

## Contributing
**NOTE**: We are currently not accepting contributions from individuals outside of edX. Once we have more progress under our belts and awareness of the standards and methods used to in this library, we'll be reaching out to more individuals for support.

If you have questions in the meantime, please email [ux@edx.org](mailto:ux@edx.org).

### Resources and Background Information
When contributing, its assumed that you're already familar with the following:

* [Our Front End Coding Styleguides](https://github.com/edx/ux-pattern-library/wiki)
* [Jekyll in General](http://jekyllrb.com/docs/home/)
* [Writing Posts in Jekyll](http://jekyllrb.com/docs/posts/)
* [RequireJS](http://requirejs.org)
* [Managing Packages with Bower](http://blog.teamtreehouse.com/getting-started-bower)

- - -

##Heads Ups

###Pattern Library Elements vs. Reference Site UI
This repository contains both the code needed to generate pattern library elements as well as a reference site to view/learn about these elements. When and where possible, we've tried to keep the assets needed for both separate by:

* prefixing any reference site UI with `pldoc-*` class names in our site templates and Sass/CSS;
* containing any reference site UI within the ``_src/pl/`` directory.
* the main pattern library files are contained within the ``_src/pattern-library`` and never compile on their own, but are rather used in this site's and other application's Sass compile files.

- - -

## Contributors
* Chris Rodriguez (@clrux)
* Brian Talbot (@talbs)
* Frances Botsford (@frrrances)
* Marco Morales (@marcotuts)
* Tyler Nickerson (@nickersoft)
