/**
 * Starts the dropdown menu view example component.
 */
define([
    'backbone',
    'edx-ui-toolkit/js/dropdown-menu/dropdown-menu-view.js'
    ],
    function( Backbone, DropdownMenuView ) {
        'use strict';

        var userModel = new Backbone.Model(),
            bearModel = new Backbone.Model();

        // The Basic Example
        userModel.set({
            main: {
                text: 'username',
                url: '/'
            },
            button_label: 'User options dropdown',
            items: [
                {
                    text: 'Dashboard',
                    url: '/'
                }, {
                    text: 'Account',
                    url: '/'
                }, {
                    text: 'Profile',
                    url: '/'
                }, {
                    text: 'Sign Out',
                    url: '/'
                }
            ]
        });

        new DropdownMenuView({
            className: 'wrapper-more-actions dropdown-menu-container logged-in',
            model: userModel,
            parent: '.js-user-cta'
        });

        // The Full Options Example
        bearModel.set({
            main: {
                image:'https://placebear.com/50/50',
                screenreader_label: 'Homepage for:',
                text: 'bears',
                url: '/'
            },
            button_label: 'Bear type dropdown',
            items: [
                {
                    text: 'Grizzly',
                    url: '/'
                }, {
                    text: 'Kodiak',
                    url: '/'
                }, {
                    text: 'Polar',
                    url: '/'
                }, {
                    text: 'Sun',
                    url: '/'
                }
            ]
        });

        new DropdownMenuView({
            className: 'wrapper-more-actions dropdown-menu-container logged-in',
            model: bearModel,
            parent: '.js-user-cta-img'
        });
    }
);
