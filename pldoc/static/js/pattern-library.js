require.config({
    baseUrl: '/public/js',
    paths: {
        jquery: "/public/js/jquery.min",
        svg4everybody: "/public/js/svg4everybody.min",
        modernizr: "/public/js/modernizr-custom.js",
        afontgarde: "/public/js/afontgarde.js",
        edxicons: "/public/js/edx-icons.js"
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});

require([
    'jquery',
    '/public/js/ui.js',
    '/public/js/svg4everybody.min.js',
    '/public/js/modernizr-custom.js',
    '/public/js/afontgarde.js',
    '/public/js/edx-icons.js'
    ],
    function($, Ui) {}
);
