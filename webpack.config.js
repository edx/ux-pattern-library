(function() {
    'use strict';

    var path = require('path'),
<<<<<<< 99ec845825259e19353a5b3855ff6368db3b1705
        webpack = require('webpack'),
        outputRoot = process.env.OUTPUT_ROOT !== undefined ? process.env.OUTPUT_ROOT : 'public',
        siteRoot = process.env.SITE_ROOT !== undefined ? process.env.SITE_ROOT : '/',
        publicJavaScriptRoot = 'public/pldoc/js/';
=======
        webpack = require('webpack');
>>>>>>> Bundle assets using WebPack

    module.exports = {
        entry: path.resolve(__dirname, 'pldoc/static/js/pattern-library.js'),
        output: {
<<<<<<< 99ec845825259e19353a5b3855ff6368db3b1705
            path: path.resolve(__dirname, outputRoot + publicJavaScriptRoot),
            publicPath: siteRoot + publicJavaScriptRoot,
=======
            path: path.resolve(__dirname, 'public'),
            publicPath: '/public/pldoc/js/',
>>>>>>> Bundle assets using WebPack
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
