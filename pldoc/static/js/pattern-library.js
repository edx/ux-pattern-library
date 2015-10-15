/**
 * Defines libraries used on PL Doc site.
 */
require.config({
    baseUrl: '/public/js',
    paths: {
        jquery: '/public/js/jquery.min',
        underscore: '/public/js/bower_components/underscore/underscore',
        backbone: '/public/js/bower_components/backbone/backbone',
        svg4everybody: '/public/js/svg4everybody.min',
        modernizr: '/public/js/modernizr-custom',
        afontgarde: '/public/js/afontgarde',
        edxicons: '/public/js/edx-icons',
        'edx-ui-toolkit': '/public/js/bower_components/edx-ui-toolkit/components',
        text: '/public/js/bower_components/text/text'
    },
    shim: {
        jquery: {
            exports: 'jquery'
        },
        afontgarde: {
            exports: 'AFontGarde'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone',
            init: function (_, $) {
                'use strict';
                Backbone.$ = $;
                return Backbone;
            }
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
