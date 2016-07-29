define(function() {
    'use strict';

    return {
        colors: [{
            color: 'primary',
            dark: [{
                title: 'Primary Dark',
                description: 'The darkest shade of the primary color.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            base: [{
                title: 'Primary Base',
                description: 'The base primary color intended for main use.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            accent: [{
                title: 'Accent Primary',
                description: 'The primary accent color.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            back: [{
                title: 'Primary Background',
                description: 'A lighter tint of the primary base color used for backgrounds.',
                recs: [{
                    back: ['dark', 'black']
                }]
            }],
            'x-back': [{
                title: 'Primary Lighter Background',
                description: 'A very light, near white, tint of the primary base color for lighter backgrounds.',
                recs: [{
                    back: ['dark', 'black']
                }]
            }]
        }, {
            color: 'secondary',
            dark: [{
                title: 'Secondary Dark',
                description: 'The darkest shade of the secondary color.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            base: [{
                title: 'Secondary Base',
                description: 'The base secondary color intended for main use.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            accent: [{
                title: 'Accent Secondary',
                description: 'The secondary accent color.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            back: [{
                title: 'Secondary Background',
                description: 'A lighter tint of the secondary base color used for backgrounds.',
                recs: [{
                    back: ['dark', 'black']
                }]
            }],
            'x-back': [{
                title: 'Secondary Lighter Background',
                description: 'A very light, near white, tint of the secondary base color for lighter backgrounds.',
                recs: [{
                    back: ['dark', 'black']
                }]
            }]
        }, {
            color: 'grayscale',
            dark: [{
                title: 'Gray Dark',
                description: 'The darkest shade of the gray color.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            base: [{
                title: 'Gray Base',
                description: 'The base gray color intended for main use.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            accent: [{
                title: 'Accent Gray',
                description: 'The gray accent color.',
                recs: [{
                    back: ['white', 'back', 'x-back']
                }]
            }],
            back: [{
                title: 'Gray Background',
                description: 'A lighter tint of the gray base color used for backgrounds.',
                recs: [{
                    back: ['dark', 'black']
                }]
            }],
            'x-back': [{
                title: 'Gray Lighter Background',
                description: 'A very light, near white, tint of the gray base color for lighter backgrounds.',
                recs: [{
                    back: ['dark', 'black']
                }]
            }]
        }, {
            color: 'success',
            text: [{
                title: 'Success Text',
                description: 'Text color for success messaging.',
                recs: [{
                    back: ['white', 'back']
                }]
            }],
            accent: [{
                title: 'Success Accent',
                description: 'A slightly lighter tint for success messaging accents.',
                recs: [{
                    back: ['white', 'back']
                }]
            }],
            back: [{
                title: 'Success Background',
                description: 'Success messaging background color.',
                recs: [{
                    back: ['black', 'dark']
                }]
            }]
        }, {
            color: 'error',
            text: [{
                title: 'Error Text',
                description: 'Text color for error messaging.',
                recs: [{
                    back: ['white', 'back']
                }]
            }],
            accent: [{
                title: 'Error Accent',
                description: 'A slightly lighter tint for error messaging accents.',
                recs: [{
                    back: ['white', 'back']
                }]
            }],
            back: [{
                title: 'Error Background',
                description: 'Error messaging background color.',
                recs: [{
                    back: ['black', 'dark']
                }]
            }]
        }, {
            color: 'warning',
            accent: [{
                title: 'Warning Accent',
                description: 'A slightly lighter tint for warning messaging accents.',
                recs: [{
                    back: ['white', 'back']
                }]
            }],
            back: [{
                title: 'Warning Background',
                description: 'Warning messaging background color.',
                recs: [{
                    back: ['black', 'dark']
                }]
            }]
        }]
    };
}());
