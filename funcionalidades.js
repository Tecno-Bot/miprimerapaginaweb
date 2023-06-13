function showAlert(){
    alert("Hola, esta es una alerta de JavaScript");
}

let boton = document.getElementById("miBoton");


boton.addEventListener("click", function(){
    alert("!haz hecho click en el boton");
})