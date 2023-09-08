// FOR //

/*
for( let i = 0 ; i < 10 ; i = i + 1 ){

    console.log("Mensaje desde el bucle FOR");
    console.log("Estamos en la vuelta: ",  i );
    
}
*/


//Se ingresar 5 usuarios por teclados,ir dando la bienvenida a cada uno
/*
for( let i = 0 ; i < 5 ; i = i + 1){

    let nombreUsuario = prompt("Ingrese su nombre");
    console.log("Bienvenido/a: ", nombreUsuario);

}
*/



//MOSTRA POR CONSOLA LOS NUMEROS DESDE EL 0 AL 50

/*
for( let i = 0 ; i < 51 ; i = i + 1){

    console.log(i);
}
*/



//SE PEDI UN NUMERO POR TECLADO Y SE MUESTRA LA TABLA DEL MISMO

/*
let numero_usuario = prompt("Ingrese un numero y le muestro la tabla del mismo");

numero_usuario = parseInt(numero_usuario);


for( let i = 0 ; i <= 10 ; i = i + 1){

    let resultado = numero_usuario * i;
    console.log(numero_usuario , " x " , i , " = " ,  resultado );
}

*/


let usuario_registrado = "Pepe";
let intentos = 1;


for( let i = 0 ; i < 5 ; i = i + 1){

    let nombreUsuario = prompt("Ingrese su nombre");

    if( nombreUsuario != usuario_registrado && intentos < 3 ){
        console.log("DATOS INCORRECTOS");
        intentos = intentos + 1;
        continue;
    }

    if( intentos == 4 && nombreUsuario != "Pepe"){
        console.log("CHAU TARJETA");
        break;
    }

   
    console.log("Bienvenido/a: ", nombreUsuario);  
      
   

    

}