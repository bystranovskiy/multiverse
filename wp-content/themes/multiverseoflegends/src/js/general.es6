"use strict";

document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( 196 === event.detail.contactFormId ) {
        location = 'https://multiverseoflegends.com/thanks-for-submiting/';
    } else if ( 113 === event.detail.contactFormId ) {
        location = 'https://multiverseoflegends.com/uk/thanks-for-submiting/';
    }
}, false );

(function ($) {

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });

    $(document).ready(function () {
        $("nav .menu a[href^='#']").on("click", function (e) {
            e.preventDefault();
            $("header .toggle").removeClass("active");
            $("header").removeClass("active");
            $("body").removeClass("fixed");
            const target = $("section[data-anchor=" + $(this).attr("href").split("#")[1] + "]");
            if (target.length > 0) {
                $("html, body").animate({
                    scrollTop: target.offset().top - 80
                }, 1000);
            }
        })

        $("header .toggle").on("click", function (e) {
            $(this).toggleClass("active");
            $("header").toggleClass("active");
            $("body").toggleClass("fixed");
        })

    });

})(jQuery);
