
(function($) {
    "use strict";

    window.sr = ScrollReveal();
    sr.reveal('.animated-appearance', {distance:"0px", scale:0.99});


    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    jQuery.htmlPrefilter = function( html ) {
    return html;
};

})(jQuery);
