define(['afontgarde'], function() {
    'use strict';

    // Old icon fonts, currently used in the platform.
    window.AFontGarde('FontAwesome', {
        glyphs: '&#61515;'
    });

    // New icon fonts for UXPL to eventually replace FontAwesome.
    window.AFontGarde('edx-icons', {
        glyphs: '\uE621\uE622\uE623'
    });
});
