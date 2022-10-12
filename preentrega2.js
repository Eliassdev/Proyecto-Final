
// Declaro variables del formulario de Ingreso y capturo los ID

let form_ingreso = document.getElementById("form_ingreso");
let ingreso_usuarios = document.getElementById("ingreso_usuarios");
let ingreso_password = document.getElementById("ingreso_password");

let error = document.getElementById("error")
let usuarios = localStorage.getItem("usuarios");
if(usuarios == null){

    usuarios = [
        {
            nombre: "admin",
            contraseña: "123"
        } 
    ]


}
// PARSEO EL JSON PARA DESCONVERTIRLO 
else{    
    usuarios = JSON.parse(usuarios);
    console.log(usuarios);

}
    






//EVENTO FORMULARIO DE INGRESO

form_ingreso.addEventListener("submit" , (e) => {
    
    e.preventDefault();
    console.log(usuarios.toString());
    
    for(let user of usuarios){ 

        console.log("entre al for");

        if(ingreso_usuarios.value === user.usuario && ingreso_password.value === user.contraseña){
            
            window.location.href = "./pages/proyectofinal.html";
        }
        else{
        
            Swal.fire({
            
                icon: "error",
                title: "ERROR",
                text: "El usuario es incorrecto",
                footer:"Para ingresar debe <a href='./pages/registrarte.html'> Registrarse </a>"
            
            });
            
        }
        
    }
    }
);