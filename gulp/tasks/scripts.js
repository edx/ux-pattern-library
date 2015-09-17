var gulp            = require('gulp'),
    config          = require('../config').scripts,
    browserSync     = require('browser-sync'),
    uglify          = require('gulp-uglify');

gulp.task('scripts', ['scripts-lint'], function() {
    return gulp.src([
        config.src
    ])
    .pipe(gulp.dest(config.pldoc_local)) // move for just browsercync + local preview
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(config.pldoc_dest))
});
