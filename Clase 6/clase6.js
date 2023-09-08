//let listaAlumnos = [];ARREGLO VACIO

let listaAlumnos = ["Roman" , "Lucia" , "Marcos" , "Romina"];


console.log(listaAlumnos);

// OJO CON LA ASIGNACION DIRECTA //
//listaAlumnos = "Pedro";



// ACCESO A LOS VALORES //


console.log( listaAlumnos[0] );
console.log( listaAlumnos[3] );



let listaRandom = [ "Pedro" , 30 , true , 19 , "Marta" , ["Perro", "Gato" , "Raton"] , false , {nombre:"Marcos", apellido:"Lopez"} ];

console.log( listaRandom );
console.log( listaRandom[4] );//MARTA
console.log( listaRandom[6] );//FALSE
console.log( listaRandom[7] );//OBJ

console.log( listaRandom[5][2] );


console.log( listaRandom[7].nombre );

let usuario =  listaRandom[7];
console.log( usuario.nombre);

// ASIGNACION INDEXADA
listaRandom[1] = 55;

console.log( listaRandom );




// PROPIEADES DE LOS ARREGLOS //

console.log("Cantidad de elementos: ", listaRandom.length );