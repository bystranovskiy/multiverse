import "../../scss/sections/section-faqs.scss";

"use strict";

(function ($) {

    $(document).ready(function () {
        $(".faqs-list-item-question").on("click", function () {
            $(this).parent().toggleClass("active");
        })
    });

})(jQuery);