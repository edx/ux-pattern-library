var gulp            = require('gulp'),
    config          = require('../config').scripts,
    browserSync     = require('browser-sync'),
    uglify          = require('gulp-uglify');

gulp.task('scripts', ['pldoc_scripts-lint'], function() {
    return gulp.src([
        // setup sequence for files that are loaded later with RequireJS
        config.src
    ])
    .pipe(gulp.dest(config.pldoc_local)) // move for just browsercync + local preview
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(config.pldoc_dest))
});
