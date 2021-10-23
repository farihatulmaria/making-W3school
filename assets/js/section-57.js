(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".service-slider").slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
})(jQuery);
