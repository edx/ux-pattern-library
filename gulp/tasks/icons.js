var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    changed         = require('gulp-changed'),
    config          = require('../config').icons,
    merge           = require('merge-stream');

gulp.task('icons', function() {

    var icons = gulp.src(config.src_files);
    var pldoc_icons = gulp.src(config.pldoc_src_files);

    return merge(icons, pldoc_icons)
        .pipe(changed(config.dest)) // ignore unchanged files
        .pipe(gulp.dest(config.local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest))
});
