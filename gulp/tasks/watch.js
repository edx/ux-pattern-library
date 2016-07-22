'use strict';

var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', ['browserSync'], function() {
    // patterns and documentation site
    gulp.watch(config.styles.src_files, ['pldoc-styles', 'demo-styles', 'styles']);
    gulp.watch(config.styles.pldoc_src_files, ['pldoc-styles']);
    gulp.watch(config.styles.demo_src_files, ['demo-styles']);
    gulp.watch(config.images.pldoc_src_files, ['images']);
    gulp.watch(config.images.demo_src_files, ['images']);
    gulp.watch(config.images.src_files, ['images']);
    gulp.watch(config.scripts.pldoc_src_files, ['pldoc-scripts']);
    gulp.watch(config.scripts.demo_src_files, ['demo-scripts']);
    gulp.watch(config.scripts.src_files, ['scripts']);

    // local
    gulp.watch(config.jekyll.home, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.posts, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.components, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.design_elements, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.includes, ['pldoc-scripts', 'jekyll-rebuild']);
    gulp.watch(config.jekyll.examples, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.demo, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.layouts, ['jekyll-rebuild']);
});
