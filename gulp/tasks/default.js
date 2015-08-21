var gulp            = require('gulp'),
    runSequence     = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        ['images'],
        ['pldoc_styles', 'pldoc_scripts', 'pldoc_images'],
        'watch'
    );
});
