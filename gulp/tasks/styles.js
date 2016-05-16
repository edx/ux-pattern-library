'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    config = require('../config'),
    webpackUtil = require('../util/webpack');

gulp.task('styles', function(callback) {
    runSequence(
        'styles-ltr',
        'styles-rtl',
        callback
    );
});

gulp.task('styles-ltr', function() {
    return webpackUtil.packageCss(
        {
            source: config.styles.rootLtrSassFile,
            targetDirectory: config.styles.dest,
            patternLibraryPath: '../../edx-pattern-library'
        }
    )
        .pipe(browserSync.stream());
});

gulp.task('styles-rtl', function() {
    return webpackUtil.packageCss(
        {
            source: config.styles.rootRtlSassFile,
            targetDirectory: config.styles.dest,
            patternLibraryPath: '../../edx-pattern-library'
        }
    )
        .pipe(browserSync.stream());
});
