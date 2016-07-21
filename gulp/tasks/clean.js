'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    del = require('del');

gulp.task('clean', function() {
    return del([
        config.scripts.dest,
        config.styles.dest,
        config.documentation.pldocDest
    ]);
});
