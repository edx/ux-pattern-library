/* eslint "strict": ["error", "global"] */

'use strict';

var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),

    // Config specifically for webpack-dev-server (appended to main config in local development)
    devServerConfig = {
        // enables Hot Module Replacement (https://webpack.github.io/docs/hot-module-replacement-with-webpack.html)
        hot: true,
        publicPath: '/public',

        // Proxy all requests outside of the publicPath to Jekyll's server
        proxy: {
            '!/public': {
                target: 'http://127.0.0.1:4000',
                secure: false
            }
        },
        stats: {
            colors: true  // Colorize output, even when piped through Gulp
        }
    },

    /**
     * Builds a Webpack (https://webpack.github.io/) config from an options object
     * Supported options:
     * - debug: true (default) if Webpack will be running in a local development mode (enables HMR and source maps)
     *          false if Webpack is building a production bundle (separate CSS file, uglified JS, no local server)
     * - publicPath: if the bundle you're building needs to be served from a subdirectory, pass the path here.
     *               Otherwise, omit this setting. Currently only used while building S3 previews
     */
    configFactory = function(options) {
        var wpconfig = {
            output: {
                path: path.resolve(__dirname, 'pldoc/public/'),
                publicPath: (options.publicPath || '/') + 'public/',
                filename: '[name].js',  // Serve bundle from http://server/public/[name].js

                // Webpack 'chunks' are a loading mechanism for common code, more chunks can improve perf (esp. with H2)
                // There is more optimization to be done here! For more see:
                // https://webpack.github.io/docs/code-splitting.html
                chunkFilename: 'chunk.[id].js'
            },
            entry: {
                'pattern-library-doc': [
                    path.resolve(__dirname, 'pldoc/static/js/pattern-library-doc.js')
                ]
            },
            module: {
                loaders: [
                    {
                        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        // Inline WOFF(2) files using url-loader. WOFF(2) is the best format, so inline it for speed.
                        loader: 'url?limit=64000'
                    },
                    {
                        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        // Load the other font formats as external with another network request if using a WOFF fails.
                        loader: 'file'
                    },
                    {
                        test: /\.css$/,  // Required for precompiled FontAwesome
                        // In debug mode, uses css-loader and adds stylesheets to the JS bundle for HMR (and simplicity)
                        // In production, uses ExtractTextPlugin to build a separate CSS file
                        loader: options.debug ? 'style!css' : ExtractTextPlugin.extract('style', 'css')
                    },
                    {
                        test: /\.scss$/,
                        // Same as above, but with the added step of running through node-sass in both dev and prod
                        loader: options.debug ? 'style!css!sass' : ExtractTextPlugin.extract('style', 'css!sass')
                    }
                ]
            },
            resolve: {
                alias: {
                    // Aliases so we can use RequireJS with these bases and have it pick up the right folders
                    // See pldoc/static/js/ui.js for an example
                    'edx-pattern-library': path.resolve(__dirname, 'pattern-library'),
                    'edx-ui-toolkit': path.resolve(__dirname, 'node_modules/edx-ui-toolkit/src')
                },
                extensions: ['', '.js', '.css', '.scss', '.woff', '.woff2', '.ttf', '.eot', '.svg']
            },
            sassLoader: {
                // Similar to the aliases above, so we can @import the pattern library from a cleaner base in the pldoc
                data: "$pattern-library-path: '../../../pattern-library' !default;",
                includePaths: [
                    './node_modules'
                ],
                sourceMap: true  // Enable Sass sourcemaps regardless of environment type
            },
            plugins: [
                new webpack.NoErrorsPlugin()  // Don't emit anything when errors are encountered
            ],
            debug: options.debug,
            devtool: options.debug ? 'source-map' : null  // Enable JS sourcemaps in dev mode
        };

        // In debug (local) mode, we want hot module reload and CSS inlined into JS.
        // In prod mode, we disable HMR and use ExtractTextPlugin to generate .css files, avoiding a FOUC
        if (options.debug) {
            // For more on this WDS/HMR configuration, see:
            // http://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement
            wpconfig.entry['pattern-library-doc'] = [].concat(
                'webpack-dev-server/client?http://localhost:8080',
                'webpack/hot/only-dev-server',
                wpconfig.entry['pattern-library-doc']
            );
            wpconfig.plugins = [].concat(
                new webpack.HotModuleReplacementPlugin(),
                wpconfig.plugins
            );
            wpconfig.devServer = devServerConfig;
        } else {
            wpconfig.plugins = [].concat(
                new ExtractTextPlugin('[name].css'),  // Build a separate css file and emit it at publicPath/[name].css
                new webpack.optimize.UglifyJsPlugin(),  // Uglify (http://lisperator.net/uglifyjs/) the Javascript
                wpconfig.plugins
            );
        }

        return wpconfig;
    };

module.exports = {
    // By default, build an export a version of the config for development (unless NODE_ENV is production)
    default: configFactory({debug: process.env.NODE_ENV !== 'production'}),

    // Also export the configFactory, so programmatic users of Webpack can build their own configs by passing options
    // For an example of using configFactory, see gulp/tasks/webpack.js
    configFactory: configFactory,
    devServerConfig: devServerConfig
};
