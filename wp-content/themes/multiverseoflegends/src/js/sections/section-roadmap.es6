import "../../scss/sections/section-roadmap.scss";

"use strict";

(function ($) {

    const $slider = $("section.roadmap .roadmap-list");
    const $srollbarTrack = $slider.next(".items-scroll-status").find(".scrollbar-track");

    window.matchMedia("(max-width: 1023px)").addEventListener("change", event => {
        if (event.matches) {
            sliderInit()
        }
    })

    let resizeTimer = false;
    $(window).on("resize", function (e) {
        if (!resizeTimer) {
            $(window).trigger("resizestart");
        }
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            resizeTimer = false;
            $(window).trigger("resizeend");
        }, 250);
    }).on("resizestart", function () {

    }).on("resizeend", function () {
        if ($(window).width() < 1024) {
            equalHeight();
        }
    });

    $(document).ready(function () {
        $("section.roadmap .btn-show-more").on("click", function () {
            $(this).fadeOut();
            $(this).parent("section.roadmap").removeClass("collapsed");
        });
        sliderInit();
    });

    function sliderInit() {
        $slider.on("init breakpoint", function (event, {slideCount: count, activeBreakpoint: breakpoint}) {
            const steps = breakpoint === 767 ? count : count - 1;
            $srollbarTrack.width(100 / steps + "%")
        }).slick({
            rows: 2,
            responsive: [
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1023,
                    settings: {
                        arrows: false,
                        infinite: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        adaptiveHeight: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        infinite: false,
                        arrows: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true,
                    }
                }
            ]
        }).on("beforeChange", function (event, {
            slideCount: count,
            activeBreakpoint: breakpoint
        }, currentSlide, nextSlide) {
            const steps = breakpoint === 767 ? count : count - 1;
            $srollbarTrack.css("left", 100 / steps * nextSlide + "%")
        });
        equalHeight();
    }

    function equalHeight() {
        const elem = ".roadmap-list .slick-slide>div";
        $(elem).removeAttr("style");
        let highestBox = 0;
        $(elem).each(function () {
            if ($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
        $(elem).height(highestBox);
    }


})(jQuery);