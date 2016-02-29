(function() {
    'use strict';

    var gulp = require('gulp'),
        runSequence = require('run-sequence');

    gulp.task('build-preview', function(callback) {
        runSequence(
            'jekyll-build-preview',
            'upload-preview',
            callback);
    });
}());
