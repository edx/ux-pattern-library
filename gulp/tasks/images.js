var gulp            = require('gulp'),
    config          = require('../config').images,
    changed         = require('gulp-changed'),
    imagemin        = require('gulp-imagemin'),
    pngquant        = require('imagemin-pngquant'),
    browserSync     = require('browser-sync');

gulp.task('images', function() {
    return gulp.src(config.src_files)
        .pipe(changed(config.dest)) // ignore unchanged files
        .pipe(imagemin({            // optimize
            progressive: true,
            use: [pngquant()]
         }))
        .pipe(gulp.dest(config.dest))
        .pipe(gulp.dest(config.local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}));
});
