/* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */

$(window).ready(function() {
    $('#pre-status').fadeOut();
    $('#tt-preloader').delay(350).fadeOut('slow');
});

$(document).ready(function () {

    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 500,
      easing: 'easeInOutCubic',
      updateURL: false, 
      offset: 0
    });

    if ( window.location.hash ) {
      var hash = window.location.hash; // Escape the hash
      var toggle = document.querySelector('a[href*="' + hash + '"]'); // Get the toggle (if one exists)
      scroll.animateScroll(hash, toggle);
    }

    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    (function () {
      $('.image-link').magnificPopup({

        gallery: {
          enabled: true
        },
        removalDelay: 300, // Delay in milliseconds before popup is removed
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        type:'image'
      });

    }());

});
