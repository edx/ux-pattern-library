(function() {
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
            new Webpack.ProvidePlugin({
                $: 'jquery'
            }),
            new Webpack.IgnorePlugin(/^(config.js)$/)
        ],
        debug: true,
        devtool: 'inline-source-map'
    };
})();
