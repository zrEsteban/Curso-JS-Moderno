import { eliminarCita, cargarEdicion } from '../funciones.js'
import { contenedorCitas } from '../selectores.js'

class UI{

    imprimirAlerta(mensaje, tipo) {
        const divMsj = document.createElement('div')
        divMsj.classList.add('text-center','alert','d-block','col-12');

        if (tipo==='error'){
            divMsj.classList.add('alert-danger');
        } else {
            divMsj.classList.add('alert-success');
        }

        // Mensaje de error
        divMsj.textContent = mensaje;

        //Insertar en el HTML
        document.querySelector('#contenido').insertBefore(divMsj, document.querySelector('.agregar-cita'));

        // Quitar del HTML
        setTimeout( () => {
            divMsj.remove();
        },3000);

    }
    // Hacer Distructuring desde paso de argumentos
    imprimirCitas({citas}){
        this.limpiarHTML();
        citas.forEach(cita => {
            const {  mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
            
            const divCita = document.createElement('div');
            divCita.classList.add('cita','p-3');
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Propietario: </span> ${propietario}
            `

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Telefono: </span> ${telefono}
            `

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Fecha: </span> ${fecha}
            `

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Hora: </span> ${hora}
            `

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class = "font-weight-bolder"> Sintomas: </span> ${sintomas}
            `
            
            // Boton para eliminar cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2');
            
            // Agregar iconos desde HeroIcons (https://heroicons.dev/)
            btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'; 
            btnEliminar.onclick = () => eliminarCita(id);

            // Boton para editar cita
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-info');
            
            // Agregar iconos desde HeroIcons (https://heroicons.dev/)
            btnEditar.innerHTML = 'Editar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>'; 
            btnEditar.onclick = () => cargarEdicion(cita);
        

            // Agregar los parrafos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);
            
            // Agregar citas al HTML
            contenedorCitas.appendChild(divCita);
        })        
    } 

    limpiarHTML(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }
}

export default UI;