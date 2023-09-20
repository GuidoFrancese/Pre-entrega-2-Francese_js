

// function saludar_usuario( nombre_usuario ){

    
//     console.log("Bienvenido/a: ", nombre_usuario);

// }



// saludar_usuario("Pepe");
// saludar_usuario("Laura");
//LLAMAR FUNCTION//
// let nombre = Marcos;
// saludar_usuario(nombre);




//CREAR UNA FUNCION LLAMADA: mayorDeEdad
//LA MISMA SE ENCARGA DE INFORMAR SI EL USUARIO ES MAYOR DE EDAD O NO
//Param: edad(int)



// function mayorDeEdad( edad_usuario ){

//     if( edad_usuario >= 18 ){
//         console.log("ES MAYOR DE EDAD");
//     }
//     else{
//         console.log("NO ES MAYOR DE EDAD");
//     }

// }




// mayorDeEdad(10);
// mayorDeEdad(20);
// mayorDeEdad(55);
// mayorDeEdad(2);





//CREAR UNA FUNCION LLAMADA sumaDosNumeros
//La misma se encarga de realizar la suma de ambos numeros
//Params: numUno , numDos


// function sumaDosNumeros( numUno , numDos ){

//     if( typeof(numUno) == "number" && typeof(numDos) == "number" ){
//         let suma = numUno + numDos;
//         console.log("El resultado de la suma es: ", suma);
//     }
//     else{
//         console.log("Solo se aceptan numeros");
//     }
    

// }




// sumaDosNumeros(30,40);
// sumaDosNumeros(100,50);
// sumaDosNumeros(80,29);
// sumaDosNumeros("Jose" , "Pedro");

function restaDosNumeros(numuno, numdos) {
    if (typeof(numuno) === "number" && typeof(numdos) === "number") {
        let resta = numuno - numdos;
        console.log("El resultado de la resta es:", resta);
    } 
    else {
        console.log("Solo se aceptan números");
    }
}

restaDosNumeros(100, 90);
restaDosNumeros(37482, 5637);
restaDosNumeros(100020, 6672);
restaDosNumeros("Raul", "Enrique");






