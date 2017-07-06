'use strict';

$(document).ready(function () {
    $(window).scroll();
});

// Wyrzucamy definicję funkcji na zewnątrz jQuery
$(window).scroll(function () {
    changeMenu();
});

var root = $('html, body');
$('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var href = $(this).attr('href');
    root.animate({
        scrollTop: $(href).offset().top - 50
    }, 500);
});

function changeMenu() {
    var navHeight = $('.navbar').height();
    var currentPosition = $(window).scrollTop();
    
    if ($(window).scrollTop() > navHeight) {
        $('.navbar').addClass('menu-class');
        $('.navbar').css({transition: 'all .5s'});
    } else {
        $('.navbar').removeClass('menu-class');
    }
};