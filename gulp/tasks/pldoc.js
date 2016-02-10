'use strict';

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    config = require('../config'),
    configScripts = config.scripts,
    configStyles = config.styles,
    uglify = require('gulp-uglify'),
    minifyCSS = require('gulp-minify-css'),
    handleErrors = require('../util/handleErrors'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    size = require('gulp-filesize'),
    webpack = require('gulp-webpack'),
    ghPages = require('gulp-gh-pages');

gulp.task('pldoc-scripts', ['scripts-lint'], function() {
    return gulp.src([configScripts.pldoc_src + '/**.js'])
        .pipe(uglify())
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest(configScripts.dest));
});

gulp.task('copy-pattern-library', function() {
    gulp.src([config.patternLibrary.src_files])
        .pipe(gulp.dest(config.patternLibrary.dest));
});

gulp.task('pldoc-styles', function() {
    return gulp.src(configStyles.pldoc_src_files)
        .pipe(sourcemaps.init())
        .pipe(sass(configStyles.settings_development))
        .on('error', handleErrors)
        .pipe(autoprefixer())
        .pipe(sourcemaps.write(configStyles.settings_development.sourcemapsLocation))
        .pipe(gulp.dest(configStyles.pldoc_dest))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('pldoc-styles-minify', function() {
    return gulp.src(configStyles.pldoc_dest_files)
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(size())
        .pipe(gulp.dest(configStyles.pldoc_dest));
});

gulp.task('webpack', function() {
    var webpackConfig = require('../../webpack.config.js');
    return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(configStyles.pldoc_dest));
});

gulp.task('doc-publish', ['jekyll-build'], function() {
    return gulp.src(config.gitHubPages.files)
        .pipe(ghPages());
});
