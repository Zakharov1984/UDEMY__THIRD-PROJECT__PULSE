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

function activeTabs() {
    let tabs = document.querySelectorAll('.tabs__item');
    let childrenTabs = document.querySelectorAll('.tabs__link');
    for (let tab of tabs) {
        tab.addEventListener('click', (event) => {
            for (let tab of tabs) {
                tab.classList.remove('tabs__item_active');
            }

            for (let childTabs of childrenTabs) {
                childTabs.classList.remove('tabs__link_active');
            }

            if (!event.currentTarget.classList.contains('tabs__item_active')) {
                event.currentTarget.classList.add('tabs__item_active');
                event.target.classList.add('tabs__link_active');
            }
        });
    }
}

activeTabs();

function showSubstrate() {
    document.querySelector('.catalog__item-more').addEventListener('click', (event) => {
        document.querySelector('.item-substrate').classList.add('item-substrate_active');
    });

    document.querySelector('.button-back').addEventListener('click', () => {
        document.querySelector('.item-substrate').classList.remove('item-substrate_active');
    })
}

showSubstrate();