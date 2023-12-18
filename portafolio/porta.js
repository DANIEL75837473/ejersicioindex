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