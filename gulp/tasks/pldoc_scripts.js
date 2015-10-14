var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config'),
    uglify          = require('gulp-uglify');

gulp.task('pldoc_scripts', ['scripts-lint'], function() {
    'use strict';
    var scriptsConfig = config.scripts;

    // TODO:
    // 1. refactor so that these can be watched & uglified, etc.
    // 2. refactor other bower components...
    gulp.src([config.lib.src_files])
        .pipe(gulp.dest(scriptsConfig.lib_dest))
        .pipe(gulp.dest(scriptsConfig.dest));

    return gulp.src([
            // setup script sequence
            scriptsConfig.pldoc_src + '/pattern-library.js',
            scriptsConfig.pldoc_src + '/ui.js',
            scriptsConfig.pldoc_src + '/tabs.js',
            scriptsConfig.pldoc_src + '/size-slider.js',
            scriptsConfig.pldoc_src + '/color-contrast.js',
            scriptsConfig.pldoc_src + '/start-collapsible.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest(scriptsConfig.local)) // move just for browersync + local preview
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(scriptsConfig.dest));
});
