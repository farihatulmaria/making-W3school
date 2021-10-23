(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".comment-slider").slick({
      dots: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpreed: 900,
    });
  });
})(jQuery);
