(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".product-slider").slick({
      dots: true,
      vertical: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 800,
    });
  });
})(jQuery);
