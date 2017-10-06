'use strict';

// Wyrzucamy definicję funkcji na zewnątrz jQuery
$(document).ready(function () {
    $(window).scroll();

    $('#scroll-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });
});

// Wyrzucamy definicję funkcji na zewnątrz jQuery
$(window).scroll(function () {
    changeMenu();
    scrollToTop();
});

var root = $('html, body');
$('a[href^="#"]').click(function (e) {
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
        //$('#myNavbar ul').css({"backgroundColor": "rgba(0, 0, 0, 0.6)"});
        $('.navbar').css({transition: 'all .5s'});        
    } else {
        $('.navbar').removeClass('menu-class');
        //$('#myNavbar ul').css({"backgroundColor": "rgba(0, 0, 0, 0)"});
    }
};

function scrollToTop() {
    if ($(window).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#scroll-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#scroll-to-top').fadeOut(200); // Else fade out the arrow
    }
};
