var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config'),
    uglify          = require('gulp-uglify'),
    modernizr       = require('gulp-modernizr');

gulp.task('modernizr', ['scripts-lint'], function() {
    gulp.src('*.js')
        .pipe(modernizr('modernizr-custom.js', {
            "options": [
                "setClasses"
            ],
            "tests": [
                'fontface',
                'generatedcontent'
            ]
        }))
        .pipe(gulp.dest(config.scripts.src));
});
