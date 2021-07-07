let elTogglerBtn = document.querySelector('.site-header__menu-toggler');
let elSiteHeader = document.querySelector('.site-header')
if (elTogglerBtn) {
    elTogglerBtn.addEventListener('click', function(evt){
        elSiteHeader.classList.toggle('site-header__open')
    })
    
}