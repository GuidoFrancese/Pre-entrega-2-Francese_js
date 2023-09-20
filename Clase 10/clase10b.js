let nombreUsuario = document.getElementById("nombreUsuario");


//INPUT
/*
nombreUsuario.addEventListener("input" , function(e){

    console.log(e.target);
    console.log(e.target.value)


})

*/


//CHANGE

nombreUsuario.addEventListener("change" , function(e){

    console.log(e);

    if(e.target.value == "Pepe"){
        console.log("Bienvenido Pepe")
    }
    else{
        console.log("Usuario no encontrado");
    }


})



let form = document.getElementById("form");

form.addEventListener("submit" , function(e){

    e.preventDefault();
    let nombre = document.getElementById("usuarioForm");
    console.log(nombre.value);
})