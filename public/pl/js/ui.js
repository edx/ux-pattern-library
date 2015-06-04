define(["jquery", "/public/pl/js/tabs.js"], function($) {

    var loadMainUI = {

        // JS is enabled/available
        init: function() {
            loadMainUI.setupHtml();
            loadMainUI.smoothScrollLink();
            loadMainUI.openNewWindow();
            loadMainUI.navigationHighlight();
            loadMainUI.setupPalettes();
        },

        setupHtml: function() {
            $('html').removeClass('no-js');
        },

        setupPalettes: function() {
            if ($('.example').length) {
                $('.example').each(function() {
                    var rgb = $(this).find('.swatch-color').css('backgroundColor');
                    $(this).find('.swatch-meta .color-rgb').text(rgb);
                });
            }
        },

        // smoothscroll to target links
        smoothScrollLink: function(e) {
            $('a[href^="#"]').not('.pl-tab-wrapper .pl-link').on('click', function() {
                $.smoothScroll({
                    offset: -200,
                    easing: 'swing',
                    preventDefault: false,
                    speed: 1000,
                    scrollElement: null,
                    scrollTarget: $(this).attr('href')
                });
            });
        },

        openNewWindow: function(e) {
            e.preventDefault();
            $('a[rel="external"]').on('click', function() {
                window.open($(this).attr('href'));
            });
        },

        // smoothscroll to target links
        navigationHighlight: function() {
            $('.pl-nav-elements .pl-link').on('click', function() {
                $('.pl-nav-elements .pl-link').removeClass('is-current');
                $(this).addClass('is-current');
            });
        },

        // open external links in new windows
        newWindowLink: function(e) {
            e.preventDefault();
            window.open($(this).attr('href'));
        }
    };
});
