console.log('Que tal!');

function dos() {
    console.log(2);
}

function cambiarTitulo() {
    const etiquetaTitulo = document
        .getElementById('titulo');
    etiquetaTitulo.innerText = 'Adios mundo!';
    etiquetaTitulo.className = 'cafe';
    eliminarEventoOnMouseEnterEnBoton();
}

function eliminarEventoOnMouseEnterEnBoton() {
    const etiquetaBotonTitulo = document
        .getElementById('boton_titulo');
    etiquetaBotonTitulo.onmouseenter = undefined;
}


function crearContenido() {
    const etiquetaContenedora = document
        .getElementById('contenido');

    const elementoTitulo = document
        .createElement('h5');
    elementoTitulo.className = 'card-title';
    elementoTitulo.textContent = 'Titulo';

    const elementoParrafo = document
        .createElement('p');
    elementoParrafo.className = 'card-text';
    elementoParrafo.textContent = 'Contenido';

    const elementoBoton = document
        .createElement('button');
    elementoBoton.className = 'btn btn-primary';
    elementoBoton.textContent = 'Accion';

    const contenedorCardBody = document
        .createElement('div');
    contenedorCardBody.className = 'card-body';
    contenedorCardBody.appendChild(elementoTitulo);
    contenedorCardBody.appendChild(elementoParrafo);
    contenedorCardBody.appendChild(elementoBoton);


    const parrafo = document
        .createElement("p");
    parrafo.innerHTML = 'Hola amigos';

    const imagen = document
        .createElement("img");
    imagen.src = adrian.urlImagen;

    etiquetaContenedora.appendChild(parrafo);
    etiquetaContenedora.appendChild(imagen);

}