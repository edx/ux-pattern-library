'use strict';

var gulp = require('gulp'),
    config = require('../config').scripts,
    size = require('gulp-filesize'),
    uglify = require('gulp-uglify');

gulp.task('scripts-uglify', function() {
    return gulp.src(config.dest)
        .pipe(uglify())
        .pipe(size());
});
