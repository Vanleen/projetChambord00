$(function () {
    // init AOS

    AOS.init();

    // nav menu

    let pX = $('nav button');
    let nav = $('nav');
    let menuBtn = $('.menu-btn');
    let menuNav = $(".menu-nav");
    let sousMenu = $(".sous-menu");

    sousMenu.hide();

    menuNav.on('click', function () {
        sousMenu.not($(this).children(".sous-menu")).hide();
        $(this).children(".sous-menu").slideToggle(500);
    });
    menuBtn.on('click', function () {
        nav.css('transform', 'translateX(0%)');
        nav.css('transition', '.8s ease');
    });
    pX.on('click', function () {
        nav.css('transform', 'translateX(-100%)');
        nav.css('transition', '.8s ease');
    });

    // video event

    let videoEvent1 = $('#videoEventOne');
    let btnVideo1 = $('#videoOne');
    let btnTitle1 = $('#titleOne');
    let videoEvent2 = $('#videoEventTwo');
    let btnVideo2 = $('#videoTwo');
    let btnTitle2 = $('#titleTwo');
    let videoEvent3 = $('#videoEventThree');
    let btnVideo3 = $('#videoThree');
    let btnTitle3 = $('#titleThree');

    videoEvent1.css('transform', 'translateY(-100vh)');
    videoEvent1.css('opacity', '0');
    videoEvent2.css('transform', 'translateY(-100vh)');
    videoEvent2.css('opacity', '0');
    videoEvent3.css('transform', 'translateY(-100vh)');
    videoEvent3.css('opacity', '0');

    btnTitle1.on('click', () => {
        videoEvent1.css('transition', '1s ease-in-out');
        videoEvent1.css('opacity', '1');
        videoEvent1.css('transform', 'translateY(0)');
    });
    btnTitle2.on('click', () => {
        videoEvent2.css('transition', '1s ease-in-out');
        videoEvent2.css('opacity', '1');
        videoEvent2.css('transform', 'translateY(0)');
    });
    btnTitle3.on('click', () => {
        videoEvent3.css('transition', '1s ease-in-out');
        videoEvent3.css('opacity', '1');
        videoEvent3.css('transform', 'translateY(0)');
    });

    btnVideo1.on('click', () => {
        videoEvent1.css('transition', '1s ease-in-out');
        videoEvent1.css('transform', 'translateY(-100vh)');
        videoEvent1.css('opacity', '0');
    });
    btnVideo2.on('click', () => {
        videoEvent2.css('transition', '1s ease-in-out');
        videoEvent2.css('transform', 'translateY(-100vh)');
        videoEvent2.css('opacity', '0');
    });
    btnVideo3.on('click', () => {
        videoEvent3.css('transition', '1s ease-in-out');
        videoEvent3.css('transform', 'translateY(-100vh)');
        videoEvent3.css('opacity', '0');
    });

    // imgSlideChambre

    $('.imgDiapo2').slice(0).hide();
    $('.imgDiapo2:first').show();
    setInterval(function () {
        $('.imgDiapo2:first').fadeOut(4000).next('.imgDiapo2').fadeIn(4000).end().appendTo('#blocImage');
    }, 4000);





















});////////////////////////