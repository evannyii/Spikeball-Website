const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-actiove');
    menuLinks.classList.toggle('active');
});
