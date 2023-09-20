let carrito = [];

function agregarCarrito(e){

    //console.log("Producto agregado al carrito", e.target); e.traget sirve para saber donde sucede el evento, en que nodo esta pasando.

    let hijo = e.target;//nodohijo //el evento sucede en el boton, que seria el hijo
    let padre = hijo.parentNode;//nodopadre //traeme al padre(cardbody) del hijo(boton)
    let abuelo = padre.parentNode;//nodoabuelo //traeme al padre (divcard) del padre(cardbody)


    /*
    console.log(hijo);
    console.log(padre);
    console.log(abuelo);
    */
    let nombreProducto = padre.querySelector("h5").innerText;//selecciono el nombre del producto que quiero traer //inerttext solo te trae el texto
    //console.log(nombreProducto);

    let precioProducto =  padre.querySelector("span").innerText;
    //console.log(precioProducto);

    let imgProducto = abuelo.querySelector("img").src;//selecciono solo la imagen
    //console.log(imgProducto);
 //todo lo anterior para saber cual es el prodcuto que se agrega al carrito

    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        img:imgProducto,
        cantidad:1
    }; //Este es el producto que se quiere agregar al carrito

    carrito.push(producto); //practicar agregar find

    mostrarCarrito();
}

function mostrarCarrito(){

    let tabla = document.getElementById("tbody");//referencia a la tabla osea al padre, donde se insertara el elemnto

    tabla.innerHTML = ""; //para que se vacie el carrito y no repita las cosas

    for( let producto of carrito ){ //para cada producto que yo tenga agregado al carrito vpoy a ir dando un a vuelta
   
        let fila = document.createElement("tr"); //creae una fila de tabla
        fila.innerHTML = `<td><img src="${producto.img}"></td>
                          <td><p>${producto.nombre}</p></td>
                          <td>${producto.cantidad}</td>
                          <td>${producto.precio}</td>
                          <td><button class="btn btn-danger btnBorrarProducto">Borrar</button></td>`;//btndanger para que salga en rojo es de bootsrap
        tabla.append(fila); //append sirva para agregar el nodo al dom.
    }


    let btnBorrar = document.querySelectorAll(".btnBorrarProducto");//capturo todos los botones con la clase btnborrarproducto
   
    for( let btn of btnBorrar){//patra cada boton de btnborrar
        btn.addEventListener("click" , borrarProducto );//cunado se esciuche clivk llamamos a la funcion de borrar producto
    }

}

function borrarProducto(e){
    console.log("BORRAR ESTE ELEMENTO: ", e.target );//(e) + e.target muestro donde se borra cada uno de los elemntos

    let abuelo = e.target.parentNode.parentNode; //e.target.hijo.padre
    
    abuelo.remove(); //remove remueve el nodo donde sucedio el evento
}




// EVENTOS 

let btnCompra = document.querySelectorAll(".botonCompra");//capturo todos (all) los elementos con la class botoncomprar del html.

console.log(btnCompra);//los muestro en la consola

//lo que queda arriba es un arreglo entionces para recorrerlo hacemos un for

for( let boton of btnCompra ){

    boton.addEventListener("click" , agregarCarrito);
} //para cada boton de btncompra le voy a dar un evento que es cuando escuche el click lo agregue al carrito.

//el for los recorre como un arreglo. 0, 1, 2, 3,4,5. 