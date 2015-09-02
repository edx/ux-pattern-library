define([
    'jquery'
    ], function($) {

    /*
     * Icon size slider
     * Creates a slider control which lets users scale the icons to see how
     * they might look in various sizes. The size in pixels is also displayed
     * with the control.
     */

    var IconFontSliderControl = {

        vars: {
            wrapper: $('#icons-preview'),
            heading: $('.pldoc-tab-heading'),
            example: $('.example-icon .icon-display'),
            sliderControl: $('#iconFontSlider'),
            sliderValue: $('#iconFontSliderValue')
        },

        init: function() {
            this.listenForSlider();
        },

        listenForSlider: function() {
            IconFontSliderControl.vars.sliderControl.on('input change', function(event) {
                var size = event.target.value;
                // oninput - chrome, firefox, safari
                // onchange - ie9-11
                // console.log(event.target.value);
                IconFontSliderControl.updateIconSize(size);
                IconFontSliderControl.updateAria(size);
                IconFontSliderControl.updateInputText(size);
            });
        },

        updateAria: function(size) {
            IconFontSliderControl.vars.sliderControl
                .attr('aria-now', size);
        },

        updateIconSize: function(size) {
            IconFontSliderControl.vars.example.css({ width: size + 'px' });
        },

        updateInputText: function(size) {
            IconFontSliderControl.vars.sliderValue.val(size);
        }

    };

    IconFontSliderControl.init();
});
