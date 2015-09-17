var gulp            = require('gulp'),
    config          = require('../config').styles,
    minifyCSS       = require('gulp-minify-css'),
    size            = require('gulp-filesize');

gulp.task('styles-minify', ['pldoc_styles'], function() {
    return gulp.src(config.pldoc_dest_files)
    .pipe(minifyCSS())
    .pipe(size());
});
