function saludar(){
    console.log("HOLA");
}



let btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", saludar );//cuando esciche el click, realiza la funcionm en este caso saludar.

btnSaludar.addEventListener("click" , function(){
    console.log("BOOM OTRO EVENTO EN EL MISMO BOTON!");
});




// MOUSEDOWN | MOUSEUP //CAPTURO PRIMERO Y SUELTO EL ELEMENTO

let btnMouse = document.getElementById("btnMouse");

btnMouse.addEventListener("mousedown", function(e){

    console.log("SE ESCUCHO EL MOUSEDOWN");
    console.log(e.button);

    if( e.button == 0){
        console.log("MOUSEDOWN: BOTON IZQ");
    }
    else if( e.button == 1){
        console.log("MOUSEDOWN: BOTON RUEDITA");
    }
    else if( e.button == 2 ){
        console.log("MOUSEDOWN: BOTON DERECHO");
    }
    else{
        console.log("MOUSEDOWN: BOTON AUXILIAR");
    }

})



btnMouse.addEventListener("mouseup", function(e){

    console.log("SE ESCUCHO MOUSE UP");
    console.log("SE SOLTO EL BOTON: " ,e.button)
})




let img = document.getElementById("imgPepe");


img.addEventListener("mouseover", function(){

    img.src = "https://i.ytimg.com/vi/TAQj057qNyw/maxresdefault.jpg";
})


img.addEventListener("mouseout", function(){

    img.src = "https://preview.redd.it/nd3npwrpzv751.jpg?auto=webp&s=9df29c89b26dd75b2d0f28ca2694cc780528725b";

});





window.addEventListener("keydown" , function(e){

    console.log(e.key);

    if( e.key == "ArrowUp"){
        document.body.style.background = "gray";
    }
    else if( e.key == "ArrowDown"){
        document.body.style.background = "white";
    }

})