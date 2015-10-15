var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config'),
    uglify          = require('gulp-uglify');

gulp.task('pldoc_scripts', ['scripts-lint'], function() {
    'use strict';
    var scriptsConfig = config.scripts;

    // TODO: it would be better to move to the gulp pipeline below, but the uglify step throws an error
    gulp.src([config.lib.src_files])
        .pipe(gulp.dest(scriptsConfig.local))
        .pipe(gulp.dest(scriptsConfig.dest));

    return gulp.src([
            // setup script sequence
            scriptsConfig.pldoc_src + '/pattern-library.js',
            scriptsConfig.pldoc_src + '/ui.js',
            scriptsConfig.pldoc_src + '/tabs.js',
            scriptsConfig.pldoc_src + '/size-slider.js',
            scriptsConfig.pldoc_src + '/color-contrast.js',
            scriptsConfig.pldoc_src + '/start-collapsible.js',
            scriptsConfig.pldoc_src + '/dropdown-menu.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest(scriptsConfig.local)) // move just for browersync + local preview
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(scriptsConfig.dest));
});
