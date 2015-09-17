var gulp            = require('gulp'),
    config          = require('../config').styles,
    handleErrors    = require('../util/handleErrors'),
    browserSync     = require('browser-sync'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifyCSS       = require('gulp-minify-css'),
    size            = require('gulp-filesize');
    sourcemaps      = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src(config.pldoc_src_files)
        .pipe(sourcemaps.init())
        .pipe(sass(config.settings))
        .on('error', handleErrors)
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest));
});
