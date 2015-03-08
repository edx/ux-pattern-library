var gulp          = require('gulp');
var config        = require('../config').images;
var changed       = require('gulp-changed');
var imagemin      = require('gulp-imagemin');
var browserSync   = require('browser-sync');

gulp.task('pl_images', function() {
    return gulp.src(config.pl_src)
        .pipe(changed(config.pl_dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(config.pl_local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.pl_dest));
});
