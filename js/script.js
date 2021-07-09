let elTogglerBtn = document.querySelector('.site-header__menu-toggler');
let elSiteHeader = document.querySelector('.site-header')
if (elTogglerBtn) {
    elTogglerBtn.addEventListener('click', function(evt){
        elSiteHeader.classList.toggle('site-header__open')
    })
}

let elMeetBtn = document.querySelectorAll('.meet__btn');
if (elMeetBtn.length>0) {
elMeetBtn.forEach( function(btn){
 btn.addEventListener('click', function(evt){
     evt.preventDefault();
     btn.parentElement.classList.toggle('meet__open-toggler')
     console.log('hf')
 })
})
}