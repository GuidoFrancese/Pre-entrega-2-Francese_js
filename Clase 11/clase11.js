// STORAGE

// LOCALSTORAGE


// setItem

localStorage.setItem("nombre_usuario", "Laura"); //Primero la llave, al lado lo que contiene esa llave.
localStorage.setItem("edad_usuario", 28);//se usan para almacenar, no se ven.
localStorage.setItem("materias", ["Lengua" , "Fisica" , "Quimica"]);



// getItem(key)

let nombre_usuario = localStorage.getItem("nombre_usuario");//aca lo vemos en la consoloa, para verlo hay que traerlos con una veriable.
let edad_usuario = localStorage.getItem("edad_usuario");
let materias = localStorage.getItem("materias");


console.log(nombre_usuario);
console.log(edad_usuario);
console.log(materias);

//TIPOS DE DATOS

console.log( typeof edad_usuario );// typeoff te dice que tipo de dato es lo q estas poniendo(string, booleano, entero, etc)
console.log( typeof materias );



// SESSIONSTORAGE


//sessionStorage.setItem("nombre_usuario_dos" , "Marcos");





//REMOVEITEM
//localStorage.removeItem("materias"); Borra lo que pusiste.

//CLEAR
//localStorage.clear(); Elimina todo



console.log( localStorage.length );

for( let i = 0 ; i < localStorage.length ; i = i + 1 ){

    let clave = localStorage.key(i);//i es lo mismo que decir 0, 1 ,2, para que no se repita
    console.log(`La key es: ${clave}`);
    console.log("El valor es: ", localStorage.getItem(clave));

}



let arrClientes = {nombre:"Pedro" , apellido:"Rojas"};//no se puede guardar objetos o arreglo de objetos

localStorage.setItem("clientes" , arrClientes);


console.log( localStorage.getItem("clientes") );
