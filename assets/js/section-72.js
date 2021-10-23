(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".comment-sliders").slick({
      dots: false,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpreed: 1000,
    });
  });
})(jQuery);
