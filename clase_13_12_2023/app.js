var usuarios =[
    {
    nombre: "daniel",
    correo:"daniel@gmail.com",
    contraseña: "contraseña"
},

    {
    nombre: "cual",   
    correo: "cual@gmail.com",
    contraseña: "esta"
},

    {
    nombre: "hola",    
    correo: "hola@gmail.com",
    contraseña: "hola"
}

]; 

function iniciar(){
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    
    usuarios.forEach((usuario)=>{
        var valor = usuario;    
        if(correo == valor.correo && password == valor.contraseña){
            sessionStorage.setItem("nombre",usuario.nombre)
            sessionStorage.setItem('auth',1)
            window.location.href = "scn.html"
        }  
    });     
}