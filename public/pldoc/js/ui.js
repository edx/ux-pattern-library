define([
    'jquery',
    '/public/pldoc/js/jquery.smooth-scroll.js',
    '/public/pldoc/js/tabs.js',
    '/public/pldoc/js/size-slider.js',
    '/public/pldoc/js/color-contrast.js'
    ], function($, smoothScroll, Tabs, IconSlider, ColorContrast) {

    // palette values
    function rgbaToHex(rgb) {
        console.log(rgb);
        if (typeof(rgb) !== 'undefined') {
            var _rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),
                hex;

            hex = (_rgb && _rgb.length === 4) ? '#' +
                ('0' + parseInt(_rgb[1],10).toString(16)).slice(-2) +
                ('0' + parseInt(_rgb[2],10).toString(16)).slice(-2) +
                ('0' + parseInt(_rgb[3],10).toString(16)).slice(-2) : '';
        } else {
            hex = ' --- ';
        }

        return hex;
    }


    var Ui = {

        // JS is enabled/available
        init: function() {
            Ui.setupHtml();
            Ui.smoothScrollLink();
            Ui.openNewWindow();
            Ui.navigationHighlight();
            Ui.setupPalettes();
        },

        setupHtml: function() {
            $('html').removeClass('no-js');
        },

        setupPalettes: function() {
            $('.example').each(function() {
                var rgb = $(this).find('.swatch-color').css('backgroundColor');

                $(this).find('.swatch-meta .color-rgb').val(rgb);
                $(this).find('.swatch-meta .color-hex').val(rgbaToHex(rgb));
            });
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

        openNewWindow: function() {
            $('a[rel="external"]').on('click', function(e) {
                e.preventDefault();
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

    $('.swatch-meta input').focus(function() {
        var $this = $(this);
        $this.select();

        $this.mouseup(function() {
            $this.unbind('mouseup');
            return false;
        });
    });

    Ui.init();
});
