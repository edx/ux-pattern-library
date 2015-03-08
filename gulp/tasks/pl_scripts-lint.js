var gulp            = require('gulp');
var config          = require('../config').scripts;
var handleErrors    = require('../util/handleErrors');
var jshint          = require('gulp-jshint');

gulp.task('pl_scripts-lint', function(){
    return gulp.src(config.pl_src_files)
    .pipe(jshint()) // Edit the .jshintrc file to change the options
    .pipe(jshint.reporter('default'))
    .on('error', handleErrors);
});
