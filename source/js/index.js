
//slider-main
var swiper = new Swiper('.slider-main', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4500,
      disableOnInteraction: true,
    },
    loop: true,
});