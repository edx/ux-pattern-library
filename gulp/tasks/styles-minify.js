var gulp            = require('gulp'),
    config          = require('../config').styles,
    minifyCSS       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    size            = require('gulp-filesize');

gulp.task('styles-minify', function() {
    return gulp.src(config.dest_files)
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(size())
    .pipe(gulp.dest(config.dest));
});
