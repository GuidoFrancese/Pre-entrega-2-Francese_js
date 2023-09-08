let carrito = [
    {nombre:"Cocina" , precio:20000},
    {nombre:"Silla" , precio:10000},
    {nombre:"Mate" , precio:4000},
    {nombre:"Teclado" , precio:6000},
    {nombre:"Mouse" , precio:14000},
    {nombre:"Lampara" , precio:8000}
]


function calcular_total( acu , producto ){

    acu = acu + producto.precio;
    return acu
}



let vental_total = carrito.reduce( calcular_total , 0);
console.log("Total de la compra: ", vental_total);




// SORT

let lista_alumnos = ["Romina" , "Pepe" , "Laura" , "Ana" , "Julian" , "Blanca" , "Carlos"];

console.log( lista_alumnos );
console.log( lista_alumnos.sort() );


function ordenar( a , b ){

    return a - b
}



let lista_numeros = [  3, 1 ,23 , 10 , 99 ,100 , 230];
let resultado_sort = lista_numeros.sort( ordenar );

console.log( lista_numeros );
console.log( resultado_sort );