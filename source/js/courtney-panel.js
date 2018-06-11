//factory
class Courtney{

    constructor(config){

        this.config = config;
        this.panel = $(this.config.panel);
        this.transition = 'font-size 0.2s ease 0.1s';

        this.rwd($(window).width());

        $(window).resize( () => {

            this.rwd($(window).width());
        });
    }

    rwd(w){

        let bks = this.config.breakpoints;

        $.map( bks , (bk) => {

            console.log(w);
            if( w >= bk.min && w < bk.max && w < (this.config.limitMedia - 1) ){
                
                let i = w - this.config.startMedia;
                this.define(bk.base, i);

            } else if( w >= this.config.limitMedia ){
                
                this.panel.css({
                    'font-size':'10.2555px',
                    'transition': this.transition
                });
            }
            
        });

    }
    define(base,multiplicador){
        let atual = this.config.basis + (base * multiplicador);
        console.log(atual);
        this.panel.css({
            'font-size':`${atual}px`,
            'transition': this.transition
        });
    }
}

let courtneyConfigs = {
    panel: '.courtney',
    basis: 6,
    startMedia: 769,
    limitMedia: 1580,
    
    breakpoints: {
        1: {
            base: 0.00955,
            min: 769,
            max: 1200
        },
        2: {
            base: 0.00755,
            min: 1200,
            max: 1500
        },
        3: {
            base: 0.00700,
            min: 1500,
            max: 1579
        }
    }
}