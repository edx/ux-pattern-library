'use strict';

var gulp = require('gulp'),
    shell = require('gulp-shell'),
    eslint = require('gulp-eslint'),
    config = require('../config').scripts,
    htmlFiles = require('../config').exampleHtmlFiles,
    merge = require('merge-stream');

gulp.task('lint', shell.task('eslint .'));

gulp.task('lint-src', function() {
    var scripts = gulp.src(config.src_files),
        pldocScripts = gulp.src(config.pldoc_src_files),
        pldocHtmlFiles = gulp.src(htmlFiles.pldoc_src_files);

    return merge(scripts, pldocScripts, pldocHtmlFiles)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
