'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config'),
    configScripts = config.scripts,
    uglify = require('gulp-uglify'),
    webpackUtil = require('../util/webpack'),
    ghPages = require('gulp-gh-pages'),
    runSequence = require('run-sequence');

gulp.task('pldoc-scripts', ['lint-src'], function() {
    return gulp.src([configScripts.pldoc_src + '/**.js'])
        .pipe(uglify())
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest(configScripts.dest));
});

gulp.task('copy-pattern-library', function() {
    gulp.src([config.patternLibrary.src_files])
        .pipe(gulp.dest(config.patternLibrary.dest));
});

gulp.task('webpack', function(callback) {
    runSequence(
        'pldoc-scripts',
        'pldoc-styles',
        callback
    );
});

gulp.task('pldoc-scripts', function() {
    return webpackUtil.packageJavaScript(
        {
            source: config.documentation.rootJavaScriptFile,
            targetDirectory: config.documentation.pldocDest
        }
    ).pipe(browserSync.stream());
});

gulp.task('pldoc-styles', function() {
    return webpackUtil.packageCss(
        {
            source: config.documentation.rootSassFile,
            targetDirectory: config.documentation.pldocDest,
            patternLibraryPath: '/public/edx-pattern-library'
        }
    ).pipe(browserSync.stream());
});

gulp.task('doc-publish', ['jekyll-build'], function() {
    return gulp.src(config.documentation.gitHubPages.files)
        .pipe(ghPages());
});
