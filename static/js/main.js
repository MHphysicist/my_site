/*====================================
           Preloader
 ====================================*/

$(window).on('load', function () {
    $('#preloader-status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*====================================
           Navigation
 ====================================*/
$(function () {

    // on page load show/hide nav
    showHideNav();

    $(window).scroll(function () {
        // on window scroll show/hide nav
        showHideNav();

    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            // show navbar bg
            $("nav").addClass("nav-on-scroll");

            // show back to top button
            $("#btn-back-to-top").fadeIn();
        } else {
            // hide navbar bg
            $("nav").removeClass("nav-on-scroll");

            // hide back to top button
            $("#btn-back-to-top").fadeOut();
        }
    }
});

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section id e.g #about
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 40
        }, 1250, "easeInOutExpo");
    })
});

/*====================================
           Mobile menu
 ====================================*/
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
        /* hide mobile nav triger bottun */
        $("#mobile-nav-open-btn").css("display","none");
        $("#mobile-nav-close-btn").css("display","block");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
        /* hide mobile nav trigger bottun */
        $("#mobile-nav-open-btn").css("display","block");
        $("#mobile-nav-close-btn").css("display","none");
    });

});

/*====================================
           Animations
 ====================================*/
 $(window).on('load', function(){
     $("#home-text p").addClass("animate__animated animate__bounce");
     $("#home-btn").addClass("animate__animated animate__rubberBand");
     $("#home-caret-down").addClass("animate__animated animate__fadeInDown");
 });

 /* About section */
/* $(function () {
    $("#about-right").waypoint(
        function () {
            $("#about-right p").each(function () {
                $(this).addClass("animate__animated animate__slideInRight");
            });
            $(".vertical-heading h2").addClass("animate__animated animate__fadeInDown");
            $(".vertical-heading h5").addClass("animate__animated animate__zoomInLeft");
            $("#my-img-warpper").addClass("animate__animated animate__zoomInUp");
        }, {
            offset: 'top-to-bottom'
        }
    )
}); */


 /*====================================
           Sills section
 ====================================*/

/*====================================
           Progress Bars
 ====================================*/

 $(function () {

    $("#skills").waypoint(
        function () {
            $(".progress-bar").each(function () {
                $(this).animate({
                    width: $(this).attr("aria-valuenow") + "%"
                }, 500);
            })
            this.destroy();
        },
        {
            offset: '50%'
        }
    )
});

/*====================================
           Services section
 ====================================*/
/*====================================
           Responsive tabs (jquery plugin)
 ====================================*/
$(function () {
    $('#services-tabs').responsiveTabs({
        rotate: false,
        animation: 'slide',
    });
});

/* carousel dev icons */
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1100,
        autoplayHoverPause: true,
        responsive: {
            0: { // from 0 and up
                items: 3,
            },
            768: { // from 768 and up
                items: 4,
            }
        },
    });
});



/*====================================
           Work section
 ====================================*/

/*====================================
           magnifier
 ====================================*/

$(function () {
    $("#portofolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
    });
});

/*====================================
           Records section
 ====================================*/

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000,
    })
});

/*====================================
           Typed text
 ====================================*/
 /* home section */
 $(function(){
    var typed = new Typed('#typed-home-heading', {
        stringsElement: '#home-heading-1-text',
        typeSpeed: 90,
        backSpeed: 90,
        smartBackspace: true,
        loop: true,
      });
 });

 