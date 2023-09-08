//VARIABLES//
let nombre_usario
let edad_usuario
let nota_usuario
const legajo_usuario = "khalil"



//TIPOS DE DATOS//

//STRING O CADENA DE CARACTERES//

nombre_usuario = "Pepe";

//INT O NUMERO ENTERO//

edad_usuario = 25;

//FLOAT O NUMERO DECIMAL//

nota_usuario = 8.5;

//CAMBIO DE VALOR//

nombre_usuario = "Luis";

//OPERADORES ARITMETICOS//

//SUMA +//

let num_uno = 30;
let num_dos = 40;
let suma;

suma = 60 + 20;  //80

suma = 100 + 50; //150

suma = num_uno + 50; //80

//RESTA -

let resta;

resta = 100 - 20; //80

resta = 50 - num_uno; //20

//MULTIPLICACION *

let multi;

multi = 10 * 2; //20

//DIVISION / 

div = 50 / 2; //25

let test;

//COERCION DE DATOS//

test = "Jose" + "50"; //Jose50
console.log( test );

//CONCATENAR +

let nombre = "Pedro"
let apellido = "Lopez"
let resultado

resultado = nombre + apellido; //PedroLopez

//I /O --- INPUT/OUTPUT

//SALIDA DE DATOS

//alert("Virus")
let valor ="holiiiiiiiiiiiiis"

console.log( "mensaje desde el console log" )
console.log (valor);

//ENTRADAS

// let nombre_alumno = prompt("Ingrese su nombre");

// console.log ( "Bienvenido al sistema: " , nombre_alumno );

//

let num_a = prompt("Ingrese su numero");
let num_b = prompt("Ingrese otro numero");

//PARSE O CASTEO

num_a = parseInt(num_a)
num_b = parseInt(num_b)


suma = num_a + num_b;

console.log("El resultado de la suma es:" , suma);