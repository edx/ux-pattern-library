var gulp            = require('gulp'),
    config          = require('../config').styles,
    handleErrors    = require('../util/handleErrors'),
    browserSync     = require('browser-sync'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifyCSS       = require('gulp-minify-css'),
    size            = require('gulp-filesize'),
    sourcemaps      = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src(config.src_files)
        .pipe(sass(config.settings))
        .pipe(sourcemaps.init())
        .on('error', handleErrors)
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(gulp.dest(config.local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(minifyCSS()) // minify and move for production
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});
