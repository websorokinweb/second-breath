$(function () {
    $("a").click(function(e){
        e.preventDefault();
    })

    $('.header__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        easing: 'linear',
        cssEase: 'linear',
        waitForAnimate: false,
        speed: 65000,
        centerMode: true,
        edgeFriction: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        autoSlidesToShow: true,
        variableWidth: true,
        swipe: false,
        useTransform: false,
        initialSlide: 1,
    });

    $('.header__slider-column--first').bxSlider({
        mode: 'vertical',
        easing: 'linear',
        ticker: true,
        speed: 70000,
        autoDirection: 'prev',
    })

    $('.header__slider-column--second').bxSlider({
        mode: 'vertical',
        easing: 'linear',
        ticker: true,
        speed: 60000,
        autoDirection: 'prev',
    })

    $('.header__slider-column--third').bxSlider({
        mode: 'vertical',
        easing: 'linear',
        ticker: true,
        speed: 75000,
        autoDirection: 'prev',
    })

    $('.header__slider-column--last').bxSlider({
        mode: 'vertical',
        easing: 'linear',
        ticker: true,
        speed: 65000,
        autoDirection: 'prev',
    })



});
