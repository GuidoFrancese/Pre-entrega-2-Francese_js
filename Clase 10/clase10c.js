// document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a elementos HTML
    // const productoInput = document.getElementById("producto");
    // const agregarButton = document.getElementById("agregar");
    // const lista = document.getElementById("lista");

    // Agregar un evento click al botón "Enviar"
    // agregarButton.addEventListener("click", function() {
        // Obtener el valor del input de producto
        // const producto = productoInput.value;

        // Verificar que el valor no esté vacío
        // if (producto.trim() !== "") {
            // Crear un nuevo elemento de lista (li) y agregar el producto
            // const listItem = document.createElement("li");
            // listItem.textContent = producto;

            // Agregar el elemento de lista a la lista de compras
            // lista.appendChild(listItem);

            // Limpiar el input de producto
//             productoInput.value = "";
//         }
//     });
// });

//DOMContentLoaded: Esto es un evento que se dispara cuando el documento HTML se ha cargado completamente. Se utiliza para asegurarse de que el código JavaScript se ejecute una vez que todos los elementos HTML estén disponibles para su manipulación.
//Obtención de referencias a elementos HTML: Se obtienen referencias a los elementos HTML con los que vamos a trabajar. Esto se hace utilizando el método getElementById, que busca un elemento por su ID y devuelve una referencia a él.
//Agregar un evento click al botón "Enviar": Se agrega un evento click al botón "Enviar" que se activará cuando el usuario haga clic en él.
//Obtener el valor del input de producto: Se obtiene el valor que el usuario ha ingresado en el campo de entrada de texto con el ID "producto" utilizando productoInput.value.
//Verificar si el valor no está vacío: Se verifica que el valor ingresado por el usuario no esté vacío o que solo contenga espacios en blanco utilizando producto.trim() !== "".
//Crear un nuevo elemento de lista (li) y agregar el producto: Si el valor no está vacío, se crea un nuevo elemento de lista (li) utilizando document.createElement("li") y se establece su contenido de texto como el producto ingresado por el usuario.
//Agregar el elemento de lista a la lista de compras: Se agrega el nuevo elemento de lista a la lista desordenada (ul) con el ID "lista" utilizando lista.appendChild(listItem).
//Limpiar el input de producto: Se restablece el valor del campo de entrada de texto a una cadena vacía para que el usuario pueda ingresar un nuevo producto.

document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a elementos HTML
    const productoInput = document.getElementById("producto");
    const agregarButton = document.getElementById("agregar");

    // Crear un arreglo para almacenar los productos
    const carrito = [];

    // Agregar un evento click al botón "Enviar"
    agregarButton.addEventListener("click", function() {
        // Obtener el valor del input de producto
        const producto = productoInput.value;

        // Verificar que el valor no esté vacío
        if (producto.trim() !== "") {
            // Agregar el producto al arreglo carrito
            carrito.push(producto);

            // Limpiar el input de producto
            productoInput.value = "";

            // Mostrar el carrito en la consola
            console.log("Carrito:", carrito);
        }
    });
});













