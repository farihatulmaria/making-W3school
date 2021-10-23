(function ($) {
  "use strict";
  $(document).ready(function ($) {
  $('#circle').circleProgress({
    value: 0.75,
    size: 80,
    fill: {
      gradient: ["red", "orange"]
    }
  });
})(jQuery);
