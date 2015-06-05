define(['jquery.min', 'jquery.smooth-scroll', 'tabs', 'size-slider', 'color-contrast',], function($, smoothScroll, Tabs, IconSlider, ColorContrast) {

    var Ui = {

        // JS is enabled/available
        init: function() {
            Ui.setupHtml();
            Ui.smoothScrollLink();
            Ui.openNewWindow();
            Ui.navigationHighlight();
            Ui.setupPalettes();

            Tabs.init();
            IconSlider.init();
            ColorContrast.init();
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
            $('a[href^="#"]').not('.pldoc-tab-wrapper .pldoc-link').on('click', function() {
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
            $('.pldoc-nav-elements .pldoc-link').on('click', function() {
                $('.pldoc-nav-elements .pldoc-link').removeClass('is-current');
                $(this).addClass('is-current');
            });
        },

        // open external links in new windows
        newWindowLink: function(e) {
            e.preventDefault();
            window.open($(this).attr('href'));
        }
    };

    Ui.init();
});
