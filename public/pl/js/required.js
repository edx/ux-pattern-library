require.config({
    baseUrl: '/public/pl/js/',
    paths: {
        pl: '../../js',
        jquery: "jquery.min",
        svg4everybody: "svg4everybody.min",
    }
});

require(['pl/jquery.min', 'ui', 'pl/svg4everybody.min'],
    function($, Ui) {
        console.log(Ui);
    }
);