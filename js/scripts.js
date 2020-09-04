function getCardsAnimation() {
    var cardTemplOffset = $(document).scrollTop() - $("#cardTempl").offset().top;
    if(cardTemplOffset <= 0) {
        $("#rightToUp").css({
            "top" : cardTemplOffset / 3.5 + "px"
        });

        $("#leftToUp").css({
            "top" : -1*(cardTemplOffset / 3.5) + "px"
        });
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var cardTemplTopCoord;

$(window).load(function() {

    getCardsAnimation();

});

$(window).resize(function() {



});

$(document).scroll(function() {

    getCardsAnimation();

});

$(document).ready(function() {    

    if( $(".main_sldier").length > 0 ) {
        $(".main_sldier").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
            div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            scrollWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
            $("body").addClass("fixed");
            $("body").css({
                "position" : "fixed",
                "top" :  -$(document).scrollTop() + "px",
                "overflow" : "hidden",
                "right" : 0,
                "left" : 0,
                "bottom" : 0,
                "padding-right" : scrollWidth + "px"
            });
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") &&
          bodyWidth <= 1024) {
            $("#resp_nav").fadeOut(300);
            $(".respmenubtn").removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
        }
    });

});