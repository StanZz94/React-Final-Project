(function ($) {
    "use strict";

    // Sticky Navbar

    $(document).ready(function() {
        $(".tab").click(function () {
            $(".tab").removeClass("active");
            $(this).addClass("active");   
        });
        });


    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    

})(jQuery);

