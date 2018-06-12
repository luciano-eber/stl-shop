const marcas = [
    "img/brands/brand-abi-property.jpg",
    "img/brands/brand-akb.jpg",
    "img/brands/brand-debora.jpg",
    "img/brands/brand-dick-swimwear.jpg",
    "img/brands/brand-due-panno.jpg",
    "img/brands/brand-fashfinds.jpg",
    "img/brands/brand-luisa-meireless.jpg",
    "img/brands/brand-oh-studio.jpg",
    "img/brands/brand-quiero.jpg",
    "img/brands/brand-saloon-33.jpg",
    "img/brands/brand-salty.jpg",
    "img/brands/brand-vinci.png",
];

class ListaMarcas{

    constructor(config){

        this.wrap = $(config.wrap);
        this.marcas = config.marcas;

        $.map(this.marcas, (marca) => { 

            this.wrap.append(this.template(marca));
        });
    }

    template(marca){
        return `
            <div class="swiper-slide border-hover">
                <a href="">
                    <img src="${marca}" class="brand-img">
                </a>
            </div>
        `;
    }

}

let marcasConfig = {
    wrap: '.brands .swiper-wrapper',
    marcas: marcas
};