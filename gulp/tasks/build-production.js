'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build-production', function(callback) {
    runSequence(
        'clean',
        'build-development',
        'scripts-uglify',
        'webpack',
        callback
    );
});
