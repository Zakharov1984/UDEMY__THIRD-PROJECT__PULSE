const linkUpElement = document.querySelector('.linkup');
function showUpElement() {
    window.addEventListener('scroll', event => {
        if (window.pageYOffset >= 629) {
            linkUpElement.classList.add('linkup_active');
        } else if (window.pageYOffset < 629) {
            linkUpElement.classList.remove('linkup_active');
        }
    })
}

showUpElement();