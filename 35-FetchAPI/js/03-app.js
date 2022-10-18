document.addEventListener('DOMContentLoaded',obtenerDatos)

/*
const cargarJSONBtn = document.querySelector('#cargarJSONArray');
cargarJSONBtn.addEventListener('click',obtenerDatos);
*/

function obtenerDatos() {
    const url = 'data/empleados.json';
    fetch(url)
        .then(resp => resp.json() )
        .then(res => mostarHTML(res) )        
}

function mostarHTML(empleados){
    const contenido = document.querySelector('.contenido');

    let html = '';
    
    empleados.forEach(empleado=>{
        const {id,nombre,empresa,trabajo} = empleado;

        html += `
            <p> ID : ${id} </p>
            <p> Empleado : ${nombre} </p>            
            <p> Empresa : ${empresa} </p>
            <p> Trabajo : ${trabajo} </p>
        `
    })

   contenido.innerHTML = html; 
}