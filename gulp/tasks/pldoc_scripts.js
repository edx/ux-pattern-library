var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');
var uglify          = require('gulp-uglify');

gulp.task('pldoc_scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/pldoc/vendor/jquery-smoothScroll/jquery.smooth-scroll.js',
            config.pldoc_src + '/required.js',
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
