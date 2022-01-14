$(document).ready(function(){
    $('.slider__box').slick({
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/img/slider/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/img/slider/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});