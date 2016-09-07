'use strict';

var gulp = require('gulp'),
    shell = require('gulp-shell');

gulp.task('lint', shell.task('eslint .'));
