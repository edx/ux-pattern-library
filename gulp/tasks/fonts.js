var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    changed         = require('gulp-changed'),
    config          = require('../config').fonts,
    merge           = require('merge-stream');

gulp.task('fonts', function() {

    var fonts = gulp.src(config.src_files);
    var pldoc_fonts = gulp.src(config.pldoc_src_files);
    var demo_fonts = gulp.src(config.demo_src_files);

    return merge(fonts, pldoc_fonts, demo_fonts)
        .pipe(changed(config.dest)) // ignore unchanged files
        .pipe(gulp.dest(config.local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest))
});
