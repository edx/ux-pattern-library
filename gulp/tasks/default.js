'use strict';

var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    runSequence(
        'jekyll-serve',
        'webpack-dev',
        cb
    );
});
