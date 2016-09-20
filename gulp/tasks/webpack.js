'use strict';

var gulp = require('gulp'),
    gulpUtil = require('gulp-util'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    gitUtils = require('../util/gitUtils'),
    config = require('../config.js'),
    wpConfig = require('../../webpack.config.js'),
    wpConfigFactory = wpConfig.configFactory,
    wpConfigDevServer = wpConfig.devServerConfig;

/**
 * Builds a production bundle of the pattern library doc into /pldoc/public.
 * Runs like NODE_ENV = 'production' so that webpack builds a version where CSS is preloaded and JS is uglified.
 * For hot module reload and live browser updates (ie, a development site), use the webpackdev-server task below
 */
gulp.task('webpack-prod', ['clean'], function(callback) {
    webpack(wpConfigFactory({debug: false}), function(err, stats) {
        if (err) {
            throw new gulpUtil.PluginError('webpack', err);
        } else {
            gulpUtil.log('[webpack]', stats.toString({
                colors: true
            }));
        }
        callback();
    });
});

/*
 * Builds the pattern library documentation using webpack and serves it with webpack-dev-server.
 * Reloads modules (including CSS) using Webpack Hot Module Reload, at the cost of flashes of unstyled content
 * Serves from memory, not /pldoc/public, so clean that out first to assets from prod build don't turn up in dev
 * Also enables sourcemaps. Serves with the help of proxying to Jekyll's server - this won't work on its own.
 */
gulp.task('webpack-dev', ['clean'], function() {
    var compiler = webpack(wpConfigFactory({debug: true}));

    new WebpackDevServer(compiler, wpConfigDevServer).listen(8080, 'localhost', function(err) {
        if (err) {
            throw new gulpUtil.PluginError('webpack-dev-server', err);
        } else {
            gulpUtil.log(
                '[webpack-dev-server]',
                'Open http://localhost:8080. Modules (CSS and JS) will be live updated as you save them.'
            );
        }
    });
});

/*
 * Do a webpack build with a custom publicPath.
 * This is necessary because preview sites are served from subdirectories.
 * It's a little messy but the alternative is a lot of DNS or adding a lot of complexity to the webpack config.
 */
gulp.task('webpack-public-path-git-branch', ['clean'], function(callback) {
    var branch = gitUtils.currentBranch(),
        previewBaseUrl = '/' + branch + '/';

    webpack(wpConfigFactory({
        debug: false,
        publicPath: previewBaseUrl
    }), function(err, stats) {
        if (err) {
            throw new gulpUtil.PluginError('webpack', err);
        } else {
            gulpUtil.log('[webpack]', stats.toString({colors: true}));
        }
        callback();
    });
});
