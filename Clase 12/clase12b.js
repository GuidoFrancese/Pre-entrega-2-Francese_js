let boton = document.getElementById("boton");


boton.addEventListener("click" , function(){


    let producto = document.getElementById("producto");
    let lista = document.getElementById("lista");

    console.log(producto.value);



    let li = document.createElement("li");
    li.innerHTML = `<span>${producto.value}</span>
                    <button class="btn_borrar">Borrar</button>`;

    lista.append(li);



    let botones_borrar = document.querySelectorAll(".btn_borrar");


     console.log( botones_borrar );


    for( let boton of botones_borrar){

        boton.addEventListener("click" ,  borrar_elemento );
    }


})



function borrar_elemento(e){

    console.log("ELIMINAR ESTE ELEMENTO:" , e.target);

    
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;


    console.log(hijo);
    console.log(padre);
    console.log(abuelo);


    //e.target.remove(); OJO

    padre.remove();
    
}
