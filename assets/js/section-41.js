(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".project-slider").slick({
      dots: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 300,
      responsive: true,
    });
  });
})(jQuery);
