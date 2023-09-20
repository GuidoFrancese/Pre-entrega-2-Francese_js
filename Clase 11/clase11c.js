//EVENT HANDLERS

let arrUsuarios = [];

function alta_usuario(){

    

    let nombreUsuario = document.getElementById("nombre_usuario");
    let passwordUsuario = document.getElementById("password");

    let usuario = {nombre: nombreUsuario.value , password:passwordUsuario.value };
    arrUsuarios.push(usuario);

    //JSON

    let arrJson = JSON.stringify(arrUsuarios);
    localStorage.setItem("arrUsuarios" , arrJson);
}


function login_usuario(){

    let arr = localStorage.getItem("arrUsuarios");
    let nombreUsuario = document.getElementById("nombre_usuario").value;
    let passwordUsuario = document.getElementById("password").value;


    arr = JSON.parse(arr);


    for( let usuario of arr ){

        if(usuario.nombre == nombreUsuario && usuario.password == passwordUsuario ){

            document.body.innerHTML = `<h1>Bienvenido/a al sistema ${usuario.nombre}</h1>
                                       <a href="clase11c.html">Volver</a>`;
            break;
        }
        else{
            document.body.innerHTML = `<h1>El usuario: ${nombreUsuario} no se encuentra registrado</h1>
                                       <a href="clase11c.html">Volver</a>`;
        }

    }


}



// EVENTOS 


let btnRegistro = document.getElementById("btn_registro");
let btnLogIn = document.getElementById("btn_login");


btnRegistro.addEventListener("click" , alta_usuario );
btnLogIn.addEventListener("click" , login_usuario );