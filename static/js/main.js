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
            $("#btn-back-to-top").removeClass("animate__fadeOut").addClass("animate__fadeIn");
        } else {
            // hide navbar bg
            $("nav").removeClass("nav-on-scroll");

            // hide back to top button
            $("#btn-back-to-top").addClass("animate__fadeOut");
        }
    }
});

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        // get section id e.g #about
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 68
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
 $(function () {

    /* About section */
    $("#about-left .vertical-heading h2").waypoint(
        function () {
            $("#about-right p").each(function () {
                $(this).addClass("animate__animated animate__slideInRight");
            });
            $("#about-left .vertical-heading h2").addClass("animate__animated animate__fadeInDown");
            $("#about-left .vertical-heading h5").addClass("animate__animated animate__zoomInLeft");
            $("#my-img-warpper").addClass("animate__animated animate__zoomInUp");
        }, {
            offset: '100%'
        }
    );

    $("#about-bottom").waypoint(
        function() {
            $("#about-bottom img").addClass("animate__animated animate__fadeInUp");
        },
        {
            offset: '100%'
        }
    );

    /* skills section */
    $('#skills .vertical-heading h2').waypoint(
        function() {
            $("#skills p").addClass("animate__animated animate__slideInRight");
            $("#skills .vertical-heading h2").addClass("animate__animated animate__fadeInDown");
            $("#skills .vertical-heading h5").addClass("animate__animated animate__zoomInLeft");
            $("#skills .skill").each(function(){
                $(this).addClass("animate__animated animate__slideInUp animate__fadeInUp");
            });
        },
        {
            offset: '100%',
        }
    );

    /* services section */
    $("#services .horizontal-heading h2").waypoint(
        function() {
            $("#services .horizontal-heading h2").addClass("animate__animated animate__fadeInDown");
            $("#services .horizontal-heading h5").addClass("animate__animated animate__tada");
            $("#services .r-tabs-nav").addClass("animate__animated animate__zoomInUp");
            $("#services #service-tabs-wrapper").addClass("animate___animated animate__slideInUP");
        },
        {
            offset: '100%'
        }
    );

    /* Protfolio section */
    $("#portfolio .vertical-heading h2").waypoint(
        function() {
            $("#portfolio #portfolio-p-wrapper p").addClass("animate__animated animate__slideInRight");
            $("#portfolio .vertical-heading h2").addClass("animate__animated animate__fadeInDown");
            $("#portfolio .vertical-heading h5").addClass("animate__animated animate__zoomInLeft");
            $("#portofolio-wrapper").addClass("animate__animated animate__fadeInUp");
        },
        {
            offset: '100%'
        }
    );

    /* records section */
    $("#records .horizontal-heading h2").waypoint(
        function() {
            $("#records .horizontal-heading h2").addClass("animate__animated animate__fadeInDown");
            $("#records .horizontal-heading h5").addClass("animate__animated animate__tada");
            $("#records .records-item").each(function(){
                    $(this).addClass("animate__animated animate__flip");
            });
        },
        {
            offset: '100%'
        }
    );

    /* Blog section */
    $("#blog .vertical-heading h2").waypoint(
        function() {
            $("#blog .vertical-heading h2").addClass("animate__animated animate__fadeInDown");
            $("#blog .vertical-heading h5").addClass("animate__animated animate__zoomInLeft");
            $("#blog p").addClass("animate__animated animate__slideInUp");
            $("#blog #blog-btn").addClass("animate__animated animate__rubberBand");
            $("#blog .blog-post").addClass("animate__animated animate__backInRight");
        },
        {
            offset: '100%'
        }
    );

    /* contact section */
    $("#contact p").waypoint(
        function() {
            $("#contact .vertical-heading h2").addClass("animate__animated animate__fadeInDown");
            $("#contact .vertical-heading h5").addClass("animate__animated animate__zoomInLeft");
            $("#contact p").addClass("animate__animated animate__slideInUp");
            $("#contact #contact-info h4").addClass("animate__animated animate__fadeIn");
            $("#contact #contact-info ul.info-details").addClass("animate__animated animate__slideInRight");
            $("#contact #contact-info ul.social-list").addClass("animate__animated animate__flash");
            $("#contact form").addClass("animate__animated animate__bounceIn");
        },
        {
            offset: '100%'
        }
    );
});
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
           Portfolio section
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

 