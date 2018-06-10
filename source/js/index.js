
//slider-main
var sliderMain = new Swiper('.slider-main', {
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

//marcas em destaque
var brands = new Swiper('.brands', {
    slidesPerView: 6,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
    loop: true,
});

//shop-the-look
var shopTheLook = new Swiper('.shop-the-look', {
	slidesPerView: 3,
	spaceBetween: 15,
	breakpoints: {
		992: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
	},
	loop: true,
});