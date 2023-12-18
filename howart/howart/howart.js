let player1 = {
  nombre: "",
  edad: "",
  familia:"",
  linaje: "",
  casa: "",
  animalPatronus: "",

  cualidades:""
}
function editarObjeto() {
  var input = document.getElementById("nombre").value;
  var input1 = document.getElementById("edad").value;
  var input2 = document.getElementById("familia").value;
  var input3 = document.getElementById("unlinaje").value;
  var cualidad = document.getElementById("cualidad").value;
  player1.nombre = input;
  player1.edad = input1;
  player1.familia = input2;
  player1.linaje = input3;
  player1.cualidades = cualidad;

  console.log(player1);

}

let clases = {
  transformaciones: "Profesor Kevin Slughorn",
  herbologia: "Profesor Maria Umbridge",
  pociones: "Profesor Liliana McGonagall",
  encantamientos: "Profesora Jackie",
  defensaContraLasArtesOscuras: "Profesor Robinson Snape",
  animalesMagicos: "Profesor David Filch",
  historiaDeMagia: "Profesor Ronald Sprout"
};

function seleccionarCasa() {
  if (player1.cualidades.includes("Valor") && player1.cualidades.includes("fuerza") && player1.cualidades.includes("audacia")) {
    player1.casa = "Gryffindor";
    document.getElementById('casa').innerText = "tu casa es : " + player1.casa;
  } else if (player1.cualidades.includes("Justicia") && player1.cualidades.includes("Lealtad") && player1.cualidades.includes("Paciencia")) {
    player1.casa = "Hufflepuff";
    document.getElementById('casa').innerText = "tu casa es : " + player1.casa;
  } else if (player1.cualidades.includes("Creatividad") && player1.cualidades.includes("Erudición") && player1.cualidades.includes("Inteligencia")) {
    player1.casa = "Ravenclaw";
    document.getElementById('casa').innerText = "tu casa es : " + player1.casa;
  } else if (player1.cualidades.includes("Ambición") && player1.cualidades.includes("Determinación") && player1.cualidades.includes("Astucia")) {
    player1.casa = "Slytherin";
    document.getElementById('casa').innerText = "tu casa es : " + player1.casa;
  }
}

function patronus() {
  


let claseTransformaciones = {
  profesor: "Profesor Kevin Slughorn",
  horario: "8:00 AM",
  boggart: true,
  realizarTransformacionRiddikulus: function() {
      if (this.boggart) {
          this.boggart = false;
          return "¡Riddikulus!";
      }
  },
  enfrentarBoggart: function() {
      document.getElementById("original_del_boggart").innerText ="Forma original del boggart";
  }
};

let boggartEjemplo = {};
claseTransformaciones.enfrentarBoggart(boggartEjemplo);

// Paso 5
let defensaContraLasArtesOscuras = {
  profesor: "Profesor Robinson Snape",
  generarAnimalPatronus: function() {
      let animales = ["ciervo", "nutria", "zorro", "liebre","leon","dragon","anaconda"];
      player1.animalPatronus = animales[Math.floor(Math.random() * animales.length)];
  },
  enfrentarDementor: function() {
      if (player1.animalPatronus) {
         document.getElementById("dementor").innerText = "El dementor ha sido detenido por el patronus";
      } else {
        document.getElementById("dementor").innerText = "El estudiante será llevado a la enfermería";
      }
  }
};

defensaContraLasArtesOscuras.generarAnimalPatronus();
defensaContraLasArtesOscuras.enfrentarDementor();
document.getElementById("ultimoDato").innerHTML ="tu nombre es: "+ player1.nombre +"__"+"  "+"tu linaje es: "+ player1.linaje + "__"+"  "+"tu familia es :"+ player1.familia +"__"+"  "+"tu edad es :"+ player1.edad +"__"+"  "+"tus cualidades son : "+ player1.cualidades +"__"+"  "+"tu casa es : "+ player1.casa +"__"+"  "+"tu patronus es : "+ player1.animalPatronus;

}
 function fin_del_juego() {
  alert("fin del juego")
  
 }


