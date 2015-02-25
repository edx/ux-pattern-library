$(document).ready(function() {

    $body = $('body');
    $html = $('html');

    // JS is enabled/available
    $html.removeClass('no-js');

    $('a[href^="#"]').bind('click', smoothScrollLink);
    // $('pl-nav .pl-link').bind('click', navShowCurrent);

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

    // show indicator for current element in navigation
    // function navShowCurrent(e) {
    //     (e).preventDefault();
    //     if ($(this).href == window.location.href) {
    //         $(this).closest('.nav-list-item').addClass('is-current');
    //     }
    // }
});
