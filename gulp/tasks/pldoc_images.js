var gulp          = require('gulp');
var config        = require('../config').images;
var changed       = require('gulp-changed');
var imagemin      = require('gulp-imagemin');
var browserSync   = require('browser-sync');

gulp.task('pldoc_images', function() {
    return gulp.src(config.pldoc_src)
        .pipe(changed(config.pldoc_dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(config.pldoc_local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.pldoc_dest));
});
