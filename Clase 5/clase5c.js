//CLASES//


class Alumno_coder{

    constructor( nombre , apellido , dni){
        //PROPIEDADES
        this.nombre = nombre;     
        this.apellido = apellido;
        this.dni = dni;
        this.nota_uno = 0;
        this.nota_dos = 0;
    }

    //METODOS 

    saludar(){
        console.log("Hola buenas noches, mi nombre es: " , this.nombre);
    }


    get_datos(){
        console.log("<---- DATOS ALUMNO/A ---->");
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("DNI: ", this.dni);
        console.log("");
    }

    get_notas(){
        console.log("<--- NOTAS DEL ALUMNO/A ---->");
        console.log("Nombre: ", this.nombre);
        console.log("Nota uno: ", this.nota_uno);
        console.log("Nota dos: ", this.nota_dos);
        console.log("");     

    }


    set_nota_uno( nota ){
        if( nota > 0 && nota <= 10){

            this.nota_uno = nota;
        }

    }


    set_nota_dos( nota ){
        if( nota > 0 && nota <= 10){

            this.nota_dos = nota;
        }

    }


}




let alumno_uno = new Alumno_coder("Jose", "Lopez" , 31231323);
let alumno_dos = new Alumno_coder("Laura" , "Romero" , 65552313);

//console.log(alumno_uno);
//console.log("Nombre: ", alumno_uno.nombre );


//MUESTRO LOS DATOS
alumno_uno.get_datos();
alumno_dos.get_datos();


//MUESTRO LA NOTAS
alumno_uno.get_notas();
alumno_dos.get_notas();

//SALUDAN
alumno_uno.saludar();
alumno_dos.saludar();



//PRIMER PARCIAL
//alumno_uno.nota_uno = 10;
//alumno_dos.nota_uno = 11;

alumno_uno.set_nota_uno(10);
alumno_dos.set_nota_uno(8);


//MUESTRO LA NOTAS DESPUES DEL PARCIAL 
alumno_uno.get_notas();
alumno_dos.get_notas();



//SEGUNDO PARCIAL
//alumno_uno.nota_uno = 10;
//alumno_dos.nota_uno = 11;

alumno_uno.set_nota_dos(7);
alumno_dos.set_nota_dos(9);


//MUESTRO LA NOTAS DESPUES DEL PARCIAL 
alumno_uno.get_notas();
alumno_dos.get_notas();





