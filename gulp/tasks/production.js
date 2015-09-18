var gulp            = require('gulp'),
    runSequence    = require('run-sequence');

// run this to compress all the things!
gulp.task( 'production', function() {
    runSequence(
        'clean',
        'images',
        ['scripts-uglify', 'scripts-move'],
        'styles-minify'
    )
});
