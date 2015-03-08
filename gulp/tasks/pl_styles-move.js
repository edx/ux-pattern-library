var gulp            = require('gulp');
var config          = require('../config').styles;
var handleErrors    = require('../util/handleErrors');
var browserSync     = require('browser-sync');
var minifyCSS       = require('gulp-minify-css');
var size            = require('gulp-filesize');

gulp.task('pl_styles-move', function () {
    return gulp.src(config.pl_src_static_files)
        .pipe(minifyCSS({keepBreaks:true})) // minify and move for production
        .on('error', handleErrors)
        .pipe(size())
        .pipe(gulp.dest(config.pl_local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.pl_dest));
});
