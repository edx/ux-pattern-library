var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');

gulp.task('pldoc_fonts', function() {
    return gulp.src([
            // move fonts to public
            './_src/pldoc/static/fonts/OpenSans/**'
        ])
        .pipe(gulp.dest('./_site/public/pldoc/fonts/OpenSans/')) // move just for browersync + local preview
        .pipe(gulp.dest('./public/pldoc/fonts/OpenSans/'))
        .pipe(browserSync.reload({stream:true}))
});
