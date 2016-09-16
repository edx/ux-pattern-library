'use strict';

var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    runSequence = require('run-sequence');

gulp.task('build-production', function(cb) {
    runSequence(
        'jekyll-build',
        'webpack-prod',
        cb
    );
});
