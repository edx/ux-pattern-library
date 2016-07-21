'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('default', function(cb) {
    runSequence(
        'build-development',
        'watch',
        cb
    );
});
