define(["jquery"], function($) {

    var Tabs = {

        vars: {
            tabContainer:   $('.pl-tab-wrapper'),
            tabs:           $('.pl-tab-labels'),
            tab:            $('.pl-tab-label'),
            panels:         $('.pl-tabs'),
            panel:          $('.pl-tab'),
            activeClass:    'is-active',
            hiddenClass:    'is-hidden',
        },

        init: function() {
            this.handleTabClick();
            this.setupTabs();
        },

        setuptabs: function() {
            if ($('.pl-tab-wrapper').length) {
                Tabs.resetInterface();
            }
        },

        resetInterface: function(wrapper) {
            wrapper.find('.pl-link').each(function() {
                $(this).removeClass(this.vars.activeClass);
            });

            wrapper.find(that.vars.panel).each(function() {
                $(this).removeClass(this.vars.activeClass).addClass(this.vars.hiddenClass);
            });
        },

        handleTabClick: function() {
            this.vars.tab.find('.pl-link').on('click', function(e) {
                e.preventDefault();

                var content = $(this).attr('href');

                Tabs.resetInterface($(this).parent().parent().parent());
                Tabs.makeActive($(this), content);
            });
        },

        makeActive: function(tab, content) {
            tab.addClass(this.vars.activeClass);
            $(content).addClass(this.vars.activeClass).removeClass(this.vars.hiddenClass);
        }
    };
});