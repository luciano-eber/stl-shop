//WINDOW
$(window).load(function(){});

//DOM
$(document).ready(function(){

	//api interna antes pois código depende desta ordem de leitura
	$.when(myAPI()).done(externalAPI);

});

//API MANUAL
function myAPI(){

	//configuração passada no parâmetro por padrão fica no mesmo arquivo que o objeto
	let panelCourtney = new Courtney(courtneyConfigs);
	let produtosView = new ListaProdutos(produtosConfig);
	let listaMarcas = new ListaMarcas(marcasConfig);
	let menuContent = new MenuContent(configMenuContent);
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