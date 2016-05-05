'use strict';

var gulp            = require('gulp'),
    config          = require('../config').scripts,
    handleErrors    = require('../util/handleErrors'),
    merge           = require('merge-stream');

gulp.task('scripts-lint', function() {

    var scripts = gulp.src(config.src_files),
        pldocScripts = gulp.src(config.pldoc_src_files);

    return merge(scripts, pldocScripts)
        .on('error', handleErrors);
});
