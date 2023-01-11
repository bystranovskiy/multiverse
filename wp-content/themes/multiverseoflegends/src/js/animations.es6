"use strict";


(function ($) {

    $.fn.isInViewport = function () {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    };


    $("h1, h2, h3").each(function (index) {
        const self = $(this);

        function wrap() {
            self.prop("style").removeProperty("height");
            self.find(".intDrawing").contents().unwrap();
            self.height(self.outerHeight()).wrapInner("<span class='intDrawing'></span>");
        }

        $(window).on("load", function (e) {
            wrap()
        })

        window.matchMedia("(min-width: 1320px)").addEventListener("change", event => {
            wrap()
        })
        window.matchMedia("(min-width: 1024px)").addEventListener("change", event => {
            wrap()
        })
        window.matchMedia("(min-width: 768px)").addEventListener("change", event => {
            wrap()
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
            if ($(window).width() < 768) {
                self.prop("style").removeProperty("height");
                self.find(".intDrawing").contents().unwrap();
            }
        }).on("resizeend", function () {
            if ($(window).width() < 768) {
                wrap()
            }
        });

    });



    $(".checkViewport, h1, h2, h3").each(function (index) {
        let inViewport = false;
        const self = $(this);
        $(window).on("load scroll", function (e) {

            if (self.isInViewport()) {
                if (inViewport === false) {
                    setTimeout(function () {
                        self.addClass("inViewport");
                        inViewport = true;
                    }, 300);
                }
            } else {
                if (inViewport === true) {
                    self.removeClass("inViewport");
                    inViewport = false;
                }
            }
        })
    })

})(jQuery);