export default function initSliders(
    selector,
    settings = {
        dots: false,
        arrows: false,
        adaptiveHeight: true
    },
    hasStatusBar = true) {
    (function ($) {
        $(document).ready(function () {
            const $slider = $(selector).find(".items-list-inner");
            sliderInit();
            window.matchMedia("(min-width: 1024px)").addEventListener("change", event => {
                if (event.matches) {
                    if ($slider.hasClass("slick-initialized")) {
                        //$slider.slick("unslick");
                    }
                } else {
                    sliderInit()
                }
            })
            function sliderInit() {
                $slider.slick({
                    responsive: [
                        {
                            breakpoint: 9999,
                            settings: "unslick"
                        },
                        {
                            breakpoint: 1023,
                            settings: settings
                        }
                    ]
                }).on("beforeChange", function(event, { slideCount: count }, currentSlide, nextSlide){
                    if (hasStatusBar) {
                        const $statusBar = $(this).prev(".items-scroll-status");
                        $statusBar.find(".current-slide").text(nextSlide + 1);
                        $statusBar.find(".scrollbar-track").css("left", 100 / count * nextSlide + "%")
                    }
                });
            }
        });
    })(jQuery);
}