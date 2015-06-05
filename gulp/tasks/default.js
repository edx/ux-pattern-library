var gulp            = require('gulp');
var runSequence     = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        ['styles', 'scripts', 'images'],
        ['pldoc_styles', 'pldoc_scripts', 'pldoc_images'],
        'jekyll-build',
        'watch'
    );
});
