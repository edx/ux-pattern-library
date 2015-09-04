var gulp            = require('gulp'),
    config          = require('../config').images,
    changed         = require('gulp-changed'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    browserSync     = require('browser-sync');

gulp.task('pldoc_images', function() {
    return gulp.src(config.pldoc_src_files)
        .pipe(changed(config.pldoc_dest))    // ignore unchanged files
        .pipe(imagemin({                     // optimize
            progressive: true,
            use: [pngquant()]
         }))
        .pipe(gulp.dest(config.pldoc_dest))
        .pipe(gulp.dest(config.pldoc_local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}));
});
