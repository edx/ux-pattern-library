var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config'),
    uglify          = require('gulp-uglify');

gulp.task('scripts', ['scripts-lint'], function() {
    'use strict';

    // TODO:
    // 1. refactor so that these can be watched & uglified, etc.
    // 2. refactor other bower components...
    gulp.src([config.lib.src + '/**/*'])
        .pipe(gulp.dest(config.scripts.local + '/bower_components'))
        .pipe(gulp.dest(config.scripts.dest + '/bower_components'));

    return gulp.src([
            // setup script sequence
            // config.lib.src + '/**/*',
            config.lib.src + '/requirejs/require.js',
            config.lib.src + '/jquery/dist/jquery.min.js',
            config.scripts.src + '/modernizr-custom.js',
            config.scripts.src + '/afontgarde.js',
            config.scripts.src + '/select-replace.js',
            config.scripts.src + '/edx-icons.js',
            config.scripts.src + '/testing.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.local)) // move for just browsersync + local preview
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest(config.scripts.dest));
});
