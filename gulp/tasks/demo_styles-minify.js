var gulp            = require('gulp'),
    config          = require('../config').styles,
    minifyCSS       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    size            = require('gulp-filesize');

gulp.task('demo_styles-minify', function() {
    return gulp.src(config.demo_dest_files)
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(size())
    .pipe(gulp.dest(config.demo_dest));
});
