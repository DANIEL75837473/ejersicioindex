
var palabras = [
    { palabra: "elefante", pista: "Es el mamífero terrestre más grande que existe" },
    { palabra: "girafa", pista: "Es el animal más alto del mundo" },
    { palabra: "hipopotamo", pista: "Es un gran mamífero herbívoro que vive en África" },
    { palabra: "leopardo", pista: "Es un felino conocido por sus manchas llamadas rosetas" },
    { palabra: "rinoceronte", pista: "Es conocido por tener uno o dos cuernos en la cabeza" },
    { palabra: "Árbol", pista: "Es verde y se decora con luces y adornos." },
    { palabra: "Regalo", pista: "Se envuelve en papel y se coloca debajo del árbol." },
    { palabra: "Papa Noel", pista: "Reparte regalos en la noche de Navidad." },
    { palabra: "Reno", pista: "Animal que ayuda a Papa Noel a repartir los regalos." },
    { palabra: "Nieve", pista: "Cae del cielo en invierno y es blanca." },
    { palabra: "Campana", pista: "Se toca para anunciar la llegada de la Navidad." },
    { palabra: "Estrella", pista: "Se coloca en la cima del árbol." },
    { palabra: "Villancico", pista: "Canción que se canta en Navidad." },
    { palabra: "Belén", pista: "Representación del nacimiento de Jesús." },
    { palabra: "Nochebuena", pista: "Noche del 24 de diciembre." },
    { palabra: "Navidad", pista: "Día festivo que se celebra el 25 de diciembre." },
    { palabra: "Año Nuevo", pista: "Celebración del primer día del año." },
    { palabra: "Muérdago", pista: "Planta que se cuelga y bajo la cual se besa a alguien." },
    { palabra: "Trineo", pista: "Vehículo que usa Papa Noel para repartir los regalos." },
    { palabra: "Chimenea", pista: "Lugar por donde Papa Noel entra a la casa." },
    { palabra: "Galleta", pista: "Alimento que se deja para Papa Noel." },
    { palabra: "Calcetín", pista: "Se cuelga y se llena de regalos." },
    { palabra: "Luces", pista: "Se usan para decorar el árbol y la casa." },
    { palabra: "Esfera", pista: "Adorno redondo que se cuelga del árbol." },
    { palabra: "Pavo", pista: "Comida tradicional de la cena de Navidad." },
    { palabra: "Piñata", pista: "Se rompe durante las posadas." },
    { palabra: "Posada", pista: "Celebración mexicana previa a la Navidad." },
    { palabra: "Rosca", pista: "Pan que se come en el Día de Reyes." },
    { palabra: "Reyes Magos", pista: "Traen regalos el 6 de enero." },
    { palabra: "Invierno", pista: "Estación del año en la que se celebra la Navidad." },
    { palabra: "Nacimiento", pista: "Representación del nacimiento de Jesús." },
    { palabra: "Pastores", pista: "Personajes del belén que visitan a Jesús." },
    { palabra: "Virgen María", pista: "Madre de Jesús." },
    { palabra: "José", pista: "Padre de Jesús." },
    { palabra: "Jesús", pista: "Niño que nace en el belén." },
    { palabra: "Ángel", pista: "Mensajero de Dios." },
    { palabra: "Establo", pista: "Lugar donde nace Jesús." },
    { palabra: "Oro", pista: "Regalo de uno de los Reyes Magos." },
    { palabra: "Incienso", pista: "Regalo de uno de los Reyes Magos." },
    { palabra: "Mirra", pista: "Regalo de uno de los Reyes Magos." },
    { palabra: "Feliz", pista: "Sentimiento que se desea en estas fechas." },
    { palabra: "Familia", pista: "Personas con las que se suele celebrar la Navidad." },
    { palabra: "Amor", pista: "Sentimiento que se comparte en Navidad." },
    { palabra: "Paz", pista: "Deseo común para estas fechas." },
    { palabra: "Dulces", pista: "Se suelen comer durante la Navidad." },
    { palabra: "Chocolate", pista: "Bebida caliente que se toma en Navidad." },
    { palabra: "Turrón", pista: "Dulce típico de la Navidad en España." },
    { palabra: "Mazapán", pista: "Dulce hecho de almendras y azúcar." },
    { palabra: "Polvorón", pista: "Dulce que se deshace en la boca." },
    { palabra: "Cava", pista: "Bebida que se toma para brindar." },
    { palabra: "Brindis", pista: "Se hace para celebrar la llegada del Año Nuevo." },
    { palabra: "Uvas", pista: "Se comen doce al sonar las campanadas de Año Nuevo." },
    { palabra: "Deseos", pista: "Se piden al comenzar el Año Nuevo." },
    { palabra: "Carta", pista: "Se escribe a Papa Noel o a los Reyes Magos." },
    { palabra: "Juguetes", pista: "Regalos que se suelen dar a los niños." }
];  
var muñeco = ["  O  ", " /|\\ ", " / \\ "];
var palabraObj;
var palabra;
var vidas;
var palabra_adivinada;

function iniciarJuego() {
    palabraObj = palabras[Math.floor(Math.random() * palabras.length)];
    palabra = palabraObj.palabra;
    vidas = 6;
    palabra_adivinada = Array(palabra.length).fill("_");
    document.getElementById("pista").innerHTML = "";
    mostrarEstado();
}

function mostrarEstado() {
    document.getElementById("muñeco").innerHTML = muñeco.slice(0, 6 - vidas).join("<br>");
    document.getElementById("palabra").innerHTML = palabra_adivinada.join(" ");
    document.getElementById("vidas").innerHTML = "Vidas restantes: " + vidas;
}

function adivinar() {
    var letra = document.getElementById("letra").value;

    if (palabra.includes(letra)) {
        for (var i = 0; i < palabra.length; i++) {
            if (palabra[i] === letra) {
                palabra_adivinada[i] = letra;
            }
        }
    } else {
        vidas--;
    }

    if (!palabra_adivinada.includes("_")) {
        alert("¡Felicidades! Has adivinado la palabra: " + palabra + ".");
    } else if (vidas === 0) {
        alert("Lo siento, has perdido todas tus vidas. La palabra era " + palabra + ".");
    }

    mostrarEstado();
    document.getElementById("letra").value = "";
}

function darPista() {
    document.getElementById("pista").innerHTML = "Pista: " + palabraObj.pista;
}

function reiniciar() {
    iniciarJuego();
}

iniciarJuego();
