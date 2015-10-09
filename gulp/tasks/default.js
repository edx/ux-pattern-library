var gulp            = require('gulp'),
    runSequence    = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        'clean',
        ['fonts'],
        ['images'],
        ['scripts','pldoc_scripts'],
        'styles',
        'watch'
    )
});


