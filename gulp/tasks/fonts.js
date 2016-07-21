'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    changed = require('gulp-changed'),
    config = require('../config').fonts,
    merge = require('merge-stream');

gulp.task('fonts', function() {
    var fonts = gulp.src(config.src_files),
        pldocFonts = gulp.src(config.pldoc_src_files),
        demoFonts = gulp.src(config.demo_src_files);

    return merge(fonts, pldocFonts, demoFonts)
        .pipe(changed(config.dest)) // ignore unchanged files
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest(config.dest));
});
