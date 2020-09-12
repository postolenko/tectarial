// function getCardsAnimation() {
//     if($("#cardTempl").length > 0) {
//         var cardTemplOffset = $(document).scrollTop() - $("#cardTempl").offset().top;
//         if(cardTemplOffset <= 0) {
//             $("#rightToUp").css({
//                 "top" : cardTemplOffset / 3.5 + "px"
//             });
//             $("#leftToUp").css({
//                 "top" : -1*(cardTemplOffset / 3.5) + "px"
//             });
//         }
//     }
// }

function getFixedNavMenu() {
    if($("#promo").length > 0) {
        offsetCoord = $("#promo").offset().top + $("#promo").outerHeight();
    } else {
        offsetCoord = $("#headerSite").offset().top + $("#headerSite").height();
    }
    if($(document).scrollTop() > offsetCoord ) {
        $("#scrollMenu").addClass("fixed");
    } else {
        $("#scrollMenu").removeClass("fixed");
    }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var cardTemplTopCoord;
var offsetCoord;

$(window).load(function() {

    $(".promo_sect .bg_image").addClass("active");
    $("#cardTempl").addClass("active");
    // getCardsAnimation();

});

$(window).resize(function() {

getFixedNavMenu();

});

$(document).scroll(function() {

    // getCardsAnimation();
    getFixedNavMenu();

});

$(document).ready(function() {

    getFixedNavMenu();

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

    if( $(".tab_slider").length > 0 ) {

        var sliderName, color, imgIndexCurrent, imgIndexNext, appendArrowsBox, appendDotsBox, navIndex, adaptiveHeight;

        $('.tab_slider').on('init', function(event, slick, currentSlide, nextSlide){
            sliderName = $(this).attr("data-slider");
            color = $(this).find('.slick-current .slide').attr("data-background");
            indexCurrent = $(this).find('.slick-current .slide').attr("data-sl-index");
            $(this).closest(".tab_slider_wrapp").css({"background" : color});
            if ( $("[data-slider-images = '"+ sliderName +"']").length > 0 ) {
                $("[data-slider-images = '"+ sliderName +"'] [data-sl-index = '"+indexCurrent+"']").fadeIn(500);
            }
            if ( $("[data-slider-nav = '"+ sliderName +"']").length > 0 ) {
                $("[data-slider-nav = '"+ sliderName +"'] a").removeClass("active");
                $("[data-slider-nav = '"+ sliderName +"'] [data-sl-index = '"+indexCurrent+"']").addClass("active");
            }
            if ( $("[data-tabslider-logosnav = '"+ sliderName +"']").length > 0 ) {
                $("[data-tabslider-logosnav = '"+ sliderName +"'] [data-sl-index = '"+indexCurrent+"'] a").addClass("active");
            }
        });

        $('.tab_slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
            sliderName = $(this).attr("data-slider");
            color = $(this).find('.slick-slide:eq('+nextSlide+') .slide').attr("data-background");
            indexCurrent = $(this).find('.slick-slide:eq('+currentSlide+') .slide').attr("data-sl-index");
            indexNext = $(this).find('.slick-slide:eq('+nextSlide+') .slide').attr("data-sl-index");
            $(this).closest(".tab_slider_wrapp").css({"background" : color});
            if ( $("[data-slider-images = '"+ sliderName +"']").length > 0 ) {
                $("[data-slider-images = '"+ sliderName +"'] [data-sl-index = '"+indexCurrent+"']").fadeOut(500);
                $("[data-slider-images = '"+ sliderName +"'] [data-sl-index = '"+indexNext+"']").fadeIn(500);
            }
            if ( $("[data-slider-nav = '"+ sliderName +"']").length > 0 ) {
                $("[data-slider-nav = '"+ sliderName +"'] a").removeClass("active");
                $("[data-slider-nav = '"+ sliderName +"'] [data-sl-index = '"+indexNext+"']").addClass("active");
            }
            if ( $("[data-tabslider-logosnav = '"+ sliderName +"']").length > 0 ) {
                $("[data-tabslider-logosnav = '"+ sliderName +"'] [data-sl-index = '"+indexCurrent+"'] a").removeClass("active");
                $("[data-tabslider-logosnav = '"+ sliderName +"'] [data-sl-index = '"+indexNext+"'] a").addClass("active");
            }
        });

        $(".tab_slider").each(function() {
            sliderName = $(this).attr("data-slider");
            appendArrowsBox = $("[data-tabslider-arrows = '"+sliderName+"']");
            appendDotsBox = $("[data-tabslider-controls = '"+sliderName+"']");
            if($(this).hasClass("adaptiveHeight")) {
                adaptiveHeight = true;
            } else {
                adaptiveHeight = false;
            }

            if($(this).hasClass("infinite")) {
                infinite = true;
            } else {
                infinite = false;
            }

            $(this).not(".slick-initialized").slick({
                dots: true,
                arrows: true,
                // autoplay: true,
                autoplaySpeed: 4000,
                speed: 1200,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: infinite,
                appendArrows: appendArrowsBox,
                appendDots: appendDotsBox,
                adaptiveHeight: adaptiveHeight
            });
        });

        $(".slider_nav li a").on("click", function(e) {
            e.preventDefault();
            parentBlock = $(this).closest(".slider_nav");
            sliderName = parentBlock.attr("data-slider-nav");
            navIndex = $(this).closest("li").index();
            $("[data-tabslider-controls = '"+ sliderName +"'] .slick-dots li:eq("+navIndex+") button").trigger("click");
        });

        $(".logos_nav a").on("click", function(e) {
            e.preventDefault();
            parentBlock = $(this).closest(".logos_nav");
            sliderName = parentBlock.attr("data-tabslider-logosnav");
            navIndex = $(this).closest("li").index();
            $("[data-tabslider-controls = '"+ sliderName +"'] .slick-dots li:eq("+navIndex+") button").trigger("click");
        });

    }

    $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            // $(this).addClass("active");
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
            $(".bg").fadeIn(300);
        } else {
            $("#resp_nav").fadeOut(300);
            // $(this).removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".bg").fadeOut(300);
        }
    });

    $(".respmenubtn_3").click(function(e) {
        e.preventDefault();
        $("#resp_nav").fadeOut(300);
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".bg").fadeOut(300);
    });

    $(".bg").click(function(e) {
        $("#resp_nav").fadeOut(300);
        $(this).removeClass("active");
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(this).fadeOut(300);
        $(".respmenubtn").removeClass("active");
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
          $("#resp_nav").is(":visible") ) {
          // bodyWidth <= 1024) {
            $("#resp_nav").fadeOut(300);
            $(".respmenubtn").removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".bg").fadeOut(300);
        }
    });

    // ----------

    $(".dropdown_box_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".dropdown_box_wrapp");
      var dropdownBlock = parentBlock.find(".dropdown_box");
      if(dropdownBlock.is(":hidden")) {
        dropdownBlock.slideDown(300);
        $(this).addClass("active");
      } else {
        dropdownBlock.slideUp(300);
        $(this).removeClass("active");
      }
    });

    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
        $(".dropdown_box").slideUp(300);
        $(".dropdown_box_title").removeClass("active");
      }
    });

    $(document).mouseup(function (e){
        hide_element = $(".dropdown_box")
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
          $(hide_element).slideUp(300);
          parentBlock = $(hide_element).closest(".dropdown_box_wrapp");
          parentBlock.find(".dropdown_box_title").removeClass("active");
        }
    });

    var value, form, dropdowns;

    $(".dropdown_box p").on("click", function(e) {
      e.preventDefault();
      value = $(this).text();
      parentBlock = $(this).closest(".dropdown_box_wrapp");
      parentBlock.find(".dropdown_box_title p").text(value);
      parentBlock.find("input[type='hidden']").val(value);
      parentBlock.find(".dropdown_box_title").removeClass("active");
      $(this).closest(".dropdown_box").slideUp(300);
    });

    // -----------

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }


    if( $(".contacts_slider").length > 0 ) {

        $(".city_link").on("click", function(e) {
            e.preventDefault();
            parentBlock = $(this).closest(".map_wrapp");
            index = $(this).attr("data-cityindex");
            sliderName = parentBlock.attr("data-map");
            $("[data-slider = '"+sliderName+"'] .slick-dots li[data-cityindex = '"+index+"'] button").trigger("click");
            parentBlock.find(".city_link").removeClass("active");
            $(this).addClass("active");
        });

        $(".contacts_slider").init(function() {
            var indexArr = [];
            var countInex = 0;
            var indexBtn;
            index = $(this).find(".slick-current .slide").attr("data-cityindex");
            sliderName = $(this).attr("data-slider");
            $("[data-cityindex = '"+index+"']").addClass("active");
            $(this).find(".slide").each(function() {
                indexArr.push($(this).attr("data-cityindex"));
            });
            $(this).find(".slick-dots li").each(function() {
                indexBtn = $(this).find("button").index();
                $(this).attr("data-cityindex", indexArr[countInex]);
                countInex++;
            });
        });

        // $('.contacts_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        //     index = $(this).find(".slick-current .slide").attr("data-cityindex");
        //     sliderName = $(this).attr("data-slider");
        //     $("[data-map = '"+sliderName+"'] .city_link").removeClass("active");
        //     $("[data-cityindex = '"+index+"']").addClass("active");
        // });

        $(".contacts_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });

    }

    if( $(".years_slider").length > 0 ) {

        $(".years_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            adaptiveHeight: true,
            swipe: false,
            infinite: false,
            appendDots: ".years_slider_controls"
        });

        $(".year_btn").on("click", function(e) {
            e.preventDefault();
            index = $(this).closest("li").index();
            parentBlock = $(this).closest(".years_tab_wrapp");
            yearsSliderControls = parentBlock.find(".years_slider_controls");
            yearsSliderControls.find("li:eq("+index+") button").trigger("click");
            $(".years_tab li a").removeClass("active");
            $(".years_tab").each(function() {
                $(this).find("li:eq("+index+") a").addClass("active");
            });
        });

    }

    // ------------

     $(".scroll_down").click(function(e) {
        var topCoord;
        e.preventDefault();
        // if(bodyWidth > 900) {
            // topCoord = $(this).closest("section").next("section").offset().top;
            topCoord = $("#cardTempl").offset().top
        // } else {
        //     topCoord = $(this).closest("section").next("section").offset().top - $(".header_site").height();
        // }
        $("body, html").animate({
            scrollTop: topCoord
        }, 1000);
    });

    // ------------

    $(".naim_nav .dropdown_btn").on("click", function(e) {
        e.preventDefault();
        parentBlock = $(this).closest("li");
        dropdownBlock = parentBlock.find(".sub-menu");
        if(dropdownBlock.is(":hidden")) {
            dropdownBlock.slideDown(300);
            $(this).addClass("active");
        } else {
            dropdownBlock.slideUp(300);
            $(this).removeClass("active");
        }
    });


});