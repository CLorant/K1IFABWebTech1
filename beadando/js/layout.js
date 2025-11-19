$(function(){
    $("#header").load("./components/header.html"); 
    $("#footer").load("./components/footer.html"); 
});

window.addEventListener('resize', () => {
    document.documentElement.style.setProperty('--viewHeight', `${window.innerHeight * 0.01}px`);
});

function toggleSideNav() {
    $('#menu-toggle').toggleClass('active');
    $('#side-nav').toggleClass('show');
    $('#dark-mobile-bg').toggleClass('show');
    $('body').toggleClass('overflow-hidden');
}