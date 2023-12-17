(function ($) {
    "use strict";

    // Sticky Navbar

    


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    

})(jQuery);

