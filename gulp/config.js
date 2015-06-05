// gulp pattern library + site configuration

// pattern library
var dest = './public';
var src = './_src/pattern-library';
var local = './_site';

// documentation site
var pldoc_src = './_src/pldoc';
var pldoc_dest = './public/pldoc';

module.exports = {
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: local
        }
    },
    styles: {
        // pattern library
        src: src + '/sass',
        src_files: src + '/sass/**/*.scss',
        src_static: src + '/css',
        src_static_files: src + '/css/**/*.css',
        dest: dest + '/css',
        local: local + '/public/css',

        // documentation site
        pldoc_src: pldoc_src + '/static/sass',
        pldoc_src_files: pldoc_src + '/static/sass/**/*.scss',
        pldoc_src_static: src + '/css',
        pldoc_src_static_files: src + '/css/**/*.css',
        pldoc_dest: pldoc_dest + '/css',
        pldoc_local: local + '/public/pl/css'
    },
    images: {
        // pattern library
        src: src + '/images',
        src_files: src + '/images/**',
        dest: dest + '/images',
        local: local + '/public/images',

        // documentation site
        pldoc_src: pldoc_src + '/static/images',
        pldoc_src_files: pldoc_src + '/static/images/**',
        pldoc_dest: pldoc_dest + '/images',
        pldoc_local: local + '/public/pl/images'
    },
    scripts: {
        // pattern library
        src: src + '/js/**/*.js',
        dest: dest + '/js',
        local: local + '/public/js',

        // documentation site
        pldoc_src: pldoc_src + '/static/js',
        pldoc_src_files: pldoc_src + '/static/js/**/*.js',
        pldoc_dest: pldoc_dest + '/js',
        pldoc_local: local + '/public/pl/js'
    },
    vendor: {
        // pattern library
        src: src + '/vendor/**',
        dest: dest + '/vendor',
        local: local + '/public/vendor',

        // documentation site
        pldoc_src: pldoc_src + '/vendor/**',
        pldoc_dest: pldoc_dest + '/vendor',
        pldoc_local: local + '/public/pl/vendor'
    },
    jekyll: {
        home: 'index.html',
        posts: '_posts/*',
        layouts: '_layouts/*.html'
    }
};

