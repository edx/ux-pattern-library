'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config').scripts,
    uglify = require('gulp-uglify');

gulp.task('demo-scripts', ['lint-src'], function() {
    return gulp.src([
        // setup script sequence
        config.demo_src + '/pattern-library.js'
    ]).pipe(uglify())
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest(config.dest));
});
