document.addEventListener("DOMContentLoaded", function(){
    
    const imagenes = [
      "imagenes/ARTE BARROCO ESPAÑOL_ Pintura.jpeg",
      "imagenes/descarga (16).jpeg",
      "imagenes/Características del barroco - Toda Materia.jpeg"
    ];
    let indiceActual = 0;

    const imagenPrincipal = document.getElementById("ImagenPrincipal");
    const btnAnterior = document.getElementById("btnanterior");
    const btnSiguiente = document.getElementById("btnsiguiente");
    
    function mostrarImagen(indice){
      imagenPrincipal.src = imagenes[indice];
    }

    btnSiguiente.addEventListener("click", function(){
    indiceActual++;
    if(indiceActual >= imagenes.length) indiceActual = 0;
    mostrarImagen(indiceActual);
    });

    btnAnterior.addEventListener("click", function(){
    indiceActual--;
    if(indiceActual < 0) indiceActual = imagenes.length -1;
    mostrarImagen(indiceActual);
    });

    mostrarImagen(indiceActual);

});

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });