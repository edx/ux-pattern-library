var gulp            = require('gulp'),
    autoprefixer    = require('gulp-autoprefixer'),
    browserSync     = require('browser-sync'),
    changed         = require('gulp-changed'),
    config          = require('../config'),
    handleErrors    = require('../util/handleErrors'),
    minifyCSS       = require('gulp-minify-css'),
    sass            = require('gulp-sass'),
    sourcemaps      = require('gulp-sourcemaps');

gulp.task('styles', function () {
    return gulp.src([
            config.lib.src + '/afontgarde/afontgarde.css',
            config.styles.pldoc_src_files
        ])
        .pipe(sourcemaps.init())
        .pipe(changed(config.styles.dest)) // ignore unchanged files
        .pipe(sass(config.styles.settings_develepment))
        .on('error', handleErrors)
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(sourcemaps.write(config.styles.settings_development.sourcemapsLocation))
        .pipe(gulp.dest(config.styles.local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(config.styles.dest));
});
