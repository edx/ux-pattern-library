var gulp            = require('gulp');
var config          = require('../config').jekyll;
var cp              = require('child_process');
var browserSync     = require('browser-sync');

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});
