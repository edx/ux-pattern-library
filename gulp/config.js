// gulp pattern library + site configuration

    // pattern library
var dest                        = './public',
    src                         = './pattern-library',
    local                       = './_site',

    // documentation site
    pldoc_src                   = './pldoc',

    // example demo
    demo_src                    = './demo';

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

        // pattern library
        src_files:              src + '/sass/**/*.scss',
        src:                    src + '/sass',
        dest:                   src + '/css',
        dest_files:             src + '/css/**/*.css',

        // documentation site
        pldoc_src:              pldoc_src + '/static/sass',
        pldoc_src_files:        pldoc_src + '/static/sass/**/*.scss',
        pldoc_dest:             dest + '/css',
        pldoc_dest_files:       dest + '/css/**/*.css',
        pldoc_local:            local + '/public/css',

        // example demo
        demo_src:               demo_src + '/static/sass',
        demo_src_files:         demo_src + '/static/sass/**/*.scss',
        demo_dest:              dest + '/css',
        demo_dest_files:        dest + '/css/**/*.css',
        demo_local:             local + '/public/css',
    },
    fonts:                      {
        // pattern library
        src:                    src + '/fonts',
        src_files:              src + '/fonts/**/*',
        dest:                   dest + '/fonts',
        local:                  local + '/public/fonts',

        // documentation site
        pldoc_src:              pldoc_src + '/static/fonts',
        pldoc_src_files:        pldoc_src + '/static/fonts/**/*',

        // example demo
        demo_src:               demo_src + '/static/fonts',
        demo_src_files:         demo_src + '/static/fonts/**/*'
    },
    images:                     {
        // pattern library
        src:                    src + '/images',
        src_files:              src + '/images/**/*',
        dest:                   dest + '/images',
        local:                  local + '/public/images',

        // documentation site
        pldoc_src:              pldoc_src + '/static/images',
        pldoc_src_files:        pldoc_src + '/static/images/**/*',

        // example demo
        demo_src:               demo_src + '/static/images',
        demo_src_files:         demo_src + '/static/images/**/*'
    },
    scripts:                    {
        // pattern library
        src:                    src + '/js',
        src_files:              src + '/js/**/*.js',
        dest:                   dest + '/js',
        local:                  local + '/public/js',

        // documentation site
        pldoc_src:              pldoc_src + '/static/js',
        pldoc_src_files:        pldoc_src + '/static/js/**/*.js',

        // example demo
        demo_src:               demo_src + '/static/js',
        demo_src_files:         demo_src + '/static/js/**/*.js'
    },
    lib:                    {
        // third party libraries
        src:                    './node_modules'
    },
    jekyll:                     {
        home:                   'index.html',
        posts:                  '_posts/**/*',
        includes:               '_includes/**/*',
        examples:               'examples/**/*',
        demo:                   'demo/**/*.html',
        layouts:                '_layouts/**/*'
    }
};

