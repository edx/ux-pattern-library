var gulp            = require('gulp'),
    config          = require('../config').scripts,
    browserSync     = require('browser-sync'),
    uglify          = require('gulp-uglify');

gulp.task('scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/components/jquery/dist/jquery.min.js',
            './_src/components/requirejs-plugins/lib/require.js',
            './_src/pattern-library/js/select-replace.js',
            './_src/components/svg4everybody/svg4everybody.min.js' // polyfill for SVGs in IE9-11
        ])
        .pipe(uglify())
        .pipe(gulp.dest(config.local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}))
});
