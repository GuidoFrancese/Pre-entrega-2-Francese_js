class Producto{

    constructor( nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }


    get_datos(){
        console.log("<-- PRODUCTO -->");
        console.log("Nombre: ", this.nombre);
        console.log("Precio: ", this.precio);
        console.log("Stock: ", this.stock);
        console.log("");
    }


    get_stock(){
        if( this.stock <= 0){
            return false
        }
        else{
            return true
        }
    }


    update_stock( unidades ){

        if(this.stock >= unidades ){
            this.stock = this.stock - unidades;
            return true
        }
        else{
            console.log("No tenemos tanto stock");
            console.log("Stock disponible: ", this.stock);
            return false
        }

    }


}

let listaProductos = [];

listaProductos.push( new Producto("Camisa" , 24000 , 8) );
listaProductos.push( new Producto("Remera" , 12000 , 10) );
listaProductos.push( new Producto("Jean" , 30000 , 7) );
listaProductos.push( new Producto("Joggin" , 18000 , 9) );

console.log("LISTA DE PRODUCTOS");


for( let producto of listaProductos ){

    producto.get_datos();
}


function buscarProducto( producto ){

    return producto.nombre == compraUsuario

}


let compraUsuario = "";

while( compraUsuario != "FIN"){
    compraUsuario = prompt("Ingrese el nombre del productos que quiere comprar");

    if( compraUsuario != "FIN"){
        
        let resultado_find = listaProductos.find( buscarProducto );



        if( resultado_find != undefined ){
            
            if( resultado_find.get_stock() ){
                let unidades = parseInt(prompt("¿Cuantas unidades quiere?"));
                if( resultado_find.update_stock(unidades) ){
                    console.log("Gracias por su compra");
                    for( let producto of listaProductos ){
                        if( producto.stock > 0){
                            producto.get_datos();
                        }                        
                    }
                }                      

            }
        }
        else{
            console.log("Producto no encontrado: ", compraUsuario);
        }

    }   


}



