//MATH

console.log( Math.PI );
console.log( Math.E );//EULER



//RANDOM 
console.log( Math.random() * 10);



let lista_numeros = [  3, 1 ,23 , 10 , 99 ,100 , 230];


//MIN

console.log("El valor menor es: " , Math.min( lista_numeros ) );
console.log("El valor menor es: " , Math.min(  3, 1 ,23 , 10 , 99 ,100 , 230 ) );

//MAX
console.log("El valor mayor es: " , Math.max(  3, 1 ,23 , 10 , 99 ,100 , 230 ) );


//SPREAD 
console.log(lista_numeros);
console.log(...lista_numeros);


//MIN + SPREAD
console.log("El valor menor es: " , Math.min( ...lista_numeros ) );


//CEIL//

console.log("CEIL : " , Math.ceil(3.3));

//FLOOR//
console.log("FLOOR: ", Math.floor(4.7));

//ROUND//
console.log("ROUND: ", Math.round(4.5));




// DATE

let fecha_hoy = new Date();
let dia = fecha_hoy.getDate();
let mes = fecha_hoy.getMonth()+1;
let anio = fecha_hoy.getFullYear();


console.log(fecha_hoy);
console.log( dia );
console.log( mes );
console.log( anio );


