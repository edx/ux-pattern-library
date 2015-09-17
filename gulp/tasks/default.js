var gulp            = require('gulp'),
    runSequence    = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        'clean',
        ['images'],
        ['scripts-move', 'scripts', 'pldoc_scripts'],
        'styles',
        'watch'
    )
});


