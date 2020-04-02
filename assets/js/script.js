// onload, show top page
$(document).ready(function () {
    $(document).scrollTop(0);
});

// unable scroll
$('html').css('overflow', 'hidden');


// able scroll setelah parallax selesai
setTimeout(() => {
    $('html').css('overflow', 'auto');
}, 4000);

// on load, show top display
$(window).on('beforeunload', function () {
    $(window).scrollTop(0);
});



// drop down navigation
const dropbtn = document.getElementById("drop-btn");

// saat button di click, toggle dropdown
dropbtn.addEventListener('click', function () {
    document.querySelector(".dropdown-content").classList.toggle("show");
});

// close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// akhir dropdown




// Parallax onload Body
$(window).on('load', function () {

    $('html, body').addClass('bAppear');

    setTimeout(() => {
        $('.jumbotron img').addClass('jAppear');
        $('article, footer, aside').addClass('Appear');
    }, 2000);

    setTimeout(() => {
        $('.jumbotron h1').addClass('jAppear');
        $('.jumbotron p').addClass('jAppear');

        $('.pKiri').addClass('pAppear');
        $('.pKanan').addClass('pAppear');
    }, 3000);
});



// Slow scroll
$('.page-scroll').click(function (e) {

    // ambil id tujuan
    let tujuan = $(this).attr('href');

    // ambil letak tujuan
    let letakTujuan = $(tujuan).offset();


    $('html, body').stop().animate({
        scrollTop: letakTujuan.top - 50
    }, 800);

    e.preventDefault();
});



// fitur ini dimatikan karena terlihat terlalu agresif

// // scroll jumbotron parallax
// $(window).scroll(function () {

//     let wScroll = $(this).scrollTop();


//     // jumbotron
//     $('h1').css({
//         'transform': 'translate(' + wScroll / 4.6 + '%,' + wScroll / 4 + '%)'
//     });

//     $('.jumbotron p').css({
//         'transform': 'translate(' + -wScroll / 5 + '%,' + wScroll / 4 + '%)'
//     });

//     $('.jumbotron img').css({
//         'transform': 'translate(0px, ' + wScroll / 3.5 + '%)'
//     });

// });



// following biodata aside on Desktop View from on Load
$(function () {

    let $sidebar = $(".container-biodata"),
        $window = $(window),
        offset = $sidebar.offset(),
        topPadding = 80;


    $window.scroll(function () {
        if ($window.scrollTop() > offset.top && $(window).width() > 960) {
            $sidebar.stop().animate({
                marginTop: $window.scrollTop() - offset.top + topPadding
            }, 650);
        } else {
            $sidebar.stop().animate({
                marginTop: 0
            });
        }
    });

});