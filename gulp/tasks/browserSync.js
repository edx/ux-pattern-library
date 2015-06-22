var gulp            = require('gulp'),
    config          = require('../config').browserSync,
    browserSync     = require('browser-sync');

gulp.task('browserSync', ['jekyll-build'], function() {
    browserSync(config);
});
