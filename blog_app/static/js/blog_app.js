/*====================================
           Preloader
 ====================================*/

$(window).on('load', function () {
    $('#preloader-status').fadeOut();
    $('#preloader').delay(350).fadeOut();
});


/*====================================
           about
 ====================================*/


/*====================================
           Progress Bars
 ====================================*/

$(function(){

    $(".test").waypoint(
                function(){
                    $(".progress-bar").each(function(){
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
