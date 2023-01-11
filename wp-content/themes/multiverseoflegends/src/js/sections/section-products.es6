import "../../scss/sections/section-products.scss";
import initSliders from "../init-sliders.es6";

initSliders("section.products")

"use strict";

(function ($) {

    $(document).ready(function () {
        $("section.products .item-description li").prepend(
            "<svg class='icon' xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 19 19' fill='none'>\n" +
            "<path d='M14.1585 9.66214C13.45 8.28851 11.564 6.86261 11.564 6.86261L10.2576 7.37957C10.2576 7.37957 9.37058 8.62175 9.6463 8.84575C10.3276 9.39921 11.7167 10.1852 11.7167 10.1852L11.9123 10.5897C11.9123 10.5897 11.6611 10.9007 11.5256 11.0231C10.6396 11.8247 9.08637 13.371 8.58947 13.8721C8.47296 13.9897 7.84164 14.2744 7.84164 14.2744C7.84164 14.2744 7.20412 13.7705 6.96167 13.5829C5.62723 12.5507 4.16119 10.6027 2.83012 9.56637C2.93505 9.46791 2.81315 9.11783 2.95512 8.98354C4.96721 7.07718 10.6668 1.56782 10.6668 1.56782L10.3198 0.605955C10.3198 0.605955 9.17864 0.185836 8.87853 0.393673C6.83114 1.81082 0.883484 8.818 0.883484 8.818L0.71875 9.98568L7.45263 16.3056L8.52293 15.9405C8.52293 15.9405 12.9209 11.829 13.7682 11.044C13.9783 10.8499 14.2659 9.87065 14.1585 9.66214Z' fill='none'/>\n" +
            "<path d='M5.00733 9.27248C5.7157 10.6461 6.81172 11.6698 7.97698 12.6165C8.25257 12.8403 9.57893 11.7749 9.57893 11.7749C9.57893 11.7749 9.89183 10.894 9.61624 10.6701C8.64602 9.88185 8.05537 10.1376 7.3501 9.09549C7.42728 9.02491 7.39321 8.75201 7.51174 8.63604C8.31426 7.84955 9.92281 6.17136 10.4217 5.66787C10.4977 5.59122 11.1803 5.00368 11.1803 5.00368L11.8774 4.92192C11.8774 4.92192 12.3923 5.46111 12.6087 5.67756C13.8099 6.87986 14.7585 8.18642 16.0898 9.22278C16.0005 9.30642 16.1897 9.94744 16.0736 10.0572C14.114 11.9121 9.12271 17.2972 9.12271 17.2972L9.01253 18.1458C9.01253 18.1458 10.1681 18.8319 10.4682 18.6243C12.5157 17.2072 18.2822 9.89033 18.2822 9.89033L18.1815 9.14694L11.7016 2.83398L10.9021 2.86079C10.9021 2.86079 6.38568 7.20354 5.53844 7.98842C5.32831 8.18292 4.89957 9.06383 5.00733 9.27248Z' fill='none'/>\n" +
            "</svg>"
        );
    });

})(jQuery);