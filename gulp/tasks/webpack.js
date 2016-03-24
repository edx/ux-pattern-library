(function() {
    'use strict';

    var gulp = require('gulp'),
        webpack = require('gulp-webpack'),
        webpackConfig = require('../../webpack.config.js');

    gulp.task('webpack', function() {
        return gulp.src('src/entry.js')
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest('public/pldoc/js'));
    });
})();
