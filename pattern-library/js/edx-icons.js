AFontGarde('edx-icons', {
    // Add all of the individual icons you want to check for.
    // I don't think we need to list them all.
    glyphs: '\uE621\uE622\uE623',
    success: function() {
        console.log('Successfully loaded icon fonts!');
    },
    error: function() {
        console.log('Could not load icon fonts. Falling back to glyphs or images.');
    },
    timeout: 10000
});