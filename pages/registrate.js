//Capturo los id de los nodos y declaro variables

let form_registro = document.getElementById("form_registro");
let nombre = document.getElementById("nombre");
let registro_usuarios = document.getElementById("registro_usuarios");
let registro_password = document.getElementById("registro_password");
let edad = document.getElementById("edad");


// DECLARO UN ARRAYS
let usuarios = []

//Creo un Objeto
class Usuario{
        constructor(usuario, contraseña){
            this.usuario = usuario;
            this.contraseña = contraseña;

        }
}


//EVENTO FORMULARIO DE REGISTRO

form_registro.addEventListener("submit" , (e) => {
    e.preventDefault();

    //APLICLO OPERADOR AND PARA QUE SI UNA DE LAS DOS CONDICIONES NO SE CUMPLE QUE SEA LO PRIMERO QUE RETORNE = FALSE
    
    if(registro_usuarios.value != "" && registro_password.value != ""){

    
        let nuevoUsuario = new Usuario (registro_usuarios.value , registro_password.value); 
        usuarios.push(nuevoUsuario);

        let arreglo_JSON = JSON.stringify(usuarios);
        localStorage.setItem("usuarios" , arreglo_JSON);
    
         //UTILIZO OPERADOR TERNARIO PARA VALIDAR LA EDAD DEL USUARIO
         //CONVIERTO CON PARSEINT AL VALOR DE LA VARIABLE EDAD A VALOR NUMERICO

        let puede_ingresar = parseInt(edad.value) >= 18 ? "ingresa" : "no ingresa";



        puede_ingresar == "ingresa" ?             Swal.fire({
            
            icon: "succes",
            title: "Registro Exitoso",
            footer:"Ir al inicio para : <a href='../preentrega2.html'> Ingresar </a>"
        
        }) : Swal.fire({

            icon: "warning",
            title: "Debe ser mayor de edad ",
            
            
            
            

        })
          
    }
    });
    