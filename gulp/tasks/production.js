var gulp            = require('gulp'),
    runSequence    = require('run-sequence');

// run this to compress all the things!
gulp.task( 'production', function() {
    runSequence(
        'clean',
        ['fonts'],
        ['images'],
        'scripts-uglify',
        'styles-minify',
        'pldoc_styles-minify'
    )
});
