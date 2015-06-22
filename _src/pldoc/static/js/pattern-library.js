require.config({
    baseUrl: '/public/pldoc/js',
    paths: {
        jquery: "../../js/jquery.min",
        svg4everybody: "../../js/svg4everybody.min",
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        }
    }
});

require([
    'jquery',
    '/public/pldoc/js/ui.js',
    '../../js/svg4everybody.min'
    ],
    function($, Ui) {}
);