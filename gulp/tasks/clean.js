'use strict';

var gulp = require('gulp'),
    del = require('del');

gulp.task('clean', function() {
    return del([
        './ploc/public',
        './_site',
        './_preview_site'
    ]);
});
