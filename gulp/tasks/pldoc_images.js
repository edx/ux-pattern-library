var gulp          = require('gulp'),
    config        = require('../config').images,
    changed       = require('gulp-changed'),
    imagemin      = require('gulp-imagemin'),
    browserSync   = require('browser-sync');

gulp.task('pldoc_images', function() {
    return gulp.src(config.pldoc_src)
        .pipe(changed(config.pldoc_dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(config.pldoc_local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.pldoc_dest));
});
