$(document).ready(function() {

    $body = $('body');
    $html = $('html');

    // JS is enabled/available
    $html.removeClass('no-js');

    $('a[href^="#"]').on('click', smoothScrollLink);
    $('a[rel="external"]').on('click', newWindowLink);
    $('.pl-nav-elements .pl-link').on('click', navigationHighlight);

    // smoothscroll to target links
    function smoothScrollLink(e) {

        $.smoothScroll({
            offset: -200,
            easing: 'swing',
            preventDefault: false,
            speed: 1000,
            scrollElement: null,
            scrollTarget: $(this).attr('href')
        });
    }

    // smoothscroll to target links
    function navigationHighlight(e) {
        $('.pl-nav-elements .pl-link').removeClass('is-current');
        $(this).addClass('is-current');
    }

    // open external links in new windows
    function newWindowLink(e) {
        e.preventDefault();

        window.open($(this).attr('href'));
    }

    // palette values
    if ($('.swatch').length) {

        $('.swatch').each(function() {
            var rgb = $(this).find('.swatch-color').css('backgroundColor');

            $(this).find('.swatch-meta .color-rgb').text(rgb);
        });
    }
});
