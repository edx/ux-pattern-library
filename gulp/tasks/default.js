var gulp            = require('gulp');
var runSequence     = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        ['styles', 'images'],
        ['pl_styles', 'pl_scripts', 'scripts', 'pl_images'],
        'jekyll-build',
        'watch'
    );
});
