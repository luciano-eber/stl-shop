
class ListaProdutos{

    constructor(config){

        this.wrap = $(config.wrap);

        $.map(produtos, (produto) => {

            this.wrap.append(this.template(produto));
        });
    }

    template(produto){

        let hoverTemplate;
        let preco;

        if( produto.imgHover ){

            hoverTemplate = `
                <p class="text">Comprar</p>
                <img class="preview-img-hover" src="${produto.imgHover}">
            `;

        } else {
            hoverTemplate = `<p class="text">Comprar</p>`;
        }

        if( produto.desconto ){

            preco = `
                <p class="preco descontado number">
                    R$ ${this.numeroPtexto(produto.preco)}
                </p>
                <p class="preco desconto number">
                    R$ ${this.numeroPtexto(produto.desconto)}
                </p>
            `;

        } else {
            preco = `<p>R$ ${this.numeroPtexto(produto.preco)}</p>`;
        }

        return `
            <div class="swiper-slide center-center-s product flex-col-s order-${produto.order}-s">

                <figure class="preview">
                    <a href="" class="preview-a center-center-s flex-col-s">
                        <img class="preview-img" src="${produto.img}">
                        <figcaption class="preview-capt center-center-s flex-col-s">
                            ${hoverTemplate}
                        </figcaption>
                    </a>
                </figure>

                <article class="infos center-center-s flex-col-s">
                    <p class="categoria">${produto.categoria}</p>
                    <p class="nome">${produto.nome}</p>
                    <div class="rating-wrap center-around-s">
                        <ul class="rating">
                            <li class="rate-star">
                                ${this.rating(produto.rating)}
                            </li>
                        </ul>
                        <span class="votes number">
                            (${produto.votes})
                        </span>
                    </div>
                    <div class="preco number center-around-s">
                        ${preco}
                    </div>
                    <p class="parcelas">
                        ou ${produto.parcelas}x de R$ ${this.totalParcela(produto.preco, produto.parcelas)}
                    </p>
                </article>
            </div>
        `
    }

    numeroPtexto(val){
        return val.toFixed(2).replace('.',',');
    }

    totalParcela(preco, parcela){
        let total = preco / parcela
        return this.numeroPtexto(total);
    }

    rating(rate){
        if( rate <= 0 ){
            return `
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            `
        }
        if ( rate > 0 && rate <= 10 ){
            return `
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            `
        }
        if( rate > 10 && rate <= 20 ){
            return `
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            `
        }
        if( rate > 20 && rate <= 40 ){
            return `
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
            `
        }
        if( rate > 40 && rate <= 60 ){
            return `
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
            `
        }
        if( rate > 60 && rate <= 80 ){
            return `
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
                <i class="fa fa-star-o"></i>
            `
        }
        if( rate > 80 && rate < 99 ){
            return `
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star-half-o"></i>
            `
        }
        if( rate >= 99 ){
            return `
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
            `
        }
    }

}

let produtosConfig = {
    wrap: '.best-sellers .swiper-wrapper'
}