var gulp            = require('gulp'),
    config          = require('../config').styles,
    minifyCSS       = require('gulp-minify-css'),
    size            = require('gulp-filesize'),
    sourcemaps      = require('gulp-sourcemaps');

gulp.task('styles-minify', ['styles'], function() {
    return gulp.src(config.dest_files)
    .pipe(sourcemaps.init())
    .pipe(minifyCSS())
    .pipe(size())
    .pipe(sourcemaps.write(config.settings_development.sourcemapsLocation))
    .pipe(gulp.dest(config.dest));
});
