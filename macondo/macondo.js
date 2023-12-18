var salario = 2500000;
function comprar() {
    //caso 1
    let compra = document.getElementById("opcion").value;
    if (compra == 1) {

        document.getElementById("evento").innerHTML = "le caerá mal porque lleva mucho en el stand";
        salario -= 15000;
        document.getElementById("saldo").innerHTML = salario;
    } else {
        (compra == 2); {

            document.getElementById("evento").innerHTML = "estará llenito y bien";
            salario -= 23000;
            document.getElementById("saldo").innerHTML = salario;

        }
    }
    if (compra != 1 && compra != 2) {
        document.getElementById("evento").innerHTML = "tienes que comprar algo en macondo";
        document.getElementById("saldo").innerHTML = salario;
    }
}

//caso 2

//maleta
function maleta() {
    console.log("llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de mano, la aerolínea tiene el tamaño normal para las maletas de mano, 55 cm (alto) x 40 cm (largo) x 20 cm (ancho), y Hildebrando que va a abordar tiene una maleta de 60 cm (alto) x 40 cm (largo)x 20x cm")

    let alto_permitido = 55;
    let largo_permitido = 40;
    let ancho_permitido = 20;


    let alto_original = document.getElementById('valor1').value;
    let largo_original = document.getElementById('valor2').value;
    let ancho_original = document.getElementById('valor3').value;

    let resultado1 = alto_permitido / alto_original;
    let resultado2 = largo_permitido / largo_original;
    let resultado3 = ancho_permitido / ancho_original;

    if (resultado1 >= 1 && resultado2 >= 1 && resultado3 >= 1) {
        document.getElementById("malet").innerText="su maleta cumple con todos los requisitos asi que puedes viajar"+" "+"pude continuar";
    } else {
        document.getElementById("malet").innerText="tu equipage no cumple con los requisitos para viajar"+" "+"porfavor ingresa los valores validos";
    }
}

// punto 3

function binarioAcaracter(binario) {
    return binario.split('_').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

function convertir() {
    let binario = document.getElementById("binario").value;
    let resultado = binarioAcaracter(binario);
    salario -= 50000
    document.getElementById("resultado").innerHTML = resultado, 'tusala salario es :', salario;


}

// punto 4

function ingresa_remplaza_valor() {
    imput = prompt("coloca el valor con el que va  a rremplazar las bocales del texto")
    let texto = "Taxi me puede llevar al hotel mariposas amarillas";
    let letras = ["a", "e", "o", "u", "i"];
    letras.forEach(letras => {
        texto = texto.replaceAll(letras, imput);
        document.getElementById("cambio").innerText = texto;
    });

}

// punto 5
function jugar(eleccionUsuario) {
    var eleccionDELtaxista = Math.random();
    if (eleccionDELtaxista < 0.34) {
        eleccionDELtaxista = "piedra";
    } else if (eleccionDELtaxista <= 0.67) {
        eleccionDELtaxista = "papel";
    } else {
        eleccionDELtaxista = "tijera";
    }

    var resultado = 'Empate';
    if (eleccionUsuario === "piedra") {
        if (eleccionDELtaxista === "tijera") {
            resultado = 'Ganaste';
        } else if (eleccionDELtaxista === "papel") {
            resultado = 'Perdiste';
            salario -= 300000
        }
    }
    if (eleccionUsuario === "papel") {
        if (eleccionDELtaxista === "piedra") {
            resultado = 'Ganaste';
        } else if (eleccionDELtaxista === "tijera") {
            resultado = 'Perdiste';
            salario -= 300000
        }
    }
    if (eleccionUsuario === "tijera") {
        if (eleccionDELtaxista === "papel") {
            resultado = 'Ganaste';
        } else if (eleccionDELtaxista === "piedra") {
            resultado = 'Perdiste';
            salario -= 300000
        }
    }

    document.getElementById('resultado1').innerHTML = "Tu elección es :  " + eleccionUsuario + ". Elección del taxista: " + eleccionDELtaxista + ". " + resultado + "!" + salario;
}


// punto 6

let dias = 0;
let vivo = true;
function episodio6() {


    while (vivo && dias < 4) {
        dias++;
        switch (dias) {
            case 1: // Amarillo - Piscina
                let seMete = confirm("¿Quieres meterte en la piscina?");

                if (seMete) {
                    alert("Te ahogas por demasiado cloro. Terminan las vacaciones.");
                    vivo = false;
                }
                break;
            case 2: // Verde - Caminata
                let caminataCompleta = confirm("¿Quieres hacer toda la caminata?");
                if (caminataCompleta) {
                    alert("Llegas a una hermosa cascada y te tomas fotos.");
                    salario -= 10; // Supongamos que gastas 10 unidades de dinero en la caminata
                } else {
                    alert("Te pierdes en la noche. Terminan las vacaciones.");
                    vivo = false;
                }
                break;
            case 3: // Rojo - Playa
                let tomaCocteles = confirm("¿Quieres tomar cócteles?");
                if (tomaCocteles) {
                    alert("Sientes un fuerte dolor de cabeza y empiezas a perder la visión. Te tienes que devolver de emergencia. Terminan las vacaciones.");
                    vivo = false;
                } else {
                    alert("Juegas voleibol y la pasas genial.");
                    salario -= 20000;
                }
                break;
            case 4: // Azul - Hotel
                let apuestaCasino = confirm("¿Quieres apostar en el casino?");
                if (apuestaCasino) {
                    alert("Solo te quedas con pasaje de regreso. Terminan las vacaciones.");
                    dinero = 0;
                } else {
                    alert("Ganas el bingo y aumentas tu dinero.");
                    salario += 50000;
                }
                break;
        }
    }
}
function finalizar() {
    alert(`Estuviste en Macondo ${dias} días. ${vivo ? "Pudiste regresar." : "Moriste."} Gastaste ${salario} unidades de dinero.`);
}