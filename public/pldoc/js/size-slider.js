define([
    'jquery'
    ], function($) {
/*
 * Icon size slider
 * Creates a slider control which lets users scale the icons to see how
 * they might look in various sizes. The size in pixels is also displayed
 * with the control.
 */

    var IconSlider = {

        vars: {
            wrapper: $('#icons-preview'),
            heading: $('.pldoc-tab-heading'),
            example: $('.example-icon .icon-display'),
            sliderControl: $('#iconFontSlider'),
            sliderValue: $('#iconFontSliderValue')
        },

        init: function() {
            IconSlider.listenForSlider();
        },

        listenForSlider: function() {
            IconSlider.vars.sliderControl.on('input change', function() {
                // oninput - chrome, firefox, safari
                // onchange - ie9-11
                IconSlider.updateIconSize($(this).val());
                IconSlider.updateAria($(this).val());
                IconSlider.updateInputText($(this).val());
            });
        },

        updateAria: function(size) {
            IconSlider.vars.sliderControl
                .attr('aria-now', size);
        },

        updateIconSize: function(size) {
            IconSlider.vars.example.css({ width: size + 'px' });
        },

        updateInputText: function(size) {
            IconSlider.vars.sliderValue.val(size);
        }
    };

    IconSlider.init();
});