/* eslint "strict": ["error", "global"] */

'use strict';

var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    modulesDirectories: ['node_modules'],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name]')
    ],
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './node_modules/edx-pattern-library/node_modules')
        ]
    },
    debug: true,
    devtool: 'inline-source-map'
};
