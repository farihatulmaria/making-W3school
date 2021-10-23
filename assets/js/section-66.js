(function ($) {
  "use strict";
  $(document).ready(function () {
    $("#count-down-area").countdown("1/10/2027", function (event) {
      $(this).html(
        event.strftime(
          '<div id="count-down-area"><div class="single-count"> %W <br /><span>WEEKS</span></div><div class="single-count"> %H <br /><span>HOURS</span></div><div class="single-count"> %M <br /><span>MINUTES</span></div><div class="single-count"> %S <br /><span>SECONDS</span></div></div> '
        )
      );
    });
  });
})(jQuery);
