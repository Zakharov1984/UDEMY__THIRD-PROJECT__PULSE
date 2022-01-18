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
    let catalogItemMoreElements = document.querySelectorAll('.catalog__item-more');
    let buttonBackElements = document.querySelectorAll('.button-back');
    for (let catalogItemMoreElement of catalogItemMoreElements) {
        catalogItemMoreElement.addEventListener('click', (event) => {
            event.target.parentNode.classList.add('catalog__item-supmenu_disable');
        });
    }
    
    for (let buttonBackElement of buttonBackElements) {
        buttonBackElement.addEventListener('click', (event) => {
            event.target.parentNode.classList.add('item-substrate_disable')
        })
    }
}

showSubstrate();

function showContent() {
    let tabs = document.querySelectorAll('.tabs__item');
    let catalogBoxes = document.querySelectorAll('.catalog__box');
    for (let tab of tabs) {
        tab.addEventListener('click', (event) => {
            if (event.currentTarget.id == 'fitness') {
                for (let catalogBox of catalogBoxes) {
                    catalogBox.classList.remove('catalog__box_active');
                }
                document.querySelector("[data-utensils='fitness']").classList.add('catalog__box_active');
            } else if (event.currentTarget.id == 'run') {
                for (let catalogBox of catalogBoxes) {
                    catalogBox.classList.remove('catalog__box_active');
                }
                document.querySelector("[data-utensils='run']").classList.add('catalog__box_active');
            } else if (event.currentTarget.id == 'triathlon') {
                for (let catalogBox of catalogBoxes) {
                    catalogBox.classList.remove('catalog__box_active');
                }
                document.querySelector("[data-utensils='triathlon']").classList.add('catalog__box_active');
            }
        })
    }
}

showContent();