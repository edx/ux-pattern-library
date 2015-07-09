var gulp            = require('gulp'),
    config          = require('../config').scripts,
    handleErrors    = require('../util/handleErrors'),
    jshint          = require('gulp-jshint');

gulp.task('pldoc_scripts-lint', function(){
    return gulp.src(config.pldoc_src_files)
    .pipe(jshint()) // Edit the .jshintrc file to change the options
    .pipe(jshint.reporter('default'))
    .on('error', handleErrors);
});
