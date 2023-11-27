var allPersons = [];

function guardarPersona() {
    let formNombre = document.getElementById('nombres').value;
    let formApellido = document.getElementById('apellidos').value;
    let formCorreo = document.getElementById('correo').value;

    let persona = {
        nombre: formNombre,
        apellido: formApellido,
        correo: formCorreo,
    }

    if(formNombre&&formApellido&&formCorreo != ''){
        var datos_defilas = "<tr><td>" + formNombre + "</td><td>" + formApellido + "</td><td>" + formCorreo + "</td><td>" + '<button onclick="Eliminarr()" type="button" id="Eliminar" class="btn btn-danger">Eliminar</button>';
        document.getElementById('tabla').innerHTML += datos_defilas;
    }

    if (formNombre != "") {
        document.getElementById('nombres').classList.add('is-valid');
        document.getElementById('nombres').classList.remove('is-invalid');
    } else {
        document.getElementById('nombres').classList.remove('is-valid');
        document.getElementById('nombres').classList.add('is-invalid');
    }

    if (formApellido != "") {
        document.getElementById('apellidos').classList.add('is-valid');
        document.getElementById('apellidos').classList.remove('is-invalid');
    } else {
        document.getElementById('apellidos').classList.remove('is-valid');
        document.getElementById('apellidos').classList.add('is-invalid');
    }

    if (formCorreo != "") {
        document.getElementById('correo').classList.add('is-valid');
        document.getElementById('correo').classList.remove('is-invalid');
    } else {
        document.getElementById('correo').classList.remove('is-valid');
        document.getElementById('correo').classList.add('is-invalid');
    }
    if(formNombre != ""|| formApellido != ""|| formCorreo!= ""){
      document.getElementById("formulario").reset();  
    }
        

}