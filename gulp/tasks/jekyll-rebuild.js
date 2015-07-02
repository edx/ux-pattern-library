var gulp            = require('gulp'),
    config          = require('../config').jekyll,
    cp              = require('child_process'),
    browserSync     = require('browser-sync');

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});
