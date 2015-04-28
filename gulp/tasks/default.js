var gulp            = require('gulp');
var runSequence     = require('run-sequence');

gulp.task( 'default', function() {
    runSequence(
        ['styles', 'scripts', 'images'],
        ['pl_styles', 'pl_scripts', 'pl_images'],
        'jekyll-build',
        'watch'
    );
});
