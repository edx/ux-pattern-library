(function() {
    'use strict';

    var gulp            = require('gulp'),
        eslint          = require('gulp-eslint'),
        config          = require('../config').scripts,
        htmlFiles       = require('../config').exampleHtmlFiles,
        handleErrors    = require('../util/handleErrors'),
        merge           = require('merge-stream');

    gulp.task('lint', function() {

        var scripts = gulp.src(config.src_files),
            pldocScripts = gulp.src(config.pldoc_src_files),
            pldocHtmlFiles = gulp.src(htmlFiles.pldoc_src_files);

        return merge(scripts, pldocScripts, pldocHtmlFiles)
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    });

}());
