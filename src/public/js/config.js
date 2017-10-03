/* ---------------------------------------------- /*
* Preloader
/* ---------------------------------------------- */

$(window).ready(function() {
    $('#pre-status').fadeOut();
    $('#tt-preloader').delay(350).fadeOut('slow');
});

$(document).ready(function () {
    var smoothoptions = {updateURL: false, offset: 0};
    var smooth = smoothScroll.init(smoothoptions);

    if ( window.location.hash ) {
        var hash = smooth.escape(window.location.hash); // Escape the hash
        var toggle = document.querySelector('a[href*="' + hash + '"]'); // Get the toggle (if one exists)
        var options = {speed: 1000, easing: 'easeOutQuad'}; // Any custom options you want to use would go here
        smooth.animateScroll(hash, toggle, options);
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
