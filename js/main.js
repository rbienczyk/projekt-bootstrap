$(document).ready(function() {
    addScrolledClass();
});

$(window).scroll(function() {
    addScrolledClass();
});

function addScrolledClass() {
    var navHeight = $('#main-nav').outerHeight();
    var actualPos = $(window).scrollTop();
    if(actualPos >= navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}