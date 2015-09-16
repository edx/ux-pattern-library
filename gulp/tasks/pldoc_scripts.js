var gulp            = require('gulp'),
    config          = require('../config').scripts,
    browserSync     = require('browser-sync'),
    uglify          = require('gulp-uglify');

gulp.task('pldoc_scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            config.pldoc_src + '/pattern-library.js',
            config.pldoc_src + '/ui.js',
            config.pldoc_src + '/tabs.js',
            config.pldoc_src + '/size-slider.js',
            config.pldoc_src + '/color-contrast.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest(config.pldoc_local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.pldoc_dest))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('pldoc_scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
        // setup sequence for files that are loaded later with RequireJS
        config.src // pattern-library/js/*
    ])
    .pipe(uglify())
    .pipe(gulp.dest(config.pldoc_local)) // move for just browsercync + local preview
    .pipe(gulp.dest(config.pldoc_dest))
    .pipe(browserSync.reload({ stream: true }))
});
