/*
let edad_usuario = 10;



if( edad_usuario >= 18 ){
    console.log("Bienvenido/a el sistema de compra")
}

*/ //si la condicion (>=18) hago algo sino no hago nada.




let nombre_usuario = prompt("Ingrese su nombre");
let nivel_edu = prompt("Ingrese el nivel: Primaria | Jardin");
let edad_usuario = prompt("Ingrese su edad");

edad_usuario = parseInt(edad_usuario);


if( nivel_edu == "Jardin" && edad_usuario <= 6 ){
    console.log("Bienvenido/a al panel de usuarios de Jardin: ", nombre_usuario);
}
else if( nivel_edu == "Primaria" || nivel_edu == "primaria"){
    console.log("Bienvenido/a al panel de usuarios de Primaria: ", nombre_usuario);
}
else{
    console.log("Opcion incorrecta");
};





// OPERADORES LOGICOS//


// AND ------ Y ------ && //