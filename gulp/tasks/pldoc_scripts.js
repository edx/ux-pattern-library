var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');

gulp.task('pldoc_scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/pldoc/vendor/jquery/jquery.smooth-scroll.js',
            config.pldoc_src + '/ui.js',
            config.pldoc_src + '/size-slider.js',
            config.pldoc_src + '/color-contrast.js',
            './_src/vendor/svg4everybody/svg4everybody.min.js' // polyfill for SVGs in IE9-11
        ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.pldoc_local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.pldoc_dest))
        .pipe(browserSync.reload({stream:true}))
});
