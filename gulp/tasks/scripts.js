var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');
var uglify          = require('gulp-uglify');

gulp.task('scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/pldoc/vendor/jquery/jquery.min.js',
            './_src/vendor/requirejs/require.js',
            './_src/vendor/svg4everybody/svg4everybody.min.js' // polyfill for SVGs in IE9-11
        ])
        // .pipe(uglify())
        .pipe(gulp.dest(config.local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}))
});
