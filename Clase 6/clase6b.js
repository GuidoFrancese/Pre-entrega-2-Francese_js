let listaAlumnos = ["Pepe" , "Ramiro" , "Laura"];


console.log("ARREGLO INICIAL: ", listaAlumnos);


//PUSH

listaAlumnos.push("Marta" , "Ramon");

console.log("ARREGLO DESPUES DEL PUSH: ", listaAlumnos);//AGREGA ELEMENTOS EN LA ULTIMA POSICION//


//UNSHIFT
listaAlumnos.unshift("Roman");
console.log("ARREGLO DESPUES DEL UNSHIFT: ", listaAlumnos);//AGREGA ELEMENTOS EN LA PRIMERA POSICION


//SHIFT
let resultado_shift = listaAlumnos.shift();
console.log("ARREGLO DESPUES DEL SHIFT: ", listaAlumnos);//ELIMINA EL PRIMER ELEMENTO
console.log("SE ELIMINO A: ", resultado_shift);


//POP
listaAlumnos.pop();
console.log("ARREGLO DESPUES DEL POP: ", listaAlumnos);//ELIMINA EL ULTIMO ELEMENTO


//SPLICE 

listaAlumnos.splice(1,2);
console.log("ARREGLO DESPUES DEL SPLICE: ", listaAlumnos);//ELIMINA DE MANERA SELECTIVA, ME PARO EN UN ELEMENTO Y A PARTIR DE AHI ELIMNO CUANTOS QUIERO


// JOIN

let resultado_join = listaAlumnos.join();
console.log("RESULTADO JOIN: ", resultado_join);


//CONCAT 

let listaColores = ["Azul" , "Rojo" , "Verde"];

let resultadoConcat = listaAlumnos.concat( listaColores );

console.log("RESULTADO CONCAT: ", resultadoConcat ); //conacteta o une dos elemnetos, en este caso colores y alumnos


//SLICE//

let corte = resultadoConcat.slice(2,4);
console.log("RESULTADO DEL CORTE: ", corte);
console.log("ARREGLO DESPUES DEL SLICE: ", resultadoConcat);//me permite cortar el arreglo  y usar ese corte sin alterarlo


//indexOf

console.log("El indice de Marta es: ", resultadoConcat.indexOf("Marta") );//me permite obtener la ñoscion de un elemento
console.log("El indice de Carlos es: ", resultadoConcat.indexOf("Carlos") );


let elemento_borrar =  resultadoConcat.indexOf("Marta");

resultadoConcat.splice(  elemento_borrar, 1 );
console.log("ARREGLO DESPUES DEL indexOf+Splice: ", resultadoConcat);


// REVERSE

resultadoConcat.reverse();
console.log("ARREGLO DESPUES DEL REVERSE: ", resultadoConcat);//Da vuelta el orden de los elementos