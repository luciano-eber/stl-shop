//factory
class Courtney{

    constructor(config){

        this.config = config;
        this.panel = $(this.config.panel);

        this.rwd($(window).width());

        $(window).resize( () => {

            this.rwd($(window).width());
        });
    }

    rwd(w){

        if (w >= this.config.startMedia && w < this.config.finalMedia ){

            let i = w - this.config.startMedia;
            this.define(i);

        } 

    }
    define(increment){
        let atual = this.config.basis + (0.00855 * increment);
        console.log(atual);
        this.panel.css('font-size',`${atual}px`);
    }

}