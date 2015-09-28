var gulp            = require('gulp'),
    runSequence    = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        'clean',
        ['icons'],
        ['fonts'],
        ['images'],
        ['scripts','pldoc_scripts'],
        'styles',
        'watch'
    )
});


