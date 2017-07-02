'use strict';

$(document).ready(function () {
    $(window).scroll();
});

// Wyrzucamy definicję funkcji na zewnątrz jQuery
$(window).scroll(function () {
    changeMenu();
});

function changeMenu() {
    var navHeight = $('.navbar').height();
    var currentPosition = $(window).scrollTop();
    console.log(navHeight);
    console.log(currentPosition);
    if ($(window).scrollTop() > navHeight) {
        $('.navbar').addClass('klasa');
        $('#main-header nav').css({background-color: '#ffffff'});
        $('.navbar').css({transition: 'all .5s'});
    } else {
        $('.navbar').removeClass('klasa');
    }
};