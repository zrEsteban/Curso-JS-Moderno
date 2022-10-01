//const form = document.querySelector('')

//Constructores 
function Seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

// Realiza la cotizacion con los dato (Prototype)
Seguro.prototype.cotizarSeguro = function () {
    /*
        1 = Americano   1.15 
        2 = Asiatico    1.05     
        3 = Europeo     1.35
    */

    let cantidad;
    const base = 2000;
    
    switch(this.marca){
        case '1':
            cantidad = base*1.15;
            break
        case '2':
            cantidad = base*1.05;
            break
        case '3':
            cantidad = base*1.35;
            break
        default:
            break        
    }
    
    // Leer el año
    const diff = new Date().getFullYear() - this.year;

    // Cada año que la diferencia es mayor, costo va a reducirse un 3% 
    cantidad -= (((diff * 3)* cantidad))/100;
    /*
        Si el seguro es básico se multiplica por un 30% mas ,
        Si el seguro es copmpleto se multiplica por un 50% más.
    */ 

    (this.tipo == 'basico' ? cantidad *= 1.3 : cantidad *= 1.5);
       
    return cantidad;
}
// Prototype
function UI(){}

// Llena las opciones de los años
UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear(), min = max - 20;


    const selectYear = document.querySelector('#year');

    for (let i=max; i>min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}
//
UI.prototype.mostrarResultado = (total,seguro) =>{
    const {marca,year,tipo} = seguro;

    switch(marca) {
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;

        default:
            break;
    }
    // crear el resutlado 
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
    <p class="header"> Tu Resumen </p>
    <p class="font-bold"> Marca: <span class="font-normal">  ${textoMarca} </span> </p>
    <p class="font-bold"> Año: <span class="font-normal">  ${year} </span> </p>
    <p class="font-bold"> Tipo: <span class="font-normal capitalize">  ${tipo} </span> </p>
    <p class="font-bold"> Total: <span class="font-normal">  $${total} </span> </p>
    `
    const resutladoDiv = document.querySelector('#resultado');
    
    // Mostrar spinner 
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout( () => {
        //resultadoDiv.remove();
        spinner.style.display = 'none';
        resutladoDiv.appendChild(div);
    },1000);

}

// Muestra aleta en pantall
UI.prototype.mostrarMensaje = (msj,tipo) => {
    const div = document.createElement('div');
    if(tipo==='error'){
        div.classList.add('mensaje','error');
    } else {
        div.classList.add('mensaje','correcto');
    }
    div.classList.add('mensaje', 'mt-10');
    div.textContent = msj;

    // Insertar en el HTML
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div,document.querySelector('#resultado'));

    setTimeout( () => {
        div.remove();
    },1000);
}

//Instanciar IU 
const ui = new UI();
//console.log(ui);

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
})

eventListeners();
function eventListeners(){
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    // Leer la marca seleccionado
    const marca = document.querySelector('#marca').value;

    // Leer el año seleccionado
    const year = document.querySelector('#year').value;
    
    // Leer tipo de seguro
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year ==='' || tipo ==='') {
        ui.mostrarMensaje('Todos los cambio son obligatorios','error');
        return;
    }

    //console.log('Cotizando ....')
    ui.mostrarMensaje('cotizando','exito');   

    //Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');

    if (resultados != null ) {
        resultados.remove();
    }
    //const resultados2 = document.querySelector('#resultado div');



    // Instanciar Seguro
    const seguro = new Seguro(marca,year,tipo);
    const total = seguro.cotizarSeguro();
         
    // Utilizar el prototype 
    ui.mostrarResultado(total,seguro);

}
