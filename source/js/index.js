
//slider-main
var swiper = new Swiper('.slider-main', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    loop: true,
});