function oscuro(){
    var functio = document.getElementById('seleccion').value;
    if(functio != 1){
        document.getElementById('blanco').classList.remove('theme-light')
        document.getElementById('blanco').classList.add('oscuro')
    }else{
        document.getElementById('blanco').classList.remove('oscuro')
        document.getElementById('blanco').classList.add('theme-light')
    }
}

function idioma(){
    let idioma = document.getElementById("idioma").value;
    if(idioma == "es"){
       texto = [
            {
                titulo: 'BBQ CRUNCH',
                descripcion: '1 Sandwich BBQ Crunch (1 Filete de pollo apanado)'
            },

            {
                titulo: 'Kentucky Sandwich',
                descripcion: 'Kentucky hamburguesa / Sandwich ( 1 Filete de pechuga de pollo apanado, peinillos)'
            },

            {
                titulo: 'Combo BBQ Crunch',
                descripcion: '1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa pequeña + 1 Gaseosa PET..'
            },

            {
                titulo: 'Kentucky Coronel Sandwich',
                descripcion: '1 Kentucky Coronel hamburguesa / Sandwich ( 1 Filete de pechuga de pollo apanado, Ensalada,....)'
            },

            {
                titulo: 'Combo Kentucky Sandwich',
                descripcion: '1 Kentucky hamburguesa / Sandwich ( 1 Filete de pechuga de pollo apanado, peinillos,....)'
            },

            {
                titulo: 'Combo Kentucky Coronel Sandwich<',
                descripcion: '1 Kentucky Coronel hamburguesa / Sandwich ( 1 Filete de pechuga de pollo apanado, Ensalada,....)'
            },

            {
                titulo: 'Sandwich Crispy BBQ',
                descripcion: '1 Sandwich Crispy BBQ ( 1 Filete de pechuga extra grande, triple empanizado, Cebollas crisp...)'
            },

            {
                titulo: 'Combo Sandwich Crispy BBQ',
                descripcion: '1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado,cebollacrisp..)'
            }
        ]
    }else{
        texto = [
            {
                titulo: 'BBQ CRUNCH',
                descripcion: '1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet)'
            },

            {
                titulo: 'Kentucky Sandwich',
                descripcion: 'Kentucky Hamburger / Sandwich (1 Breaded chicken breast fillet, fettuccine,....)'
            },

            {
                titulo: 'BBQ Crunch Combo',
                descripcion: '1 BBQ Crunch Sandwich (1 Breaded chicken fillet) + 1 Small potato + 1 Soda PET...'
            },

            {
                titulo: 'Kentucky Coronel Sandwich',
                descripcion: '1 Kentucky Coronel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad,....)'
            },

            {
                titulo: 'Combo Kentucky Sandwich',
                descripcion: '1 Kentucky Burger / Sandwich (1 Breaded Chicken Breast Fillet, Pickles,....)'
            },

            {
                titulo: 'Combo Kentucky Coronel Sandwich<',
                descripcion: '1 Kentucky Coronel hamburguesa / Sandwich ( 1 Filete de pechuga de pollo apanado, Ensalada,....)'
            },

            {
                titulo: 'Crispy BBQ Sandwich',
                descripcion: '1 Crispy BBQ Sandwich ( 1 Extra Large Breast Fillet, Triple Breaded, Crispy Onions...)'
            },

            {
                titulo: 'Crispy BBQ Sandwich Combo',
                descripcion: '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, onions)'
            }
        ]
    }
    contador = 0;
    texto.forEach(function(vuelta){
        document.getElementById('titulo-'+contador).innerText = vuelta.titulo;
        document.getElementById('descripcion-'+contador).innerText = vuelta.descripcion;
        contador++;
    })
}