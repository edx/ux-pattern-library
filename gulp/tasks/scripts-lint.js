var gulp            = require('gulp'),
    config          = require('../config').scripts,
    handleErrors    = require('../util/handleErrors'),
    jshint          = require('gulp-jshint'),
    merge           = require('merge-stream');

gulp.task('scripts-lint', function(){

    var scripts = gulp.src(config.src_files);
    var pldoc_scripts = gulp.src(config.pldoc_src_files);

    return merge(scripts, pldoc_scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .on('error', handleErrors);
});
