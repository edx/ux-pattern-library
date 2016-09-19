'use strict';

var gulp = require('gulp'),
    gulpUtil = require('gulp-util');

gulp.task('build-production', [
    'jekyll-build',
    'webpack-prod'
]);
