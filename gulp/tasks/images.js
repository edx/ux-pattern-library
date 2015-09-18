var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    changed         = require('gulp-changed'),
    config          = require('../config').images,
    imagemin        = require('gulp-imagemin'),
    merge           = require('merge-stream'),
    pngquant        = require('imagemin-pngquant');

gulp.task('images', function() {

    var images = gulp.src(config.src_files);
    var pldoc_images = gulp.src(config.pldoc_src_files);

    return merge(images, pldoc_images)
        .pipe(changed(config.dest)) // ignore unchanged files
        .pipe(imagemin({            // optimize
            progressive: true,
            use: [pngquant()]
         }))
        .pipe(gulp.dest(config.local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.dest))
});
