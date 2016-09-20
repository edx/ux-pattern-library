'use strict';

var gulp = require('gulp');

gulp.task('build-production', [
    'jekyll-build',
    'webpack-prod'
]);
