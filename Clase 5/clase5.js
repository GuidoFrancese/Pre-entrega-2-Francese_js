/*
let auto_uno_color = "Rojo";
let auto_uno_patente = "AFR123";
let auto_uno_duenio = "Pedro";
let auto_uno_marca = "Fiat";
*/



// OBJETOS LITERALES 

let auto_uno = {
    //PROPIEDADES//
    color:"Rojo",
    marca:"Fiat",
    duenio:"Pedro",
    patente:"AFR123"
};


let auto_dos = {
    color:"Verde",
    marca:"Bmw",
    duenio:"Marta",
    patente:"GTR123"
};

let autotres = {
    color: "Naranja",
    marca: "ford",
    duenio: "marcelo",
    patente: "aa 123 de"
}



console.log( auto_uno );
console.log("Datos del Auto Uno");
console.log("Color: ", auto_uno.color );
console.log("Marca: ", auto_uno.marca );
console.log("Patente: " , auto_uno.patente ); 


console.log("Datos del Auto dos");
console.log("Patente: " , auto_dos.patente );
console.log("Marca: ", auto_dos.marca);


console.log("Datos del auto tres")
console.log("color:" , autotres.color);
console.log("marca:" , autotres.marca );
console.log("duenio:" , autotres.duenio);
console.log("patente:" , autotres.patente);