var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

gulp.task('scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/vendor/jquery/jquery-2.1.3.min.js',
            './_src/pattern-library/js/select-replace.js',
            './_src/pattern-library/js/radio-replace.js',
            './_src/pattern-library/js/checkbox-replace.js',
            './_src/vendor/svg4everybody/svg4everybody.min.js' // polyfill for SVGs in IE9-11
        ])
        .pipe(concat('pattern-library.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}))
});
