'use strict';

var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    ghPages = require('gulp-gh-pages'),
    config  = require('../config').documentation;

gulp.task('webpack', function() {
    var webpackConfig = require('../../webpack.config.js');
    return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(webpackConfig.output.path));
});

gulp.task('doc-publish', ['jekyll-build'], function() {
    return gulp.src(config.gitHubPages.files)
        .pipe(ghPages());
});
