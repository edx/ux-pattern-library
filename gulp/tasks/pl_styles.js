var gulp            = require('gulp');
var config          = require('../config').styles;
var handleErrors    = require('../util/handleErrors');
var browserSync     = require('browser-sync');
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var minifyCSS       = require('gulp-minify-css');
var size            = require('gulp-filesize');

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
