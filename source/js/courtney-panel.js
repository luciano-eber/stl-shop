//configurações
let config = {
    panel: '.courtney',
    basis: 6.2
};

class Courtney{

    constructor(panel,basis){
        this._panel = $(panel);
        this._basis = basis;
    }

    resizeFont(){
        this.panel.css('font-size',`${this.basis}px`);
    }

    _calcSize(){

    }

    get panel(){
        return this._panel;
    }

    get basis(){
        return this._basis;
    }
}

let panelCourtney = new Courtney(config.panel, config.basis);