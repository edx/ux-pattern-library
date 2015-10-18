var gulp            = require('gulp'),
    config          = require('../config').styles,
    minifyCSS       = require('gulp-minify-css'),
    rename          = require('gulp-rename'),
    size            = require('gulp-filesize');

gulp.task('pldoc_styles-minify', ['pldoc_styles'], function() {
    return gulp.src(config.pldoc_dest_files)
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(size())
    .pipe(gulp.dest(config.pldoc_dest));
});
