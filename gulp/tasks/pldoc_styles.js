var gulp            = require('gulp'),
    config          = require('../config').styles,
    handleErrors    = require('../util/handleErrors'),
    browserSync     = require('browser-sync'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifyCSS       = require('gulp-minify-css'),
    size            = require('gulp-filesize');

gulp.task('pldoc_styles', function () {
    return gulp.src(config.pldoc_src_files)
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(gulp.dest(config.pldoc_local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(minifyCSS()) // minify and move for production
        .pipe(gulp.dest(config.pldoc_dest))
        .pipe(size());
});
