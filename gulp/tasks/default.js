'use strict';

var gulp = require('gulp'),
    gulpUtil = require('gulp-util');

gulp.task('default', [
    'jekyll-serve',
    'webpack-dev'
]);
