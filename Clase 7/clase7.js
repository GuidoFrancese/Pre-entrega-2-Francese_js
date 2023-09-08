function saludar(){
    console.log("HOLA");
}



//FUNCIONES ANONIMAS//

let saludo = function(){
    console.log("Hola desde la funcion anonima");
}


// FUNCIONES ARROW //

let saludo_arrow = ()=>"Pepe"




saludo();
console.log( saludo_arrow() );






// RETORNAR FUNCIONES //


function doble( num ){

    return num * 2
}


function triple( num ){

    return num * 3
}



let resultado_doble = doble(50);
console.log("El doble del numero es: " , resultado_doble);





function crear_multiplicador( multiplicador ){

    //return ( num )=> num * multiplicador  
    
    return function( num ){        
        return num * multiplicador
    }


}


let doble_num = crear_multiplicador(2);
console.log( doble_num(80) );
console.log( doble_num(150) );


let triple_num = crear_multiplicador(3);
console.log( triple_num(50) );




//RECIBIR FUNCIONES POR PARAMETRO//


function saludar( nombre ){

    console.log("Hola :" , nombre)
}


function saludar_a_todos( arr ,  fn_saludar ){


    for( let alumno of arr){
        fn_saludar(alumno);
    }

}

let lista_alumnos = ["Ariel", "Laura" , "Marcela" , "Pedro"];

saludar_a_todos( lista_alumnos , saludar );






//forEach


function doble_numero( num ){

    console.log("El numero es: ", num);
    console.log("Y el doble es: ", num * 2);
}



let numeros = [ 10 , 2 , 55 , 32 , 11 , 28 ,67 , 99 ];


numeros.forEach( doble_numero );

//numeros.forEach( (num)=>console.log("El doble es: " , num * 2) )


