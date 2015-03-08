var gulp    = require('gulp');
var config  = require('../config');
var del     = require('del');

gulp.task( 'clean', function(cb) {
    del([
        config.styles.dest,
        config.styles.pl_dest,
        config.scripts.dest,
        config.scripts.pl_dest,
        config.images.dest,
        config.images.pl_dest
    ], cb);
});
