/*
let nombreUsuario = document.getElementById("nombreUsuario");

console.log( nombreUsuario );
console.log( nombreUsuario.value );




nombreUsuario.value = "Pepe desde JS";

*/


function saludar(){
    let nombreUsuario = document.getElementById("nombreUsuario");
    console.log("HOLA: ", nombreUsuario.value );
}


function validar(){
    let nombreUsuario = document.getElementById("nombreUsuario");
    let msj = document.getElementById("mensaje")



    if( nombreUsuario.value == "Pepe"){

        let parrafo = document.createElement("p");
        parrafo.innerText = "Bienvenido al sistema "+ nombreUsuario.value;
        parrafo.style.fontSize = "24px";
        msj.append(parrafo);


    }
    else{
        
        document.body.innerHTML = `<h2>ERROR DE USUARIO</h2>
                                   <p class="parrafoRojo">El usuario ${nombreUsuario.value} no se encontro</p>
                                   <a href="clase9b.html">Volver</a>`;

    }


}