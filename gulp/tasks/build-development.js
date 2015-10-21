var gulp = require('gulp'),
    runSequence    = require('run-sequence');

gulp.task( 'build-development', function(cb) {
    runSequence(
        'clean',
        'fonts',
        'images',
        ['scripts','pldoc_scripts'],
        'styles',
    cb);
});
