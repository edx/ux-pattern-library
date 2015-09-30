var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    config          = require('../config'),
    uglify          = require('gulp-uglify');

gulp.task('scripts', ['scripts-lint'], function() {

    return gulp.src([
            // setup script sequence
            config.lib.src + '/requirejs/require.js',
            config.lib.src + '/jquery/dist/jquery.min.js',
            config.lib.src + '/svg4everybody/svg4everybody.min.js',
            config.scripts.src + '/modernizr.fontface-generatedcontent.js',
            config.scripts.src + '/afontgarde.js',
            config.scripts.src + '/select-replace.js',
            config.scripts.src + '/edx-icons.js',
            config.scripts.src + '/testing.js'
        ])
        .pipe(uglify())
        .pipe(gulp.dest(config.scripts.local)) // move for just browsercync + local preview
        .pipe(browserSync.reload({ stream: true }))
        .pipe(gulp.dest(config.scripts.dest))
});
