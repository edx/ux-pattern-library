var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');
var uglify          = require('gulp-uglify');

gulp.task('pl_scripts', ['pl_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/vendor/jquery/jquery-2.1.3.min.js',
            './_src/pl/vendor/jquery-smoothScroll/jquery.smooth-scroll.js',
            config.pl_src + '/required.js',
            config.pl_src + '/ui.js',
            config.pl_src + '/tabs.js',
            config.pl_src + '/size-slider.js',
            config.pl_src + '/color-contrast.js'
        ])
        // .pipe(uglify())
        .pipe(gulp.dest(config.pl_local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.pl_dest))
        .pipe(browserSync.reload({stream:true}))
});
