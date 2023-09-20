// FUNCION CONSTRUCTORA

function alumno( nombre , apellido , dni ){

    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;

}


let alumno_uno = new alumno( "Pepe" , "Lopez" , 32131233);
let alumno_dos = new alumno(  "Laura" , "Rojas" , 443212313);
let alumno_tres =  new alumno ( "Luis" , "LLaver" ,  43221321);
let alumno_cuatro = new alumno ("Juani" , "Joja" , 42356879);

console.log(alumno_uno );
console.log( alumno_dos );
console.log(alumno_tres );
console.log( alumno_cuatro );
