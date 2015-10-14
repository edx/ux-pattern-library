var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config').scripts,
    uglify          = require('gulp-uglify');

gulp.task('pldoc_scripts', ['scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            config.pldoc_src + '/pattern-library.js',
            config.pldoc_src + '/ui.js',
            config.pldoc_src + '/tabs.js',
            config.pldoc_src + '/size-slider.js',
            config.pldoc_src + '/color-contrast.js',
            config.pldoc_src + '/start-collapsible.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest(config.local)) // move just for browersync + local preview
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest));
});
