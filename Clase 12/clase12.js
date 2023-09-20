
// let numero = 10;
//10

// numero = numero + 1;
//11

// numero++;//+1

//for( let i = 1 ; i < 10 ; i++)
//12
// numero--;//-1


// numero += 1
// numero += 10;
// numero *= 2;


// OPERADOR TERNARIO //


// condicion ? casoTrue : casoFalse

/*
if( 20 > 10 ){
    alert("Se cumple");
}
else{
    alert("No se cumple");
}
*/


//20 > 10 ? alert("Se cumple") : alert("No se cumple")


// let edad = 18;

// let puede_votar =  edad >= 18 ? true : false;

// puede_votar ? alert("Puede votar") : alert("No puede votar");




// OPERADORES LOGICOS // CUANDO QUIERO AGRUPAR O DESAGRUPAR CONDICIONES PARA ESO SE USA

//FALSY: NaN , null , 0 undefined , "" , false


// AND(Y) RETONAR EL PRIMER VALOR FALSY O EL ULTIMO VERDADERO
// console.log( 50 && 30 );
// console.log( 100 && false && "Jose");

// OR(O) RETORNA EL PRIMER VALOR VERDADERO O EL ULTIMO FALSY

// console.log( 100 || NaN || "Pepe");



//let edad_usuario = parseInt(prompt("Ingrese su edad")) || parseInt(prompt("Ingrese su edad")) || "No se puede cargar la edad del usuario";

//console.log("La edad del usuario es:" ,  edad_usuario);




 let usuario = document.getElementById("usuario") || {nombre:"Pepe", apellido:"Lopez"};

 console.log(usuario);




//Encadenamiento opcional ? No encadena la propiedad entonces no tira false


// let cliente = document.getElementById("cliente");

// console.log( cliente?.nombre || "No se encontro el usuario");


//DESESTRUCTURACION DE OBJ

// let clienteUno = {
//     nombre:"Juan",
//     apellido:"Rojas",
//     edad:30
// };

// let clienteDos = {
//     nombre:"Juan",
//     apellido:"Rojas",
//     edad:30
// };


/*
let nombreCliente = clienteUno.nombre;
let apellidoCliente = clienteUno.apellido;
let edadCliente = clienteUno.edad;
*/

// let { nombre , apellido , edad } = clienteUno;

// let { nombre:nomClienteDos , apellido:appellidoClienteDos , edad:edadClienteDos } = clienteDos;

// console.log(nombre);




// DESESTRUCTURACION DE ARREGLOS

// let listaAlumnos = ["Ramon" , "Laura" , "Pepe" , "Marcela"];


//let alumnoUno = listaAlumnos[0];
//let alumnoDos = listaAlumnos[1];

// let [ alumnoUno , alumnoDos ,  , alumnoCuatro  ] = listaAlumnos;

// console.log(alumnoCuatro);



// ...SPREAD

// let  otroArreglo = [];

// console.log( listaAlumnos );
// console.log( ...listaAlumnos );

// otroArreglo.push( ...listaAlumnos );

// console.log( otroArreglo );



// REST PARAM ...

// function saludarAlumnos( ...alumnos ){

//     console.log(alumnos);

//     for( let alumno of alumnos ){
//         console.log("Hola: ", alumno);
//     }
// }


// saludarAlumnos("Pedro" , "Laura");
// saludarAlumnos("Marcela" , "Julian" , "Roman", "Diego","Lautaro");

