'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config'),
    uglify = require('gulp-uglify');

gulp.task('scripts', ['lint-src'], function() {
    return gulp.src([
        // setup script sequence
        config.scripts.src + '/select-replace.js',
        config.scripts.src + '/testing.js'
    ]).pipe(uglify())
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest(config.scripts.dest));
});
