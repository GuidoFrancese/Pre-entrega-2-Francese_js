let listaAlumnos = ["Pepe" , "Ramiro" , "Laura"];


console.log("ARREGLO INCIAIL: ", listaAlumnos);


//PUSH

listaAlumnos.push("Marta" , "Ramon");

console.log("ARREGLO DESPUES DEL PUSH: ", listaAlumnos);


//UNSHIFT
listaAlumnos.unshift("Roman");
console.log("ARREGLO DESPUES DEL UNSHIFT: ", listaAlumnos);


//SHIFT
let resultado_shift = listaAlumnos.shift();
console.log("ARREGLO DESPUES DEL SHIFT: ", listaAlumnos);
console.log("SE ELIMINO A: ", resultado_shift);


//POP
listaAlumnos.pop();
console.log("ARREGLO DESPUES DEL POP: ", listaAlumnos);


//SPLICE 

listaAlumnos.splice(1,1);
console.log("ARREGLO DESPUES DEL SPLICE: ", listaAlumnos);


// JOIN

let resultado_join = listaAlumnos.join();
console.log("RESULTADO JOIN: ", resultado_join);


//CONCAT 

let listaColores = ["Azul" , "Rojo" , "Verde"];

let resultadoConcat = listaAlumnos.concat( listaColores );

console.log("RESULTADO CONCAT: ", resultadoConcat );


//SLICE//

let corte = resultadoConcat.slice(2,4);
console.log("RESULTADO DEL CORTE: ", corte);
console.log("ARREGLO DESPUES DEL SLICE: ", resultadoConcat);


//indexOf

console.log("El indice de Marta es: ", resultadoConcat.indexOf("Marta") );
console.log("El indice de Carlos es: ", resultadoConcat.indexOf("Carlos") );


let elemento_borrar =  resultadoConcat.indexOf("Marta");

resultadoConcat.splice(  elemento_borrar, 1 );
console.log("ARREGLO DESPUES DEL indexOf+Splice: ", resultadoConcat);


// REVERSE

resultadoConcat.reverse();
console.log("ARREGLO DESPUES DEL REVERSE: ", resultadoConcat);