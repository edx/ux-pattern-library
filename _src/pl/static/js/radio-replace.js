/*
 * Radio button replacement
 * Handles functionality for the replacement radio buttons, which
 * allows us to style them to our liking. Accessibility is main-
 * tained via use of the default radio control. The replacement 
 * control is not visible to screen readers.
 */

$(function() {

    var CustomRadioReplacement = {

        vars: {
            replaced:       $('.replace-radio'),
            replacedClass:  'is-replaced is-transparent',
            customClass:    'wrapper-custom-radio',
            wrapperClass:   'wrapper-replace-radio',
            iconChecked:    'icon-circle',
            iconUnchecked:  'icon-circle-thin'
        },

        init: function() {
            this.replaceFoundRadios();
            this.listenForRadioClick();
        },

        replaceFoundRadios: function() {
            var that = this;

            if (that.vars.replaced.length) {

                that.vars.replaced.each(function() {
                    $(this).addClass(that.vars.replacedClass);
                    $(this).wrap('<div class="' + that.vars.wrapperClass + '"></div>');
                    $(this).parent().append($('<div class="' + that.vars.customClass + '" aria-hidden="true"></div>'));
                });

                that.setRadiosSelected();
            }
        },

        listenForRadioClick: function() {
            var that = this;

            that.vars.replaced.on('click', function() {
                that.setRadiosSelected();
            });
        },

        setRadiosSelected: function() {
            var that = this;

            that.vars.replaced.each(function() {
                if ($(this).is(':checked')) {
                    $(this)
                        .parent().parent()
                        .addClass('is-selected');

                    $(this)
                        .next()
                        .addClass('is-selected')
                        .html('<svg class="icon ' + that.vars.iconChecked + '" title="Radio toggle"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/public/images/edx-svg/svgdefs.svg#' + that.vars.iconChecked + '"></use></svg>');
                } else {
                    $(this)
                        .parent().parent()
                        .removeClass('is-selected');

                    $(this)
                        .next()
                        .removeClass('is-selected')
                        .html('<svg class="icon ' + that.vars.iconUnchecked + '" title="Radio toggle"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/public/images/edx-svg/svgdefs.svg#' + that.vars.iconUnchecked + '"></use></svg>');
                }
            });
        }

    };

    CustomRadioReplacement.init();
});