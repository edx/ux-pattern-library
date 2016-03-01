/**
 * Starts the dropdown menu view example component.
 */
define([
    'backbone',
    'edx-ui-toolkit/dropdown-menu/dropdown-menu-view'
    ],
    function( Backbone, DropdownMenuView ) {
        'use strict';
console.log('load me');
        var dropdownModel = new Backbone.Model();

        dropdownModel.set({
            main: {
                text: 'username',
                url: 'dashboard'
            },
            button_label: 'User options dropdown',
            items: [
                {
                    text: 'Dashboard',
                    url: 'dashboard'
                }, {
                    text: 'Account',
                    url: 'account_settings'
                }, {
                    text: 'Profile',
                    url: 'learner_profile'
                }, {
                    text: 'Sign Out',
                    url: 'logout'
                }
            ]
        });

        return new DropdownMenuView({
            className: 'wrapper-more-actions user-menu logged-in',
            model: dropdownModel,
            parent: '.js-user-cta'
        });
    }
);
