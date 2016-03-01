(function() {
    'use strict';

    var path = require('path'),
        webpack = require('webpack');

    module.exports = {
        entry: path.resolve(__dirname, 'pldoc/static/js/pattern-library.js'),
        output: {
            path: path.resolve(__dirname, 'public'),
            publicPath: '/public/pldoc/js/',
            filename: 'pattern-library.js'
        },
        modulesDirectories: ['node_modules'],
        resolve: {
            alias: {
                afontgarde: 'edx-pattern-library/js/afontgarde',
                modernizr: 'edx-pattern-library/js/modernizr-custom',
                'edx-pattern-library': path.resolve(__dirname, 'pattern-library'),
                'edx-ui-toolkit': path.resolve(__dirname, 'node_modules/edx-ui-toolkit/src')
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery'
            }),
            new webpack.IgnorePlugin(/^(config.js)$/)
        ],
        debug: true,
        devtool: 'inline-source-map'
    };
})();
