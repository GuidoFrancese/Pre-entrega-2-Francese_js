let carrito = [];

// Función para guardar el carrito en el localStorage
function guardarCarritoEnLocalStorage() {
    // Convierte el arreglo carrito a una cadena JSON
    let carritoJSON = JSON.stringify(carrito);
    
    // Guarda la cadena JSON en el localStorage con una clave específica (por ejemplo, "carrito")
    localStorage.setItem("carrito", carritoJSON);
}

// Función para cargar el carrito desde el localStorage
function cargarCarritoDesdeLocalStorage() {
    // Verifica si hay datos guardados en el localStorage con la clave "carrito"
    if (localStorage.getItem("carrito")) {
        // Obtiene la cadena JSON almacenada
        let carritoJSON = localStorage.getItem("carrito");
        
        // Convierte la cadena JSON de nuevo a un arreglo
        carrito = JSON.parse(carritoJSON);
        
        // Actualiza la vista del carrito con los datos cargados
        verCarrito();
    }
}

// Llama a la función para cargar el carrito cuando la página se carga
window.addEventListener("load", cargarCarritoDesdeLocalStorage);

// Agrega un event listener para guardar el carrito en el localStorage cada vez que se modifica
window.addEventListener("beforeunload", guardarCarritoEnLocalStorage);

// Función para agregar un producto al carrito
function agregarCarrito(e) {
    console.log("Producto agregado al carrito");

    let comprar = e.target;
    let cardbody = comprar.parentNode;
    let card = cardbody.parentNode;

    let nombreAccesorio = cardbody.querySelector("h5").innerText;
    let precioAccesorio = cardbody.querySelector("span").innerText;
    let imgAccesorio = card.querySelector("img").src;

    // Buscar si el accesorio ya existe en el carrito
    let accesorioExistente = carrito.find(item => item.nombre === nombreAccesorio);

    if (accesorioExistente) {
        // Si el accesorio ya existe, aumenta la cantidad en lugar de agregarlo nuevamente
        accesorioExistente.cantidad++;
    } else {
        // Si el accesorio no existe en el carrito, agrégalo
        let accesorio = {
            nombre: nombreAccesorio,
            precio: precioAccesorio,
            img: imgAccesorio,
            cantidad: 1
        };

        carrito.push(accesorio);
    }

    // Actualiza la vista del carrito
    verCarrito();
}

// Función para mostrar el contenido del carrito en la página
function verCarrito() {
    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for (let accesorio of carrito) {
        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${accesorio.img}"></td>
                          <td><p>${accesorio.nombre}</p></td>
                          <td>${accesorio.cantidad}</td>
                          <td>${accesorio.precio}</td>
                          <td><button class="btn btn-danger btnBorrarAccesorio">Borrar</button></td>`;
        tabla.append(fila);
    }

    // Agrega event listeners para borrar accesorios del carrito
    let btnBorrar = document.querySelectorAll(".btnBorrarAccesorio");
    for (let btn of btnBorrar) {
        btn.addEventListener("click", borrarAccesorio);
    }
}

// Función para borrar un accesorio del carrito
function borrarAccesorio(e) {
    e.target.parentNode.parentNode.remove();

    // Encuentra el índice del accesorio en el carrito
    let index = carrito.findIndex(item => item.nombre === e.target.parentNode.parentNode.querySelector("p").innerText);

    if (index !== -1) {
        // Reduce la cantidad o elimina el accesorio del carrito
        if (carrito[index].cantidad > 1) {
            carrito[index].cantidad--;
        } else {
            carrito.splice(index, 1);
        }

        // Actualiza la vista del carrito
        verCarrito();
    }
}

// Obtiene los botones de compra
let btnCompra = document.querySelectorAll(".botonCompra");

for (let boton of btnCompra) {
    boton.addEventListener("click", agregarCarrito);
}
