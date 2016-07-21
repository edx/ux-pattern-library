// gulp pattern library + site configuration

'use strict';

    // pattern library
var patternLibrarySrc = './pattern-library',
    local = './_site',

    // documentation site
    pldocSrc = './pldoc',
    pldocDest = pldocSrc + '/public',

    // example demo
    demoSrc = './demo';

module.exports = {
    patternLibrary: {
        src_files: patternLibrarySrc + '/**/*',
        src: patternLibrarySrc,
        dest: pldocDest + '/edx-pattern-library'
    },
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: local
        }
    },
    styles: {
        // pattern library
        rootLtrSassFile: patternLibrarySrc + '/sass/edx-pattern-library-ltr.scss',
        rootRtlSassFile: patternLibrarySrc + '/sass/edx-pattern-library-rtl.scss',
        src: patternLibrarySrc + '/sass',
        dest: patternLibrarySrc + '/css',
        dest_files: patternLibrarySrc + '/css/**/*.css',

        // documentation site
        pldoc_src: pldocSrc + '/static/sass',
        pldoc_src_files: pldocSrc + '/static/sass/**/*.scss',

        // example demo
        demo_src: demoSrc + '/static/sass',
        demo_src_files: demoSrc + '/static/sass/**/*.scss'
    },
    fonts: {
        // pattern library
        src: patternLibrarySrc + '/fonts',
        src_files: patternLibrarySrc + '/fonts/**/*',
        dest: pldocDest + '/fonts',

        // documentation site
        pldoc_src: pldocSrc + '/static/fonts',
        pldoc_src_files: pldocSrc + '/static/fonts/**/*',

        // example demo
        demo_src: demoSrc + '/static/fonts',
        demo_src_files: demoSrc + '/static/fonts/**/*'
    },
    images: {
        // pattern library
        src: patternLibrarySrc + '/images',
        src_files: patternLibrarySrc + '/images/**/*',
        dest: pldocDest + '/images',

        // documentation site
        pldoc_src: pldocSrc + '/static/images',
        pldoc_src_files: pldocSrc + '/static/images/**/*',

        // example demo
        demo_src: demoSrc + '/static/images',
        demo_src_files: demoSrc + '/static/images/**/*'
    },
    scripts: {
        // pattern library
        src: patternLibrarySrc + '/js',
        src_files: patternLibrarySrc + '/js/**/*.js',
        dest: pldocDest + '/js',

        // documentation site
        pldoc_src: pldocSrc + '/static/js',
        pldoc_src_files: pldocSrc + '/static/js/**/*.js',

        // example demo
        demo_src: demoSrc + '/static/js',
        demo_src_files: demoSrc + '/static/js/**/*.js'
    },
    exampleHtmlFiles: {
        pldoc_src_files: pldocSrc + '/_includes/examples/*.html'
    },
    lib: {
        // third party libraries
        src: './node_modules'
    },
    jekyll: {
        home: './pldoc/index.html',
        posts: './pldoc/_posts/**/*',
        components: './pldoc/_components/**/*',
        design_elements: './pldoc/_design_elements/**/*',
        includes: './pldoc/_includes/**/*',
        examples: './pldoc/examples/**/*',
        demo: './pldoc/demo/**/*.html',
        layouts: './pldoc/_layouts/**/*'
    },
    documentation: {
        rootJavaScriptFile: './pldoc/static/js/pattern-library-doc.js',
        rootSassFile: './pldoc/static/sass/pattern-library-doc.scss',
        rootDemoSassFile: './pldoc/demo/static/sass/demo-ltr.scss',
        pldocDest: pldocDest,
        gitHubPages: {
            files: './_site/**/*'
        }
    }
};
