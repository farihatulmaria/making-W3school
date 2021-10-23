(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".menu-trigger").on("click", function () {
      $(".offcanvas-menu").addClass("show-menu");
      $(".offcanvas-shade").addClass("shade-active");
    });
    $(".menu-close").on("click", function () {
      $(".offcanvas-menu").removeClass("show-menu");
      $(".offcanvas-shade").removeClass("shade-active");
    });
    $(".homepage-sliders").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 900,
    });
  });
})(jQuery);
