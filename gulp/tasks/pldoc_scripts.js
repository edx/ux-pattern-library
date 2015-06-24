var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');

gulp.task('pldoc_scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
            // setup script sequence
            './_src/pldoc/static/js/ui.js',
            './_src/pldoc/static/js/size-slider.js',
            './_src/pldoc/static/js/color-contrast.js'
        ])
        .pipe(concat('pldoc.js'))
        .pipe(uglify())
        .pipe(gulp.dest(config.pldoc_local)) // move just for browersync + local preview
        .pipe(gulp.dest(config.pldoc_dest))
        .pipe(browserSync.reload({stream:true}))
});
