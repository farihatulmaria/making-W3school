(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".project-sliders").slick({
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpreed: 1000,
    });
  });
})(jQuery);
