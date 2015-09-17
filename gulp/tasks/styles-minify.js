var gulp            = require('gulp'),
    config          = require('../config').styles,
    minifyCSS       = require('gulp-minify-css'),
    size            = require('gulp-filesize');

gulp.task('styles-minify', ['styles'], function() {
    return gulp.src(config.dest_files)
    .pipe(minifyCSS())
    .pipe(size());
});
