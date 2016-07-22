'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config'),
    webpackUtil = require('../util/webpack');

gulp.task('demo-styles', function() {
    return webpackUtil.packageCss({
        source: config.documentation.rootDemoSassFile,
        targetDirectory: config.documentation.pldocDest,
        patternLibraryPath: '/public/edx-pattern-library'
    }).pipe(browserSync.stream());
});
