
class MenuContent{

    constructor(config){

        //(mobile e full)
        this.wrappers = config.wrappers;
        //estrutura do menu
        this.options = config.options;
        //imprimindo opções na tela
        this.print();
    }

    print(){

        //percorrendo diferentes tipos de menu(wrap)
        $.map(this.wrappers, (wrap) => {
            //listando
            this.listItens(wrap);
        });
        
    }
    
    listItens(wrap){
        
        $.map(this.options, (option) => {
            console.log(option);
        });
    }
    template(option){
        return `
            <li class="nav-item">
                <a class="nav-item-a center-center-s" href="">
                    New In
                </a>
                <ul class="nav-item-drop">
                    <li class="nav-item-drop-item">
                        <a href="">Ver Tudo</a>
                    </li>
                </ul>
            </li>
        `;
    }
}

let options = [
    {
        name: 'New In',
        headers: ['Ver Tudo'],
        drops: ['Acessórios','Roupas','Sapatos','SHS: Catharina Dieterich','Silver Lake Vibes','Best Sellers','Courtney Would Love']
    },
    {
        name: 'Roupas',
        headers:['Ver Tudo'],
        drops:['Blusas','Calças','Casacos','Lingerie','Macacões','Saias','Shorts','Vestidos','Kimonos']
    },
    {
        name: 'Sapatos',
        headers:['Ver Tudo'],
        drops:['Flats','Tênis','Saltos','Botas']
    },
    {
        name: 'Acessórios',
        headers:['Ver Tudo'],
        drops:['Aníes','Bolsas','Boinas','Brincos','Cintos','Chaveiros','Colares','Golas','Lenços','Meias','Óculos','Pingentes','Pulseiras','Tiaras']
    },
    {
        name: 'Vintage',
        headers:['Ver Tudo'],
        drops:['Roupas','Acessórios','Sapatos']
    },
    {
        name: 'Beachwear',
        dropdown: false,
    },
    {
        name: 'Marcas',
        headers:['Ver Tudo'],
        drops:['Akomb','Baw','Calê','Cobé','Curated by love','Dipua','Due Panno','Higher','Inbox','Luisa Meirelles','Revampp','Rue','Sallon 33','Sri','The Vintage Shop',' Twins']
    },
    {
        name: 'Sale',
        footers:['Ver Tudo'],
        drops:['Roupas','Beleza','Acessórios']
    },
];

let configMenuContent = {
    wrappers: ['.m-menu-mobile','.nav-menu-full'],
    options: options,
}