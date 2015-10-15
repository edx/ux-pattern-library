/**
 * Defines libraries used on PL Doc site.
 */
require.config({
    baseUrl: '/public/js',
    paths: {
        afontgarde: '/public/js/afontgarde',
        backbone: '/public/js/backbone/backbone',
        edxicons: '/public/js/edx-icons',
        'edx-ui-toolkit': '/public/js/edx-ui-toolkit/components',
        jquery: '/public/js/jquery.min',
        modernizr: '/public/js/modernizr-custom',
        svg4everybody: '/public/js/svg4everybody.min',
        text: '/public/js/text/text',
        underscore: '/public/js/underscore/underscore'
    },
    shim: {
        afontgarde: {
            exports: 'AFontGarde'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        jquery: {
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        }
    }
});

require([
    'jquery',
    'ui',
    'svg4everybody.min',
    'modernizr-custom',
    'afontgarde',
    'edx-icons',
    'start-collapsible',
    'dropdown-menu'
    ],
    function($, Ui) {}
);
