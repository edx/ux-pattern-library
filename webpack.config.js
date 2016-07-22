/* eslint "strict": ["error", "global"] */

'use strict';

var path = require('path'),
    Webpack = require('webpack'),
    outputRoot = process.env.OUTPUT_ROOT !== undefined ? process.env.OUTPUT_ROOT : 'pldoc/public/',
    siteRoot = process.env.SITE_ROOT !== undefined ? process.env.SITE_ROOT : '/',
    publicJavaScriptRoot = 'public/';

module.exports = {
    output: {
        path: path.resolve(__dirname, outputRoot),
        publicPath: siteRoot + publicJavaScriptRoot
    },
    module: {
        loaders: [
            {
                test: /.woff([\?]?.*)$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]'
            },
            {
                test: /.ttf([\?]?.*)$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[path][name].[ext]'
            },
            {
                test: /.eot([\?]?.*)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /.svg([\?]?.*)$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml&name=[path][name].[ext]'
            }
        ]
    },
    modulesDirectories: ['node_modules'],
    resolve: {
        alias: {
            'edx-pattern-library': path.resolve(__dirname, 'pattern-library'),
            'edx-ui-toolkit': path.resolve(__dirname, 'node_modules/edx-ui-toolkit/src')
        }
    },
    plugins: [
        new Webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new Webpack.IgnorePlugin(/^(config.js)$/)
    ],
    debug: true,
    devtool: 'inline-source-map'
};
