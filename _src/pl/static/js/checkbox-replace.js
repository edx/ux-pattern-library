/*
 * Checkbox replacement
 * Handles functionality for the replacement checkboxes, which
 * allows us to style them to our liking. Accessibility is main-
 * tained via use of the default checkbox control. The 
 * replacement control is not visible to screen readers.
 */

$(function() {

    var CustomCheckboxReplacement = {

        vars: {
            replaced:       $('.replace-checkbox'),
            replacedClass:  'is-replaced is-transparent',
            customClass:    'wrapper-custom-checkbox',
            wrapperClass:   'wrapper-replace-checkbox',
            iconChecked:    'icon-square',
            iconUnchecked:  'icon-square-o'
        },

        init: function() {
            this.replaceFoundCheckboxs();
            this.listenForCheckboxClick();
        },

        replaceFoundCheckboxs: function() {
            var that = this;

            if (that.vars.replaced.length) {

                that.vars.replaced.each(function() {
                    $(this).addClass(that.vars.replacedClass);
                    $(this).wrap('<div class="' + that.vars.wrapperClass + '"></div>');
                    $(this).parent().append($('<div class="' + that.vars.customClass + '" aria-hidden="true"></div>'));
                });

                that.setCheckboxsSelected();
            }
        },

        listenForCheckboxClick: function() {
            var that = this;

            that.vars.replaced.on('click', function() {
                that.setCheckboxsSelected();
            });
        },

        setCheckboxsSelected: function() {
            var that = this;

            that.vars.replaced.each(function() {
                if ($(this).is(':checked')) {
                    $(this)
                        .parent().parent()
                        .addClass('is-selected');

                    $(this)
                        .next()
                        .addClass('is-selected')
                        .html('<svg class="icon ' + that.vars.iconChecked + '" title="Checkbox toggle"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/public/images/edx-svg/svgdefs.svg#' + that.vars.iconChecked + '"></use></svg>');
                } else {
                    $(this)
                        .parent().parent()
                        .removeClass('is-selected');

                    $(this)
                        .next()
                        .removeClass('is-selected')
                        .html('<svg class="icon ' + that.vars.iconUnchecked + '" title="Checkbox toggle"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/public/images/edx-svg/svgdefs.svg#' + that.vars.iconUnchecked + '"></use></svg>');
                }
            });
        }

    };

    CustomCheckboxReplacement.init();
});