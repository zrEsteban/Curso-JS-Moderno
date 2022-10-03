// Varialbes y selectores
const formulario = document.querySelector('#agregar-gasto')
const gastoListado = document.querySelector('#gastos ul')

// Eventos 
eventListners();
function eventListners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit',agregarGasto);

}

// Clases (Simplificar el trabajo)
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto]        
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total,gasto) => total + gasto.cantidad, 0); //itera sobre todos los elementos del arreglo y los acumula
        console.log(gastado);
        this.restante = this.presupuesto - gastado;
        console.log(this.restante);
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id );

        this.calcularRestante();
        //console.log(this.gastos)
    }
}

class UI{
    insertarPresupuesto(cantidad){
        // Extrayendo el valor
        const { presupuesto, restante } = cantidad;

        //Agregar al HYML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        const divMsj = document.createElement('div')
        divMsj.classList.add('text-center','alert');

        if (tipo==='error'){
            divMsj.classList.add('alert-danger');
        } else {
            divMsj.classList.add('alert-success');
        }

        // Mensaje de error
        divMsj.textContent = mensaje;

        //Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMsj, formulario);

        // Quitar del HTML
        setTimeout( () => {
            divMsj.remove();
        },3000);

    }

    //agregarGastoListado(gastos){
    mostrarGastos(gastos){
        
        this.limpiarHTML();

        // Iterar sobre gastos
        gastos.forEach( gasto => {
            const {cantidad, nombre, id } = gasto;
            console.log(gasto);

            // Crear li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center'; // Clases de boostrap
            // nuevoGasto.setAttribute('data-id',id); // Atributos personalizados (Se recomienda utilizar dataset)
            nuevoGasto.dataset.id = id; 

            // Agregar HTML del gasto
            nuevoGasto.innerHTML = `
                ${nombre} <span class="badge badge-primary badge-pill"> $${cantidad} </span>
            `;

            // Botom para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;'
            btnBorrar.onclick =  () =>{
                eliminarGasto(id); // Opcion , codigo mantenible
                // presupuesto.eliminarGasto(id) // Opcion que agrega complejidad al codigo, poco mantenible
            }
            nuevoGasto.appendChild(btnBorrar);

            // Agregar HTML
            gastoListado.appendChild(nuevoGasto);

        });
    }

    limpiarHTML(){
        while (gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        // Comprobar 25%
        if (( presupuesto/4.0 ) > restante ){
            restanteDiv.classList.remove('alert-success','alert-warning');
            restanteDiv.classList.add('alert-danger');           
        }
        
        // Comprobar 50%
        else if (( presupuesto/2.0 ) > restante ){
            restanteDiv.classList.remove('alert-danger','alert-success');
            restanteDiv.classList.add('alert-warning');
            
        } else {
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // restante Negativo 
        if (restante <= 0 ){
            ui.imprimirAlerta('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cual es tu presupuesto?')
   
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario < 0 ) {
        window.location.reload()
    } else {
        // Presupuesto Valido
        presupuesto = new Presupuesto(presupuestoUsuario);
        //console.log(presupuesto);

        ui.insertarPresupuesto(presupuesto);
    }
}

// Añade gastos
function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorio','error')
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida','error')
        return;
    }

    // Generar un obj gasto (Object literal )
    // Lo contrario a un distrocctoring
    const gasto = {nombre, cantidad, id: Date.now()}

    // Añade un nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Mesaje de todo ok
    ui.imprimirAlerta('Gasto agregado correctamente','')

    // Imprimir los gastos
    const {gastos, restante } = presupuesto;

    ui.mostrarGastos(gastos);
    // ui.agregarGastoListado(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    // Reinicia de formulario
    formulario.reset();
    
}

// Esta funcion es mejor para mantener el codigo
function eliminarGasto(id){
    // Elimna los gastos del listado
    presupuesto.eliminarGasto(id)

    // Elimina los gastos del HTML
    const { gastos,restante } = presupuesto;
    ui.mostrarGastos(gastos);
    
    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

}