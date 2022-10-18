// Cargar JSON

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url = 'data/empleado.json';
    fetch(url)
    .then(resp =>{
        return resp.json();
    }).then( res => mostrarHTML(res))
}


function mostrarHTML({empresa,id,nombre,trabajo}){
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p> Empleado: ${nombre}</p>
        <p> ID: ${id}</p>
        <p> Empresa: ${empresa}</p>
        <p> Trabajo: ${trabajo}</p>
    `;

}