

const contenedor_Productos = document.getElementById("contenedor-productos");
const totalCompra = document.getElementById("total-pagar");


let carrito = []


document.addEventListener("DOMContentLoaded" , function(){

    //MOSTRAR NUESTROS PRODUCTOS
    mostrar_productos();

})

function mostrar_productos(){

    fetch("../productos.json")
    .then(response => response.json())
    .then(data =>  {
        console.log(data) 

        data.forEach((producto) => {
            

            const div = document.createElement("div");
            div.classList.add('producto');
            div.innerHTML = `<img class="imagen_producto" src= ${producto.img} alt=''> 
            <h3>${producto.name}</h3>
            <p> Talle : ${producto.talle} </p>
            <p class= "precio-producto"> Precio : $ ${producto.precio}</p>
            <input id="cantidad_${producto.name}" type="number" min="1" max="5" placeholder="cant">
            <button id="agregar${producto.id}" type="submit"> Agregar al carrito </button>`
            


            
            
            contenedor_Productos.appendChild(div)

            //EVENTO AGREGAR AL CARRITO
            
            const boton_agregarCarrito = document.getElementById(`agregar${producto.id}`);
           boton_agregarCarrito.addEventListener('click', () => {

                agregarCarrito(producto)
            })

  
        });
    }
)}

const agregarCarrito = (producto) => {
    fetch("../productos.json")
    .then(response => response.json())
    .then(data =>  {
        const cantidad_de_producto = document.getElementById(`cantidad_${producto.name}`);
        if(cantidad_de_producto.value === ""){
            Swal.fire({
                icon: 'warning',
                text: 'Debes ingresar la cantidad',
                
              })
            return
        }
  
        const producto_seleccionado = data.find(function
            (producto_a_encontrar){ 

              
             
                return producto.id == producto_a_encontrar.id


           })

           console.log(document.getElementById(`cantidad_${producto_seleccionado.name}`))
           producto_seleccionado.cantidad = document.getElementById(`cantidad_${producto_seleccionado.name}`).value;
           
           carrito.push(producto_seleccionado)
          
           console.clear();

           actualizarcarrito()
            console.log(carrito)
        })
} ;

function actualizarcarrito(){

    contenedor_carrito.innerHTML= "";
    
    carrito.forEach((prod) => {
        const div = document.createElement('div');
    
        div.innerHTML = `
        <img class="img_carrito" src= ${prod.img} alt="">
        <p>${prod.name}</p>
        <p>Precio: $ ${prod.precio}</p>
        <p> Talle : ${prod.talle} </p>
        <p>Cantidad : ${prod.cantidad} </p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="boton-eliminar"> ELIMINAR </button>`

        contenedor_carrito.appendChild(div)




    })
    
       
}

const botonComprar = document.getElementById("lista-carrito-comprar")

//EVENTO COMPRAR
botonComprar.addEventListener('click', () => {
    const total = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0)

    console.log(total);
    const totalaPagar = document.createElement("div");
    totalaPagar.innerHTML = `
    <p> El total a pagar es $ ${total}`;
    totalaPagar.style.color = "blue";
    totalaPagar.style.fontSize = "30px";
    totalaPagar.style.fontFamily = "sans-serif";
    
    totalCompra.appendChild(totalaPagar);


    
})

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);

    actualizarcarrito()
}