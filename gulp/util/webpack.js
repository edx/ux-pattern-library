'use strict';

var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    gulpIgnore = require('gulp-ignore'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'),
    _ = require('underscore'),
    webpackConfigJS = require('../../webpack.config.js'),
    webpackConfigCSS = require('../../webpack.css.config.js');

module.exports = {
    /**
     * Packages a JavaScript file using Webpack.
     */
    packageJavaScript: function(options) {
        var sourceExtension = path.extname(options.source),
            targetExtension = '.js',
            baseName = path.basename(options.source, sourceExtension),
            packageConfig = _.extend(
                {},
                webpackConfigJS,
                {
                    output: _.extend(
                        {},
                        webpackConfigJS.output,
                        {
                            filename: baseName + targetExtension,
                            chunkFilename: baseName + '-[id]' + targetExtension
                        }
                    ),
                    plugins: [
                        new ExtractTextPlugin(baseName + targetExtension)
                    ]
                }
            );
        return gulp.src(options.source)
            .pipe(webpack(packageConfig))
            .pipe(gulp.dest(options.targetDirectory));
    },

    /**
     * Packages a CSS file using Webpack.
     */
    packageCss: function(options) {
        var sourceExtension = path.extname(options.source),
            targetExtension = '.css',
            baseName = path.basename(options.source, sourceExtension),
            targetPath = '../../' + options.targetDirectory + '/' + baseName + targetExtension,
            targetFile = path.resolve(__dirname, targetPath),
            patternLibraryPath = options.patternLibraryPath,
            packageConfig = _.extend(
                {},
                webpackConfigCSS,
                {
                    entry: {},
                    output: {
                        filename: targetFile,
                        chunkFilename: baseName + '-[id]' + targetExtension
                    }
                }
            );
        if (patternLibraryPath) {
            packageConfig.sassLoader.data = '$pattern-library-path: \'' + patternLibraryPath + '\' !default;';
        }
        packageConfig.entry[baseName + targetExtension] = path.resolve(__dirname, '../../' + options.source);
        return gulp.src('')
            .pipe(webpack(packageConfig))
            .pipe(gulpIgnore.exclude('**/*.js'))  // Exclude JavaScript files that are generated
            .pipe(gulp.dest(options.targetDirectory));
    }
};
