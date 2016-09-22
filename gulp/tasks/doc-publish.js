'use strict';

var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages');

gulp.task('doc-publish', ['build-production'], function() {
    return gulp.src('./_site/**/*')
        .pipe(ghPages());
});
