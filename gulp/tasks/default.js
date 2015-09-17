var gulp            = require('gulp'),
    runSequence    = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        'clean',
        ['images', 'pldoc_images'],
        ['scripts', 'pldoc_scripts'],
        'pldoc_styles',
        'watch'
    )
});


