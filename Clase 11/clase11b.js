let arrClientes = [{nombre:"Pedro" , apellido:"Rojas"}, {nombre:"Luis" , apellido:"Perez"},{nombre:"Marta" , apellido:"Sanchez"}];

let clientesJson = JSON.stringify( arrClientes );

console.log( arrClientes );
console.log( clientesJson );


localStorage.setItem("clientes" , clientesJson );


// RECUPERAMOS LOS DATOS

let recuperandoCliente = localStorage.getItem("clientes");

console.log( recuperandoCliente );


let clienteParseado = JSON.parse( recuperandoCliente );

console.log( clienteParseado );