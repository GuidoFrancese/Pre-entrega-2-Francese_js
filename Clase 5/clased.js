//CREAR UN CLASE Producto
//PROPIEDADES nombre , precio , stock 

//METODOS
/*

get_datos: trae todos los datos del producto
get_stock: retorna true si existe stock disponible, sino retorna false. 

*/

// class Producto{

//     constructor(nombre ,precio ,stock){

//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }


//     get_datos(){
//         console.log("<--- DATOS DEL PRODUCTO --->");
//         console.log("Nombre: ", this.nombre);
//         console.log("Precio: ", this.precio);
//         console.log("Stock: ", this.stock);
//         console.log("");
//     }

//     get_stock(){

//         if(this.stock > 0 ){
//             return true
//         }
//         else{
//             return false
//         }
//     }



//     venta( cantidad ){

//         if( this.stock >= cantidad ){
//             console.log("Gracias por su compra");
//             this.stock = this.stock - cantidad;

//         }
//         else{
//             console.log("Solo tengo tantas unidades: ", this.stock);
//         }

//     }

// }



// let producto_uno = new Producto("Lampara" , 10000 , 10);
// let producto_dos = new Producto("Radio" , 5000 , 5);
// let producto_tres = new Producto("Mouse" , 8000 , 2);



// producto_uno.get_datos();
// producto_dos.get_datos();
// producto_tres.get_datos();



// VENTA DE PRODUCTO //

// EL USUARIO QUIERE COMPRAR UNA LAMPARA--> PUEDE VENIR DE UN PROMPT//


// if( producto_uno.get_stock() ){
       
//     console.log("Tenemos stock del producto");
//     let cantidad = prompt("Ingrese la cantidad de unidades que quiere comprar");
//     cantidad = parseInt(cantidad);
//     producto_uno.venta(cantidad);
//     producto_uno.get_datos();
    
// }
// else{
//     console.log("No disponemos de stock del producto");
// }















class Ropa{

    constructor(nombre ,precio ,stock){

        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }


    get_datos(){
        console.log("<--- DATOS DE LA PRENDA --->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }

    get_stock(){

        if(this.stock > 0 ){
            return true
        }
        else{
            return false
        }
    }



    venta( cantidad ){

        if( this.stock >= cantidad ){
            console.log("Gracias por su compra");
            this.stock = this.stock - cantidad;

        }
        else{
            console.log("Solo tengo tantas unidades: ", this.stock);
        }

    }

}



let prenda_uno = new Ropa("Remera" , 10000 , 10);
let prenda_dos = new Ropa("Pantalon" , 15000 , 5);
let prenda_tres = new Ropa("Buzo" , 18000 , 2);



prenda_uno.get_datos();
prenda_dos.get_datos();
prenda_tres.get_datos();

if( prenda_uno.get_stock() ){
       
    console.log("Tenemos stock del producto");
    let cantidad = prompt("Ingrese la cantidad de unidades que quiere comprar");
    cantidad = parseInt(cantidad);
    prenda_uno.venta(cantidad);
    prenda_uno.get_datos();
    
}
else{
    console.log("No disponemos de stock del producto");
}
if( prenda_dos.get_stock() ){
       
    console.log("Tenemos stock del producto");
    let cantidad = prompt("Ingrese la cantidad de unidades que quiere comprar");
    cantidad = parseInt(cantidad);
    prenda_dos.venta(cantidad);
    prenda_dos.get_datos();
    
}
else{
    console.log("No disponemos de stock del producto");
}
if( prenda_tres.get_stock() ){
       
    console.log("Tenemos stock del producto");
    let cantidad = prompt("Ingrese la cantidad de unidades que quiere comprar");
    cantidad = parseInt(cantidad);
    prenda_tres.venta(cantidad);
    prenda_tres.get_datos();
    
}
else{
    console.log("No disponemos de stock del producto");
}





