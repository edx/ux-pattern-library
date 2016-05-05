(function() {
    'use strict';

    var gulp = require('gulp'),
        runSequence = require('run-sequence');

    gulp.task('build-development', function(callback) {
        runSequence(
            'fonts',
            'images',
            'modernizr',
            ['scripts', 'pldoc-scripts', 'demo-scripts'],
            ['styles', 'pldoc-styles', 'demo-styles'],
            'copy-pattern-library',
            'webpack',
            callback
        );
    });
})();
