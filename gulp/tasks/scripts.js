var gulp            = require('gulp'),
    config          = require('../config').scripts,
    browserSync     = require('browser-sync'),
    uglify          = require('gulp-uglify');

gulp.task('scripts', ['scripts-lint', 'scripts-move'], function() {
    return gulp.src([
        config.src_files
    ])
    .pipe(gulp.dest(config.local)) // move for just browsercync + local preview
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(config.dest))
});
