define([
    'jquery'
    ], function($) {

    var Tabs = {

        vars: {
            tabContainer:   $('.pldoc-tab-wrapper'),
            tabs:           $('.pldoc-tab-labels'),
            tab:            $('.pldoc-tab-label'),
            panels:         $('.pldoc-tabs'),
            panel:          $('.pldoc-tab'),
            activeClass:    'is-active',
            hiddenClass:    'is-hidden',
        },

        init: function() {
            Tabs.handleTabClick();
        },

        resetInterface: function(wrapper) {
            wrapper.find('.pldoc-link').each(function(event) {
                event.currentTarget.removeClass(Tabs.vars.activeClass);
            });

            wrapper.find(Tabs.vars.panel).each(function(event) {
                event.currentTarget.removeClass(Tabs.vars.activeClass)
                       .addClass(Tabs.vars.hiddenClass);
            });
        },

        handleTabClick: function() {
            Tabs.vars.tab.find('.pldoc-link').on('click', function(event) {
                var el, content;

                event.preventDefault();

                el = $(event.currentTarget);
                content = el.attr('href');

                Tabs.resetInterface(el.closest(Tabs.vars.tabContainer));
                Tabs.makeActive(el, content);
            });
        },

        makeActive: function(tab, content) {
            tab.addClass(Tabs.vars.activeClass);
            $(content).addClass(Tabs.vars.activeClass)
                      .removeClass(Tabs.vars.hiddenClass);
        }
    };

    Tabs.init();
});