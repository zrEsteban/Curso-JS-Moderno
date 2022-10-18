/* API que consume datos de internet y muestra en front - end */
const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', obtenerDatos)

function obtenerDatos(){
    const url = 'https://picsum.photos/list'
    fetch(url)
        .then(resp => resp.json())
        .then(res => mostarHTML(res))
}

function mostarHTML(datos){
    const contenido = document.querySelector('.contenido');

    let html = '';
    datos.forEach( dato =>{
        const {author, post_url} =dato
        html+= `
            <p> Autor : ${author} </p>
            <a href="${post_url}"  target="_blank">Ver Imagen </a>
        `
        //console.log(author)
    })

    contenido.innerHTML = html;
}