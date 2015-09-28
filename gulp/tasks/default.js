var gulp            = require('gulp'),
    runSequence    = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        'clean',
        ['icons'],
        ['images'],
        ['scripts','pldoc_scripts'],
        'styles',
        'watch'
    )
});


