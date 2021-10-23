(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".main-menu li").on("click", function () {
      var selector = $(this).attr("data-filler");

      $(".product-list").isotope({
        filter: selector,
      });
    });
    $(".product-list").isotope({});
  });
})(jQuery);
