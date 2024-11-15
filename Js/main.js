// Menu 
let navbar = document.querySelector('.navbar');
let menu = document.querySelector('.menu-icon');
menu.onclick = () => {
    menu.classList.toggle('move')
    navbar.classList.toggle('open-menu')
}

// Close Menu On Scroll
window.onscroll = () => {
    menu.classList.remove('move')
    navbar.classList.remove('open-menu')
}

// Scroll Reveal
const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
});

animate.reveal('.home-text', {origin: 'left'});
animate.reveal('.home-img', {origin: 'bottom'});
animate.reveal('.heading,.newsletter h2', {origin: 'top'});
animate.reveal('header,.feature-box,.feature-menu-box,.item-box,.m-item-box,t-box,.newsletter form', {interval: 100})