class Alumno{

    constructor(nombre,apellido,legajo){
        this.nombre = nombre;
        this.apellido= apellido;
        this.legajo=legajo;
    }

}

/*
let listaAlumnos = [];

for( let i = 0 ; i < 3 ; i = i + 1){

    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let legajo = prompt("Ingrese su legajo");

    let nuevo_alumno = new Alumno(nombre , apellido , legajo);

    listaAlumnos.push(nuevo_alumno);

}


console.log(listaAlumnos);


*/

let listaAlumnos = ["Pepe" , "Ramiro" , "Laura"];

for( let nombre_alumno of listaAlumnos ){

    console.log("Hola bienvenido/a:" , nombre_alumno);
}