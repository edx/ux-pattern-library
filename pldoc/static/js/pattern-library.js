/**
 * Defines libraries used on PL Doc site.
 */
require.config({
    baseUrl: '/public/js',
    paths: {
        jquery: '/public/js/jquery.min',
        underscore: '/public/js/bower_components/underscore/underscore',
        backbone: '/public/js/bower_components/backbone/backbone',
        modernizr: '/public/js/modernizr-custom',
        afontgarde: '/public/js/afontgarde',
        edxicons: '/public/js/edx-icons',
        'edx-ui-toolkit': '/public/js/bower_components/edx-ui-toolkit/components'
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
    'modernizr-custom',
    'afontgarde',
    'edx-icons',
    'start-collapsible'
    ],
    function($, Ui) {}
);
