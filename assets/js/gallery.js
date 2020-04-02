// membuat interaksi

const container = document.querySelector('.container');
// const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');


container.addEventListener('click', function (event) {
    if (event.target.className == 'thumb') {

        event.target.parentElement.previousElementSibling.previousElementSibling.src = event.target.src;
        event.target.parentElement.previousElementSibling.previousElementSibling.classList.add('fade');

        setTimeout(function () {
            event.target.parentElement.previousElementSibling.previousElementSibling.classList.remove('fade');

        }, 500);

        thumbs.forEach(function (thumb) {
            if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            }
            // thumb.className = 'thumb' ;
        });
        event.target.classList.add('active');

    }
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

// load blink
$(window).on('load', function () {

    $('html, body').addClass('bAppear');
});