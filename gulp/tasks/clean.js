var gulp    = require('gulp'),
    config  = require('../config'),
    del     = require('del');

gulp.task( 'clean', function() {
    return del([
        config.scripts.dest,
        config.images.dest,
        config.fonts.dest,
        config.styles.dest,
        config.styles.pldoc_dest
    ]);
});
