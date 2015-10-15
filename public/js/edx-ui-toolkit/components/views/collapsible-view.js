define(['backbone', 'underscore'],
    function (Backbone, _) {
        'use strict';

        /**
         * Click-able view that expands or collapses a section.
         *
         * Set the following data attributes on the element:
         *  - data-collapsed-text: text to display when content collapsed
         *  - data-expanded-text: text to display when content expanded
         */
        var CollapsibleView = Backbone.View.extend({

            initialize: function (options) {
                var self = this;
                self.options = _.defaults(options, {
                    toggleTextSelector: '.collapsible-toggle',
                    collapsibleSelector: '.collapsible-target',
                    isCollapsedClass: 'is-collapsed'
                });
                self.render();
            },

            toggleState: function(isVisible) {
                var self = this,
                    $textEl = self.$el.find(self.options.toggleTextSelector);

                if (isVisible) {
                    $textEl.text(self.$el.data('expanded-text'));
                } else {
                    $textEl.text(self.$el.data('collapsed-text'));
                }
                $textEl.attr('aria-expanded', isVisible);
                self.$el.toggleClass(self.options.isCollapsedClass, !isVisible);
            },

            render: function () {
                var self = this,
                    $collapsibleEl = self.$el.find(self.options.collapsibleSelector),
                    $textEl =self.$el.find(self.options.toggleTextSelector);

                // sets the initial state
                self.toggleState($collapsibleEl.is(':visible'));

                // clicking on the toggle text will hide/show content and update text
                $textEl.click(function () {
                    // Get the state now because getting it after toggling isn't  always accurate -- state is
                    // in transition
                    var isVisible = $collapsibleEl.is(':visible');
                    $collapsibleEl.slideToggle();
                    self.toggleState(!isVisible);
                });

                return self;
            }

        });

        return CollapsibleView;
    }
);
