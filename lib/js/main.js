$(document).ready(function(){
    var smoothoptions = {updateURL: false, offset: 0};
    var smooth = smoothScroll.init(smoothoptions);

    if ( window.location.hash ) {
        var hash = smooth.escapeCharacters( window.location.hash ); // Escape the hash
        var toggle = document.querySelector( 'a[href*="' + hash + '"]' ); // Get the toggle (if one exists)
        var options = {speed: 1000, easing: 'easeOutQuad'}; // Any custom options you want to use would go here
        smooth.animateScroll( hash, toggle, options );
    }    
    
});