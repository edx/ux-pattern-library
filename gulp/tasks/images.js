var gulp          = require('gulp'),
    config        = require('../config').images,
    changed       = require('gulp-changed'),
    imagemin      = require('gulp-imagemin'),
    browserSync   = require('browser-sync');

gulp.task('images', function() {
    return gulp.src(config.src_files)
        .pipe(changed(config.dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(config.local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest));
});
