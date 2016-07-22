'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    changed = require('gulp-changed'),
    config = require('../config').images,
    merge = require('merge-stream');

gulp.task('images', function() {
    var images = gulp.src(config.src_files),
        pldocImages = gulp.src(config.pldoc_src_files),
        demoImages = gulp.src(config.demo_src_files);

    return merge(images, pldocImages, demoImages)
        .pipe(changed(config.dest)) // ignore unchanged files
        .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest(config.dest));
});
