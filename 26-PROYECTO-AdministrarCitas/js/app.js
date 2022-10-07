// campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando =false ;

class Citas{
    constructor(){
        this.citas = [];
    }
    
    agregarCita(cita){
        this.citas = [...this.citas,cita];
        //console.log(this.citas)
    };

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id )
    }

    editarCita(citaActualizada) {
        // genera un nuevo arreglo , busca por id y reescribe cita
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? cita = citaActualizada : cita );
    }

    editar
}

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

const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListeners();
function eventListeners(){
    mascotaInput.addEventListener('change',datosCita);
    // mascotaInput.addEventListener('input',datosCita);
    propietarioInput.addEventListener('change',datosCita);
    telefonoInput.addEventListener('change',datosCita);
    fechaInput.addEventListener('change',datosCita);
    horaInput.addEventListener('change',datosCita);
    sintomasInput.addEventListener('change',datosCita);
    
    formulario.addEventListener('submit',nuevaCita);
}

// Objeto con la informacion de la cita
const citaObj = {    
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''    
}

// agregar datos al obj de cita
function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e){
    e.preventDefault();

    //Extraer la informacion del obj de cita
    const {  mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    if ( mascota === '' || propietario  === '' || telefono === '' || fecha === '' || hora ==='' || sintomas === ''){
        ui.imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }

    if (editando) { // modo edicion
        console.log("Modo edicion")
              
        // Crear una cita (pasar referencia por copia) para edicion
        administrarCitas.editarCita({...citaObj});

        // Cambiar el texto del boton
        formulario.querySelector('button[type="submit"]').textContent = 'Crear Cita';
        editando = false
        
        ui.imprimirAlerta('Se actualizó correctamente')
    } else { // nueva cita
        console.log("Nueva cita")
        // Generar un id unico
        citaObj.id = Date.now();

        // Crear una cita (pasar referencia por copia)
        administrarCitas.agregarCita({...citaObj});

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se agregó correctamente');
    }
    
    // Reiniciar objeto
    reiniciarObjeto();

    // Reinicia el formulario
    formulario.reset();

    // Mostar HTML de las citas
    ui.imprimirCitas(administrarCitas);
}


function reiniciarObjeto() {    
    citaObj.mascota =  '';
    citaObj.propietario= '';
    citaObj.telefono= '';
    citaObj.fecha= '';
    citaObj.hora= '';
    citaObj.sintomas= '';
}

function eliminarCita(id) {    
    //Eliminar la cita
    administrarCitas.eliminarCita(id);

    //Muestre mensaje
    ui.imprimirAlerta('La cita se eliminó correctamente')

    // Resfrescar citas
    ui.imprimirCitas(administrarCitas);
}

// Carga datos y modo edicion
function cargarEdicion(cita) {    
    console.log(cita);

    const {  mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
    // Llenar inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;   

    // Como se esta validando por objeto, falta llenar el objeto, ademas del formulario que anteriormente fue llenado 
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;    
}