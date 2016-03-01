(function() {
    'use strict';

    var gulp = require('gulp'),
        runSequence = require('run-sequence');

    gulp.task('build-development', function(callback) {
        runSequence(
            'clean',
            'fonts',
            'images',
            ['scripts', 'pldoc_scripts', 'demo_scripts'],
            ['styles', 'pldoc_styles', 'demo_styles'],
            'webpack',
            callback
        );
    });
})();
