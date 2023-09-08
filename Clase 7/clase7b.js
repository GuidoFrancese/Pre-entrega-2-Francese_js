//FIND 


let usuarios = [
    {nombre:"Marta" , apellido:"Rojas" , edad:33},
    {nombre:"Jose" , apellido:"Lopez" , edad:45},
    {nombre:"Diego" , apellido:"Marladona" , edad:53},
    {nombre:"Gabriel" , apellido:"Bartistuta" , edad:22},
    {nombre:"Lionel" , apellido:"Mersi" , edad:25},
    {nombre:"Marta" , apellido:"Gomez" , edad:19},
]



function buscar_usuario(obj_usuario){

    return obj_usuario.nombre == "Marta" 

}


let resultado_find = usuarios.find( buscar_usuario );
console.log(resultado_find);




//FILTER//


let usuarios_dos = [
    {nombre:"Marta" , apellido:"Rojas" , edad:10},
    {nombre:"Jose" , apellido:"Lopez" , edad:45},
    {nombre:"Diego" , apellido:"Marladona" , edad:53},
    {nombre:"Gabriel" , apellido:"Bartistuta" , edad:22},
    {nombre:"Lionel" , apellido:"Mersi" , edad:15},
    {nombre:"Romina" , apellido:"Gomez" , edad:19},
]


function mayorEdad( obj_usuario ){

    return obj_usuario.edad >= 18
}




let resultado_filter = usuarios_dos.filter( mayorEdad );
console.log(resultado_filter);




// MAP //

let productos = [
    {nombre:"Cocina" , precio:20000},
    {nombre:"Silla" , precio:10000},
    {nombre:"Mate" , precio:4000},
    {nombre:"Teclado" , precio:6000},
    {nombre:"Mouse" , precio:14000},
    {nombre:"Lampara" , precio:8000}
]


function agregar_iva(obj_producto){

    let iva = obj_producto.precio * 0.21;

    return {
        nombre: obj_producto.nombre,
        precio: obj_producto.precio + iva
    }

}




let resultado_map = productos.map( agregar_iva );
console.log( resultado_map )
