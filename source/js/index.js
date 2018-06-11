//WINDOW
$(window).load(function(){});

//DOM
$(document).ready(function(){

	$.when(myAPI()).done(externalAPI);

});

//API MANUAL
function myAPI(){

	let panelCourtney = new Courtney(courtneyConfigs);
	let produtosView = new ListaProdutos(produtosConfig);
	let listaMarcas = new ListaMarcas(marcasConfig);
}

//API EXTERNA
function externalAPI(){

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
		spaceBetween: 20,
		breakpoints:{
			992:{
				slidesPerView: 4
			},
			1200:{
				slidesPerView: 5
			}
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
	});
	
	//best-sellers
	var shopTheLook = new Swiper('.best-sellers', {
		slidesPerView: 4,
		spaceBetween: 15,
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: 30
			},
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
}