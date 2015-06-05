$(document).ready(function() {

    $body = $('body');
    $html = $('html');

    // JS is enabled/available
    $html.removeClass('no-js');

    $('a[href^="#"]').not('.pldoc-tab-wrapper .pldoc-link').on('click', smoothScrollLink);
    $('a[rel="external"]').on('click', newWindowLink);
    $('.pldoc-nav-elements .pldoc-link').on('click', navigationHighlight);

    // smoothscroll to target links
    function smoothScrollLink(e) {

        $.smoothScroll({
            offset: -200,
            easing: 'swing',
            preventDefault: false,
            speed: 1000,
            scrollElement: null,
            scrollTarget: $(this).attr('href')
        });
    }

    // smoothscroll to target links
    function navigationHighlight(e) {
        $('.pldoc-nav-elements .pldoc-link').removeClass('is-current');
        $(this).addClass('is-current');
    }

    // open external links in new windows
    function newWindowLink(e) {
        e.preventDefault();

        window.open($(this).attr('href'));
    }

    // tabbed interfaces
    var Tabs = {

        vars: {
            tabContainer:   $('.pldoc-tab-wrapper'),
            tabs:           $('.pldoc-tab-labels'),
            tab:            $('.pldoc-tab-label'),
            panels:         $('.pldoc-tabs'),
            panel:          $('.pldoc-tab'),
            activeClass:    'is-active',
            hiddenClass:    'is-hidden',
        },

        init: function() {
            this.handleTabClick();
        },

        resetInterface: function(wrapper) {
            var that = this;

            wrapper.find('.pldoc-link').each(function() {
                $(this).removeClass(that.vars.activeClass);
            });

            wrapper.find(that.vars.panel).each(function() {
                $(this).removeClass(that.vars.activeClass).addClass(that.vars.hiddenClass);
            });
        },

        handleTabClick: function() {
            var that = this;

            that.vars.tab.find('.pldoc-link').on('click', function(e) {
                e.preventDefault();

                var content = $(this).attr('href');

                that.resetInterface($(this).parent().parent().parent());
                that.makeActive($(this), content);
            });
        },

        makeActive: function(tab, content) {
            var that = this;

            tab.addClass(that.vars.activeClass);
            $(content).addClass(that.vars.activeClass).removeClass(that.vars.hiddenClass);
        }
    };

    if ($('.pldoc-tab-wrapper').length) {
        Tabs.init();
    }

    // palette values
    if ($('.example').length) {

        $('.example').each(function() {
            var rgb = $(this).find('.swatch-color').css('backgroundColor');

            $(this).find('.swatch-meta .color-rgb').text(rgb);
        });
    }
});
