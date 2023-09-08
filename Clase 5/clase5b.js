// FUNCION CONSTRUCTORA

function alumno( nombre , apellido , dni ){

    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;

}


let alumno_uno = new alumno( "Pepe" , "Lopez" , 32131233);
let alumno_dos = new alumno(  "Laura" , "Rojas" , 443212313);

console.log(alumno_uno );
console.log( alumno_dos );