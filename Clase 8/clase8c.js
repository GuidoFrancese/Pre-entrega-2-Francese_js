//STRINGS//

// LENGTH //
let nombre_usuario = "Jose Ramon";
console.log("Cantidad de caracteres: ", nombre_usuario.length );



// toUpperCase

//let operacion = prompt("Ingrese suma o resta");

//operacion = operacion.toUpperCase();
//console.log(operacion);




/*
if( operacion == "SUMA"){



}
else if( operacion == "RESTA" ){


}
*/


//toLowerCase

//console.log( operacion.toLowerCase() );




// SLICE

let colores = "Rojo, Azul, Verde, Amarrillo";


let corte = colores.slice(6,10);

console.log(colores);
console.log("Corte: " , corte);




// REPLACE

let texto = "Los gatos son muy buenos. Mi gatos es el mejor del mundo";
let otro_texto = texto.replace("gatos" , "perros");
let otro_texto_dos = texto.replaceAll("gatos" , "perros");

console.log( texto  );
console.log( otro_texto );
console.log( otro_texto_dos );



// Trim 

let usuario = "                            Pepito                               ";
let usuario_clean = usuario.trim();


console.log(usuario);
console.log(usuario.length);

console.log(usuario_clean);
console.log(usuario_clean.length);



// SPLIT

let usuarios = "Laura,Lopez,321312313,LL23";

let lista_usuarios = usuarios.split(",");

console.log(lista_usuarios);