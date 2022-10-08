import Citas from './clases/Citas.js'
import UI from './clases/UI.js'
import {
     mascotaInput,
     propietarioInput,
     telefonoInput,
     fechaInput, 
     horaInput,
     sintomasInput,
     formulario
} from './selectores.js'

const ui = new UI();
const administrarCitas = new Citas();

let editando = false ;

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
export function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

// Valida y agrega una nueva cita a la clase de citas
export function nuevaCita(e){
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


export function reiniciarObjeto() {    
    citaObj.mascota =  '';
    citaObj.propietario= '';
    citaObj.telefono= '';
    citaObj.fecha= '';
    citaObj.hora= '';
    citaObj.sintomas= '';
}

export function eliminarCita(id) {    
    //Eliminar la cita
    administrarCitas.eliminarCita(id);

    //Muestre mensaje
    ui.imprimirAlerta('La cita se eliminó correctamente')

    // Resfrescar citas
    ui.imprimirCitas(administrarCitas);
}

// Carga datos y modo edicion
export function cargarEdicion(cita) {    
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