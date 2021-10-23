(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".sliders").slick({
      arrows: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpreed: 900,
    });
  });
})(jQuery);
