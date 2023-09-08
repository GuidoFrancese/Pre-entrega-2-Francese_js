/*

function saludar_usuario( nombre_usuario ){

    
    console.log("Bienvenido/a: ", nombre_usuario);

}








//LLAMAR FUNCTION
let nombre = "Marcos";
saludar_usuario(nombre);

saludar_usuario("Pepe");
saludar_usuario("Laura");

*/



//CREAR UNA FUNCION LLAMADA: mayorDeEdad
//LA MISMA SE ENCARGA DE INFORMAR SI EL USUARIO ES MAYOR DE EDAD O NO
//Param: edad(int)


/*
function mayorDeEdad( edad_usuario ){

    if( edad_usuario >= 18 ){
        console.log("ES MAYOR DE EDAD");
    }
    else{
        console.log("NO ES MAYOR DE EDAD");
    }

}




mayorDeEdad(10);
mayorDeEdad(20);
mayorDeEdad(55);
mayorDeEdad(2);

*/



//CREAR UNA FUNCION LLAMADA sumaDosNumeros
//La misma se encarga de realizar la suma de ambos numeros
//Params: numUno , numDos


function sumaDosNumeros( numUno , numDos ){

    if( typeof(numUno) == "number" && typeof(numDos) == "number" ){
        let suma = numUno + numDos;
        console.log("El resultado de la suma es: ", suma);
    }
    else{
        console.log("Solo se aceptan numeros");
    }
    

}




sumaDosNumeros(30,40);
sumaDosNumeros(100,50);
sumaDosNumeros(80,29);
sumaDosNumeros("Jose" , "Pedro");



