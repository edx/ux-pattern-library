var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config').jekyll,
    cp              = require('child_process');

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});
