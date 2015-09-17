var gulp            = require('gulp'),
    config          = require('../config'),
    handleErrors    = require('../util/handleErrors'),
    browserSync     = require('browser-sync'),
    merge           = require('merge-stream');

gulp.task('scripts-move', function(){

    var requirejs       = gulp.src(config.lib.src + '/requirejs/require.js'),
        jquery          = gulp.src(config.lib.src + '/jquery/dist/jquery.min.js'),
        svg4everybody   = gulp.src(config.lib.src + '/svg4everybody/svg4everybody.min.js');

    return merge(requirejs, jquery, svg4everybody)
    .pipe(gulp.dest(config.scripts.local)) // move for just browsercync + local preview
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest(config.scripts.dest))
});
