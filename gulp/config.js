// gulp pattern library + site configuration

    // pattern library
var dest                        = './public',
    src                         = './pattern-library',
    local                       = './_site',

    // documentation site
    pldoc_src                   = './pldoc';

module.exports = {
    browserSync:                {
        server:                 {
            // Serve up our build folder
            baseDir:            local
        }
    },
    styles:                     {

        settings_development: {
            outputStyle: 'expanded',
            sourcemapsLocation: '.'
        },

        settings_production: {
            outputStyle: 'compressed',
            autoprefixer: { browsers: ['last 2 version'] }
        },

        // pattern library
        src_files:              src + '/sass/**/*.scss',
        dest:                   dest + '/css',
        dest_files:             dest + '/css/**/*.css',
        local:                  local + '/public/pldoc/css',

        // documentation site
        pldoc_src:              pldoc_src + '/static/sass',
        pldoc_src_files:        pldoc_src + '/static/sass/**/*.scss'
    },
    images:                     {
        // pattern library
        src:                    './pattern-library/images',
        src_files:              './pattern-library/images/**',
        dest:                   './public/images',
        local:                  './_site/public/images',

        // documentation site
        pldoc_src:              './pldoc/static/images',
        pldoc_src_files:        './pldoc/static/images/**'
    },
    scripts:                    {
        // pattern library
        src:                    src + '/js',
        src_files:              src + '/js/*.js',
        dest:                   dest + '/js',
        local:                  local + '/public/js',

        // documentation site
        pldoc_src:              pldoc_src + '/static/js',
        pldoc_src_files:        pldoc_src + '/static/js/**/*.js'
    },
    lib:                    {
        // third party libraries
        src:                    './bower_components'
    },
    jekyll:                     {
        home:                   'index.html',
        posts:                  '_posts/**/*',
        includes:               '_includes/**/*',
        examples:               'examples/**/*',
        layouts:                '_layouts/**/*'
    }
};

