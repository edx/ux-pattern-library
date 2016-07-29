define([
    'jquery'
], function($) {
    'use strict';
    /*
     * Accessibility Color Contrast Tool
     * Runs through our list of swatches checking the contrast variance between foreground
     * and background, and highlights those swatch color combinations that don't meet AA
     * acceptance criteria.
     */
    var AccessibilityColorContrast = (function() {
        return {
            vars: {
                failClass: 'fail-a11y-color' // Class for failed palettes
            },

            init: function() {
                AccessibilityColorContrast.checkContrast();
            },

            checkContrast: function() {
                var bg, fg, ratio, ratios;

                $('button.swatch').each(function() {
                    bg = AccessibilityColorContrast.getL(
                        AccessibilityColorContrast.rgbaToHex(
                            $(this).css('backgroundColor')
                        )
                    );
                    fg = AccessibilityColorContrast.getL(
                        AccessibilityColorContrast.rgbaToHex(
                            $(this).parent().parent()
                                .css('backgroundColor')
                        )
                    );

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

            rgbaToHex: function(rgba) {
                // matches rgba(r, g, b, a)
                var rgbaValue = rgba.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i),
                    hex;

                hex = (rgbaValue && rgbaValue.length === 4) ? '#' +
                    ('0' + parseInt(rgbaValue[1], 10).toString(16)).slice(-2) +
                    ('0' + parseInt(rgbaValue[2], 10).toString(16)).slice(-2) +
                    ('0' + parseInt(rgbaValue[3], 10).toString(16)).slice(-2) : '';

                hex = hex.replace('#', '');

                return hex;
            },

            getL: function(color) {
                var R, G, B, L,
                    update = false;

                if (color.length === 3) {
                    R = AccessibilityColorContrast.getsRGB(color.substring(0, 1) + color.substring(0, 1));
                    G = AccessibilityColorContrast.getsRGB(color.substring(1, 2) + color.substring(1, 2));
                    B = AccessibilityColorContrast.getsRGB(color.substring(2, 3) + color.substring(2, 3));
                    update = true;
                } else if (color.length === 6) {
                    R = AccessibilityColorContrast.getsRGB(color.substring(0, 2));
                    G = AccessibilityColorContrast.getsRGB(color.substring(2, 4));
                    B = AccessibilityColorContrast.getsRGB(color.substring(4, 6));
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
                var colorValue = AccessibilityColorContrast.getRGB(color);
                if (colorValue !== false) {
                    colorValue = colorValue / 255;
                    colorValue = (colorValue <= 0.03928) ? colorValue / 12.92 :
                                 Math.pow(((colorValue + 0.055) / 1.055), 2.4);
                    return colorValue;
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
                var title, newTitle;

                $(swatch)
                    .addClass(AccessibilityColorContrast.vars.failClass);

                title = $(swatch).attr('title');
                newTitle = title + '. Take care when using this color with certain color combinations!';

                $(swatch).attr('title', newTitle);
            }
        };
    }());

    return AccessibilityColorContrast;
});
