;(function(define) {
    'use strict';
    define(['afontgarde'], function() {
        // support icons that aren't yet using UXPL
        window.AFontGarde('FontAwesome', {
            glyphs: '&#61515;'
        });
        // the UXPL icons
        window.AFontGarde('edx-icons', {
            glyphs: '\uE621\uE622\uE623'
        });
    });
}).call(
    this,
    typeof define === 'function' && define.amd ? define :
        (typeof RequireJS !== 'undefined' ? RequireJS.define :
            edx.GlobalLoader.defineAs('edxicons', 'edx-pattern-library/js/edx-icons.js'))
);
