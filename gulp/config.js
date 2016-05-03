// gulp pattern library + site configuration

    // pattern library
var src                         = './pattern-library',
    local                       = './_site',

    // documentation site
    pldocSrc                    = './pldoc',
    pldocDest                   = pldocSrc + '/public',

    // example demo
    demoSrc                     = './demo';

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
            sourcemapsLocation: '.',
            includePaths: [
                'node_modules'
            ]
        },

        // pattern library
        src_files:              src + '/sass/**/*.scss',
        src:                    src + '/sass',
        dest:                   src + '/css',
        dest_files:             src + '/css/**/*.css',

        // documentation site
        pldoc_src:              pldocSrc + '/static/sass',
        pldoc_src_files:        pldocSrc + '/static/sass/**/*.scss',
        pldoc_dest:             pldocDest + '/css',
        pldoc_dest_files:       pldocDest + '/css/**/*.css',

        // example demo
        demo_src:               demoSrc + '/static/sass',
        demo_src_files:         demoSrc + '/static/sass/**/*.scss',
        demo_dest:              pldocDest + '/css',
        demo_dest_files:        pldocDest + '/css/**/*.css'
    },
    fonts:                      {
        // pattern library
        src:                    src + '/fonts',
        src_files:              src + '/fonts/**/*',
        dest:                   pldocDest + '/fonts',

        // documentation site
        pldoc_src:              pldocSrc + '/static/fonts',
        pldoc_src_files:        pldocSrc + '/static/fonts/**/*',

        // example demo
        demo_src:               demoSrc + '/static/fonts',
        demo_src_files:         demoSrc + '/static/fonts/**/*'
    },
    images:                     {
        // pattern library
        src:                    src + '/images',
        src_files:              src + '/images/**/*',
        dest:                   pldocDest + '/images',

        // documentation site
        pldoc_src:              pldocSrc + '/static/images',
        pldoc_src_files:        pldocSrc + '/static/images/**/*',

        // example demo
        demo_src:               demoSrc + '/static/images',
        demo_src_files:         demoSrc + '/static/images/**/*'
    },
    scripts:                    {
        // pattern library
        src:                    src + '/js',
        src_files:              src + '/js/**/*.js',
        dest:                   pldocDest + '/js',

        // documentation site
        pldoc_src:              pldocSrc + '/static/js',
        pldoc_src_files:        pldocSrc + '/static/js/**/*.js',

        // example demo
        demo_src:               demoSrc + '/static/js',
        demo_src_files:         demoSrc + '/static/js/**/*.js'
    },
    lib:                    {
        // third party libraries
        src:                    './node_modules'
    },
    jekyll:                     {
        home:                   './pldoc/index.html',
        posts:                  './pldoc/_posts/**/*',
        includes:               './pldoc/_includes/**/*',
        examples:               './pldoc/examples/**/*',
        demo:                   './pldoc/demo/**/*.html',
        layouts:                './pldoc/_layouts/**/*'
    },
    documentation: {
        gitHubPages: {
            files: './_site/**/*'
        }
    }
};
