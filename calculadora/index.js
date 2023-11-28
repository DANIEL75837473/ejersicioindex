
function operacion(){
    let operacion = document.getElementById('operacion').value;
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById('operacion').value = '';


    if(operacion != ""){
        document.getElementById('operacion').classList.remove('is-invalid');
        document.getElementById('operacion').classList.add('is-valid');
    }else{
        document.getElementById('operacion').classList.remove('is-valid');
        document.getElementById('operacion').classList.add('is-invalid'); 
    }

    if(num1 != ""){
        document.getElementById('num1').classList.remove('is-invalid');
        document.getElementById('num1').classList.add('is-valid');
    }else{
        document.getElementById('num1').classList.remove('is-valid');
        document.getElementById('num1').classList.add('is-invalid'); 
    }

    if(num2 != ""){
        document.getElementById('num2').classList.remove('is-invalid');
        document.getElementById('num2').classList.add('is-valid');
    }else{
        document.getElementById('num2').classList.remove('is-valid');
        document.getElementById('num2').classList.add('is-invalid'); 
    }

    if(operacion == 'suma'){
        
    resultado = num1 + num2
    }
    if(operacion == 'resta'){
    resultado = num1 - num2
    }
    if(operacion == 'multi'){
     resultado = num1 * num2
    }
    if(operacion == 'divi'){
    resultado = num1 / num2
    }
    num1 = document.getElementById("num1").value = "";
    num2 = document.getElementById("num2").value = "";
    if(operacion !=''||num1 != ''||num2 != ''){
    document.getElementById("resultado").innerHTML = resultado;
    }
}