$(document).ready(function() {

    $body = $('body');
    $html = $('html');

    // JS is enabled/available
    $html.removeClass('no-js');

    $('a[href^="#"]').bind('click', smoothScrollLink);
    $('a[rel="external"]').bind('click', newWindowLink);

    // smoothscroll to target links
    function smoothScrollLink(e) {
        (e).preventDefault();

        $.smoothScroll({
            offset: -200,
            easing: 'swing',
            speed: 1000,
            scrollElement: null,
            scrollTarget: $(this).attr('href')
        });
    }

    // open external links in new windows
    function newWindowLink(e) {
        (e).preventDefault();

        var $url = $(this).attr('href');
        window.open($url);
    }
});
