(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".sliders").slick({
      dots: true,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000,
    });
    $(".menu-trigger").on("click", function () {
      $(".offcanvas-menu").addClass("show-menu");
      $(".offcanvas-shade").addClass("shade-active");
    });
    $(".menu-close").on("click", function () {
      $(".offcanvas-menu").removeClass("show-menu");
      $(".offcanvas-shade").removeClass("shade-active");
    });
  });
})(jQuery);
