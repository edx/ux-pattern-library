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
    'modernizr-custom',
    'afontgarde',
    'edx-icons',
    'start-collapsible'
    ],
    function($, Ui) {}
);
