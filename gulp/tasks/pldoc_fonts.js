var gulp            = require('gulp');
var config          = require('../config').scripts;
var browserSync     = require('browser-sync');

gulp.task('pldoc_fonts', function() {
    return gulp.src([
            // move fonts to public
            './_src/patter-library/fonts/OpenSans/**'
        ])
        .pipe(gulp.dest('./public/pldoc/fonts/OpenSans/'))
        .pipe(browserSync.reload({stream:true}))
});
