function calcular_iva( precio ){

    let iva = precio * 0.21;

    return iva

}




function calcular_cuota( precio , cuotas ){

    if( cuotas == 3 ){
        let interes = precio * 0.25;
        return interes
    }
    else if(cuotas == 6){
        let interes = precio * 0.50;
        return interes
    }
    else if(cuotas == 12){
        let interes = precio * 0.90;
        return interes
    }
    else if( cuotas == 1 ){

        return 0
    }

}





let precio_lampara_lista = 1000;
let cuotas = prompt("Ingrese la cantidad de cuotas:1,3,6 o 12");


let iva = calcular_cuota(precio_lampara_lista);
let precio_final = calcular_cuota(precio_lampara_lista, cuotas) + precio_lampara_lista + calcular_iva(precio_lampara_lista);


console.log("Ustedes va a comprar una lampara");
console.log("Precio: ", precio_lampara_lista);
console.log("IVA: ", calcular_iva(precio_lampara_lista) );
console.log("Precio+IVA: ", calcular_iva(precio_lampara_lista)+precio_lampara_lista  );
console.log("Cuotas: ", cuotas);
console.log("Interes: ", calcular_cuota( precio_lampara_lista , cuotas));
console.log("Precio Final: " , precio_final  )
