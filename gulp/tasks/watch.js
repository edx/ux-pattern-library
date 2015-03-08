var gulp    = require('gulp');
var config  = require('../config');

gulp.task('watch', ['browserSync'], function() {
    // patterns
    gulp.watch(config.styles.src_files, ['styles']);
    gulp.watch(config.images.src_files, ['images']);

    // documentation site
    gulp.watch(config.styles.pl_src_files, ['pl_styles']);
    gulp.watch(config.images.pl_src_files, ['pl_images']);
    gulp.watch(config.scripts.pl_src_files, ['pl_scripts']);

    // local
    gulp.watch(config.jekyll.home, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.posts, ['jekyll-rebuild']);
    gulp.watch(config.jekyll.layouts, ['jekyll-rebuild']);
});
