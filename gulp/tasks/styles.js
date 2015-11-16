var gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    browserSync     = require('browser-sync'),
    config          = require('../config').styles,
    handleErrors    = require('../util/handleErrors'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src(config.src_files)
        .pipe(sourcemaps.init())
        .pipe(sass(config.settings_develepment))
        .on('error', handleErrors)
        .pipe(autoprefixer())
        .pipe(sourcemaps.write(config.settings_development.sourcemapsLocation))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream:true}));
});
