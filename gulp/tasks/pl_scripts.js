var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat');
var rename          = require('gulp-rename');
var uglify          = require('gulp-uglify');

gulp.task('pl_scripts', ['pl_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/pl/vendor/jquery/jquery-2.1.3.min.js',
            './_src/pl/vendor/jquery/jquery.smooth-scroll.js',
            config.pl_src + '/ui.js',
            config.pl_src + '/color-contrast.js'
        ])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.pl_local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.pl_dest))
        .pipe(browserSync.reload({stream:true}))
});
