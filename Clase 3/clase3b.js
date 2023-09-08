/*
let nombre_usuario = prompt("Ingrese su nombre de usuario o FIN");


while( nombre_usuario != "FIN"){
    console.log("Bienvenido al sistema: ", nombre_usuario);
    nombre_usuario = prompt("Ingrese su nombre de usuario o FIN");

}
*/



//PIDO UN NUMERO POR TECLADO Y MUESTRO EL SIGUIENTE POR CONSOLA
//SE FINALIZA CUANDO SE INGRESE UN NUMERO NEGATIVO

/*
let numero = prompt("Ingrese un numero, se mostrara por consola el siguiente. Solo se aceptan positivos");

numero = parseInt(numero);

while( numero >= 0){
    console.log("Usted ingreso el numero: ", numero);
    console.log("El siguiente es: ", numero+1);

    //ACTUALIZO
    numero = prompt("Ingrese un numero, se mostrara por consola el siguiente. Solo se aceptan positivos");
    numero = parseInt(numero);
}
*/



let nombre_usuario = prompt("Ingrese su nombre");


do{
    if( nombre_usuario == "ERROR"){
        console.log("SE DETECTO UN ERROR EN LA CONSULTA");
    }
    else{
        console.log("Bienvenido/a al sistema");
        nombre_usuario = prompt("Ingrese su nombre");
    }


}
while( nombre_usuario != "ERROR")