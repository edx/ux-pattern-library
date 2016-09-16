'use strict';

var gulp = require('gulp'),
    childProcess = require('child_process');

gulp.task('jekyll-serve', function() {
    return childProcess.spawn('jekyll', ['serve', '--incremental'], {stdio: 'inherit'});
});

gulp.task('jekyll-build', function() {
    return childProcess.spawn('jekyll', ['build'], {stdio: 'inherit'});
});
