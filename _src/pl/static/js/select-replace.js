/*
 * Select menu replacement
 * Handles functionality for the replacement select menus, which
 * allows us to style them to our liking. Accessibility is main-
 * tained via use of the default select control. The replacement 
 * control is not visible to screen readers.
 *
 * Choosing an option in the replacement menu also updates the
 * default select menu thus maintaining accessibility.
 */

$(function() {

    var CustomSelectReplacement = {

        vars: {
            replaced:       $('.replace-select'),
            replacedClass:  'is-replaced is-transparent',
            customClass:    'wrapper-custom-select',
            wrapperClass:   'wrapper-replace-select',
            valueClass:     'replace-value',
            iconClass:      'icon-sort',
            hoverClass:     'is-hover'
        },

        init: function() {
            this.replaceFoundSelects();
            this.listenForSelectClick();
            this.listenForSelectEvents();
        },

        replaceFoundSelects: function() {
            var that = this;

            if (that.vars.replaced.length) {

                that.vars.replaced.each(function() {
                    $(this).addClass(that.vars.replacedClass);
                    $(this).wrap('<div class="' + that.vars.wrapperClass + '"></div>');
                    $(this).parent().append($('<span class="' + that.vars.customClass + '" aria-hidden="true"><span class="' + that.vars.valueClass + '"></span><svg class="icon ' + that.vars.iconClass + '" title="Down arrow"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/public/images/edx-svg/svgdefs.svg#' + that.vars.iconClass + '"></use></svg></span>'));

                    that.setInitialText($(this));
                });
            }
        },

        setInitialText: function(el) {
            var that = this,
                val = el.find('option:first').text(),
                wrapper = el.parent(),
                text = wrapper.find('.' + that.vars.valueClass);

            text.text(val);
        },

        listenForSelectClick: function() {
            var that = this;

            that.vars.replaced.on('change', function() {
                var el = $(this);

                that.updateReplacedOption(el);
            });
        },

        updateReplacedOption: function(el) {
            var that = this,
                val = el.val(),
                wrapper = el.parent(),
                text = wrapper.find('.' + that.vars.valueClass);

            text.text(val);
        },

        listenForSelectEvents: function() {
            var that = this;

            that.vars.replaced.on('hover mouseover mouseenter', function() {
                $(this).next()
                    .addClass(that.vars.hoverClass);
            }).on('blur mouseout mouseleave', function() {
                $(this).next()
                    .removeClass(that.vars.hoverClass);
            });
        }

    };

    CustomSelectReplacement.init();
});