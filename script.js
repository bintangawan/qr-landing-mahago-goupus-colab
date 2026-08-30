(function () {
  var $ = window.jQuery;

  function applyButtonMotion() {
    if (!$) return;

    $(function () {
      $('.cta-btn, .driver-btn').on('mouseenter', function () {
        $(this).stop(true, true).css({
          transform: 'translate(-3px, -3px)',
          boxShadow: '8px 8px 0 0 #0F1720'
        });
      }).on('mouseleave', function () {
        $(this).stop(true, true).css({
          transform: 'translate(0, 0)',
          boxShadow: '5px 5px 0 0 #0F1720'
        });
      }).on('mousedown', function () {
        $(this).stop(true, true).css({
          transform: 'translate(4px, 4px)',
          boxShadow: '0 0 0 0 #0F1720'
        });
      }).on('mouseup mouseleave', function () {
        $(this).stop(true, true).css({
          transform: 'translate(0, 0)',
          boxShadow: '5px 5px 0 0 #0F1720'
        });
      });

      $('.driver-btn').each(function (index) {
        $(this).css({
          animation: 'floatRecruit ' + (2.5 + index * 0.4) + 's ease-in-out infinite alternate',
          animationDelay: (index * 0.2) + 's'
        });
      });

      $('.zone').each(function (i) {
        var $zone = $(this);
        setTimeout(function () {
          $zone.find('.zone__top, .zone__bottom').addClass('is-visible');
        }, 120 * i);
      });
    });
  }

  if ($) {
    applyButtonMotion();
  } else {
    var elements = document.querySelectorAll('.cta-btn, .driver-btn');
    Array.prototype.forEach.call(elements, function (el) {
      el.addEventListener('mouseenter', function () {
        el.style.transform = 'translate(-3px, -3px)';
        el.style.boxShadow = '8px 8px 0 0 #0F1720';
      });
      el.addEventListener('mouseleave', function () {
        el.style.transform = 'translate(0, 0)';
        el.style.boxShadow = '5px 5px 0 0 #0F1720';
      });
      el.addEventListener('mousedown', function () {
        el.style.transform = 'translate(4px, 4px)';
        el.style.boxShadow = '0 0 0 0 #0F1720';
      });
      el.addEventListener('mouseup', function () {
        el.style.transform = 'translate(0, 0)';
        el.style.boxShadow = '5px 5px 0 0 #0F1720';
      });
    });
  }
})();
