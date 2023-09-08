//getElementByID

let titulo = document.getElementById("tituloPrincipal");
titulo.className = "parrafoRojo";

console.log( titulo );
console.log( titulo.innerText );

titulo.innerText = "Texto generado desde JS";



//getElementsByClassName
let parrafos = document.getElementsByClassName("parrafo");


console.log( parrafos );
console.log( parrafos[1]);
console.log( parrafos[3].innerText )


//getElementsByTagName

let li = document.getElementsByTagName("li");

console.log(li);

for(let elemento of li){
    console.log(elemento);
}




let contenedor = document.getElementById("contenedor");


/*
contenedor.innerHTML = "<p>Parrafo generado desde JS</p>";
contenedor.innerHTML = "<p>OTRO PARRAFO CREADO DESDE JS</p>";

*/

//createElement

let parrafo_js = document.createElement("p");

parrafo_js.innerText = "Parrafo creado 100% desde JS";
parrafo_js.className = "parrafoRojo";
parrafo_js.style.textAlign = "center";

console.log(parrafo_js);



//APPEND -> METODO DEL PADRE
contenedor.append( parrafo_js );