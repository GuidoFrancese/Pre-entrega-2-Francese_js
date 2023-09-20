//CLASES//


// class Alumno_coder{

//     constructor( nombre , apellido , dni){
//         //PROPIEDADES
//         this.nombre = nombre;     
//         this.apellido = apellido;
//         this.dni = dni;
//         this.nota_uno = 0;
//         this.nota_dos = 0;
//     }

    //METODOS 

//     saludar(){
//         console.log("Hola buenas noches, mi nombre es: " , this.nombre);
//     }


//     get_datos(){
//         console.log("<---- DATOS ALUMNO/A ---->");
//         console.log("Nombre: ", this.nombre);
//         console.log("Apellido: ", this.apellido);
//         console.log("DNI: ", this.dni);
//         console.log("");
//     }

//     get_notas(){
//         console.log("<--- NOTAS DEL ALUMNO/A ---->");
//         console.log("Nombre: ", this.nombre);
//         console.log("Nota uno: ", this.nota_uno);
//         console.log("Nota dos: ", this.nota_dos);
//         console.log("");     

//     }


//     set_nota_uno( nota ){
//         if( nota > 0 && nota <= 10){

//             this.nota_uno = nota;
//         }

//     }


//     set_nota_dos( nota ){
//         if( nota > 0 && nota <= 10){

//             this.nota_dos = nota;
//         }

//     }


// }




// let alumno_uno = new Alumno_coder("Jose", "Lopez" , 31231323);
 //let alumno_dos = new Alumno_coder("Laura" , "Romero" , 65552313);

//console.log(alumno_uno);
//console.log("Nombre: ", alumno_uno.nombre );


//MUESTRO LOS DATOS
// alumno_uno.get_datos();
// alumno_dos.get_datos();


//MUESTRO LA NOTAS
// alumno_uno.get_notas();
// alumno_dos.get_notas();

//SALUDAN
// alumno_uno.saludar();
// alumno_dos.saludar();



//PRIMER PARCIAL
//alumno_uno.nota_uno = 10;
//alumno_dos.nota_uno = 11;

// alumno_uno.set_nota_uno(10);
// alumno_dos.set_nota_uno(8);


//MUESTRO LA NOTAS DESPUES DEL PARCIAL 
// alumno_uno.get_notas();
// alumno_dos.get_notas();



//SEGUNDO PARCIAL
//alumno_uno.nota_uno = 10;
//alumno_dos.nota_uno = 11;

// alumno_uno.set_nota_dos(7);
// alumno_dos.set_nota_dos(9);


//MUESTRO LA NOTAS DESPUES DEL PARCIAL 
// alumno_uno.get_notas();
// alumno_dos.get_notas();



class atleta_olimpicos{
       constructor (nombre , apellido , dni){
                this.nombre = nombre;
                this.apellido = apellido;
                this.dni = dni;
                this.metros_rondauno = 0;
                this.metros_rondados = 0; 
       }
        saludar(){
            console.log("Hola buenas tardes mi nombre es;" , this.nombre);
        }
    

       get_datos(){
           console.log("<---- DATOS ATLETA ---->");
           console.log("Nombre: ", this.nombre);
           console.log("Apellido: ", this.apellido);
           console.log("DNI: ", this.dni);
           console.log("");
       }
   
       get_metros(){
           console.log("<--- METROS DEL ATLETA ---->");
           console.log("Nombre: ", this.nombre);
           console.log("Metros uno: ", this.metros_rondauno);
           console.log("Metros dos: ", this.metros_rondados);
           console.log("");     
   
       }
   
   
       set_metros_uno( metros ){
           if( metros > 0 && metros <= 100){
   
               this.metros_rondauno = metros;
           }
   
       }
   
   
       set_metros_dos( metros ){
           if(metros > 0 && metros <= 100){
   
               this.metros_rondados = metros;
           }
   
       }

}

let atleta_uno = new atleta_olimpicos ("Michael" , "Jordan" , "21345687");
let atleta_dos = new atleta_olimpicos ("Stephen" , "Curry" , "42345687");

console.log(atleta_uno);
 console.log(atleta_dos);
console.log("Nombre: ", atleta_uno.nombre );
 console.log("Nombre: ", atleta_dos.nombre );


//MUESTRO LOS DATOS
 atleta_uno.get_datos();
 atleta_dos.get_datos();


//MUESTRO LOS METROS
 atleta_uno.get_metros();
 atleta_dos.get_metros();

//SALUDAN
 atleta_uno.saludar();
 atleta_dos.saludar();



//PRIMER RONDA
atleta_uno.metros_rondauno = 57;
atleta_dos.metros_rondauno = 64;

 atleta_uno.set_metros_uno(57);
 atleta_dos.set_metros_uno(64);


//MUESTRO LOS METROS DESPUES DE LA RONDA
 atleta_uno.get_metros();
 atleta_dos.get_metros();

console.log("METROS LANZADOS EN LA SEGUNDA RONDA");

//SEGUNDA RONDA
atleta_uno.metros_rondados = 80;
atleta_dos.metros_rondados = 96;

 atleta_uno.set_metros_dos(76);
 atleta_dos.set_metros_dos(88);


//MUESTRO LOS METROS DESPUES DE LA SEGUNDA RONDA
 atleta_uno.get_metros();
 atleta_dos.get_metros();