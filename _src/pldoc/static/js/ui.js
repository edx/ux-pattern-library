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
    function rgbaToHex(rgb) {
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

    if ($('.example').length) {

        $('.example').each(function() {
            var rgb = $(this).css('backgroundColor');

            $(this).find('.color-meta .color-rgb').text(rgb);
            $(this).find('.color-meta .color-hex').text(rgbaToHex(rgb));
        });
    }

    // this selects all the text in an element
    // http://stackoverflow.com/questions/12243898/how-to-select-all-text-in-contenteditable-div
    $.fn.selectText = function() {
        var doc = document,
            element = this[0];

        if (doc.body.createTextRange) {
            var range = doc.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if (window.getSelection) {
            var selection = window.getSelection();
            var range = doc.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    $('.is-copyable').click(function() {
        $(this).selectText();
    });
});
