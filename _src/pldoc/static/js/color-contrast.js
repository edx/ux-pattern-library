define([
    'jquery'
    ], function($) {

    /*
     * Accessibility Color Contrast Tool
     * Runs through our list of swatches checking the contrast variance between foreground
     * and background, and highlights those swatch color combinations that don't meet AA
     * acceptance criteria.
     *
     * The majority of this code was adapted from Jared Smith of WebAIM.org
     * http://webaim.org/resources/contrastchecker
     */

    var AccessibilityColorContrast = {

        vars: {
            failClass: 'fail-a11y-color' // Class for failed palettes
        },

        init: function() {
            this.checkContrast();
        },

        rgbaToHex: function(rgba) {
            var _rgba = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),
                hex;

            hex = (_rgba && _rgba.length === 4) ? '#' +
                ('0' + parseInt(_rgba[1],10).toString(16)).slice(-2) +
                ('0' + parseInt(_rgba[2],10).toString(16)).slice(-2) +
                ('0' + parseInt(_rgba[3],10).toString(16)).slice(-2) : '';

            hex = hex.replace('#', '');

            return hex;
        },

        checkContrast: function() {
            var bg, fg, ratio, ratios;

            $('.example-color').each(function() {

                bg = AccessibilityColorContrast.getL( AccessibilityColorContrast.rgbaToHex( $(this).css('backgroundColor') ) );
                fg = AccessibilityColorContrast.getL( AccessibilityColorContrast.rgbaToHex( $(this).find('.color-class').css('color') ) );

                    ratio = (Math.max(bg, fg) + 0.05) / (Math.min(bg, fg) + 0.05);
                    ratios = [4.5, 3]; // 4.5 normal text AA, 3 large text AA

                if (ratio < ratios[0]) {
                    // Text should pass for normal sized text (non-headings)
                    AccessibilityColorContrast.applyHighlighting($(this));
                }

                if (ratio < ratios[1]) {
                    // Text should pass for heading sized text
                    // Unused at this time, since text is smaller
                }
            });
        },

        getL: function(color) {
            var R, G, B, A, L,
                update = false;

            if (color.length == 3) {

                R = AccessibilityColorContrast.getsRGB(color.substring(0,1) + color.substring(0,1));
                G = AccessibilityColorContrast.getsRGB(color.substring(1,2) + color.substring(1,2));
                B = AccessibilityColorContrast.getsRGB(color.substring(2,3) + color.substring(2,3));
                update = true;

            } else if (color.length == 6) {

                R = AccessibilityColorContrast.getsRGB(color.substring(0,2));
                G = AccessibilityColorContrast.getsRGB(color.substring(2,4));
                B = AccessibilityColorContrast.getsRGB(color.substring(4,6));
                update = true;

            } else {
                update = false;
            }

            if (update) {

                L = (0.2126 * R + 0.7152 * G + 0.0722 * B);
                return L;

            } else {
                return false;
            }
        },

        getsRGB: function(color) {
            color = AccessibilityColorContrast.getRGB(color);
            if (color !== false) {

                color = color/255;
                color = (color <= 0.03928) ? color/12.92 : Math.pow(((color + 0.055)/1.055), 2.4);
                return color;

            } else {
                return false;
            }
        },

        getRGB: function(col) {
            var color;

            try {
                color = parseInt(col, 16);
            } catch (err) {
                color = false;
            }

            return color;
        },

        applyHighlighting: function(swatch) {
            $(swatch)
                .addClass(AccessibilityColorContrast.vars.failClass);
        }

    };

    AccessibilityColorContrast.init();
});
