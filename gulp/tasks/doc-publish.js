'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    ghPages = require('gulp-gh-pages');

gulp.task('doc-publish', ['build-production'], function() {
    return gulp.src(config.documentation.gitHubPages.files)
        .pipe(ghPages());
});
