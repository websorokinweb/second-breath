$(function () {
    $('.header__slider').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false,
        easing: 'linear',
        cssEase: 'linear',
        waitForAnimate: false,
        speed: 20000,
        centerMode: true,
        edgeFriction: 0,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        autoSlidesToShow: true,
        variableWidth: true,
    });

    // if ($('#slider-column-1').length) {
    //     $('#slider-column-1').slick({
    //         autoplay: true,
    //         arrows: false,
    //         dots: false,
    //         slidesToShow: 3,
    //         centerPadding: "10px",
    //         draggable: false,
    //         infinite: true,
    //         pauseOnHover: false,
    //         swipe: false,
    //         touchMove: false,
    //         vertical: true,
    //         speed: 1000,
    //         autoplaySpeed: 2000,
    //         useTransform: true,
    //         cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    //         adaptiveHeight: true,
    //     });

    //     $('#slider-column-1').slick('slickPlay');
    // }


});