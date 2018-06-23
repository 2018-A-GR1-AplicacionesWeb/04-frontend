console.log('Que tal!');
function dos() {
    console.log(2);
}
function cambiarTitulo() {
    var etiquetaTitulo = document
        .getElementById('titulo');
    etiquetaTitulo.innerText = 'Adios mundo!';
    etiquetaTitulo.className = 'cafe';
    eliminarEventoOnMouseEnterEnBoton();
}
function eliminarEventoOnMouseEnterEnBoton() {
    var etiquetaBotonTitulo = document
        .getElementById('boton_titulo');
    etiquetaBotonTitulo.onmouseenter = undefined;
}
function crearContenido() {
    var etiquetaContenedora = document
        .getElementById('contenido');
    var elementoTitulo = document
        .createElement('h5');
    elementoTitulo.className = 'card-title';
    elementoTitulo.textContent = 'Titulo';
    var elementoParrafo = document
        .createElement('p');
    elementoParrafo.className = 'card-text';
    elementoParrafo.textContent = 'Contenido';
    var elementoBoton = document
        .createElement('button');
    elementoBoton.className = 'btn btn-primary';
    elementoBoton.textContent = 'Accion';
    var contenedorCardBody = document
        .createElement('div');
    contenedorCardBody.className = 'card-body';
    contenedorCardBody.appendChild(elementoTitulo);
    contenedorCardBody.appendChild(elementoParrafo);
    contenedorCardBody.appendChild(elementoBoton);
    var parrafo = document
        .createElement("p");
    parrafo.innerHTML = 'Hola amigos';
    var imagen = document
        .createElement("img");
    imagen.src = adrian.urlImagen;
    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);
}
