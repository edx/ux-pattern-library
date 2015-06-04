require.config({
    paths: {
        jquery: "/public/js/jquery-2.1.3.min"
    }
});

require([
    "jquery",
    "/public/js/svg4everybody.min.js",
    "/public/pl/js/jquery.smooth-scroll.js",
    "/public/pl/js/ui.js",
    "/public/pl/js/tabs.js",
    "/public/pl/js/size-slider.js",
    "/public/pl/js/color-contrast.js"], function($, svg4everybody, SmoothScroll, loadMainUI, Tabs, IconFontSliderControl, AccessibilityColorContrast){
        loadMainUI.init();
        Tabs.init();
        AccessibilityColorContrast.init();
        IconFontSliderControl.init();
});