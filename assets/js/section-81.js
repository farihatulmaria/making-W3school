(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".project-sliders").slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpreed: 2000,
    });
  });
})(jQuery);
