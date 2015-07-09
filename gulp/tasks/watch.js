var gulp    = require('gulp'),
    config  = require('../config');

gulp.task('watch', ['browserSync'], function() {
    // patterns
    gulp.watch(config.styles.src_files, ['styles']);
    gulp.watch(config.images.src_files, ['images']);

    // documentation site
    gulp.watch([config.styles.pldoc_src_files, config.styles.src_files], ['pldoc_styles']);
    gulp.watch(config.images.pldoc_src_files, ['pldoc_images']);
    gulp.watch(config.scripts.pldoc_src_files, ['pldoc_scripts']);

    // local
    gulp.watch(config.jekyll.home, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.posts, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.includes, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.examples, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.layouts, ['jekyll-rebuild']);
});
