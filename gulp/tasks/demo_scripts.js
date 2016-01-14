var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config').scripts,
    uglify          = require('gulp-uglify');

gulp.task('demo_scripts', ['scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            config.demo_src + '/pattern-library.js',
        ])
        .pipe(uglify())
        .pipe(gulp.dest(config.local)) // move just for browersync + local preview
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest))
});
