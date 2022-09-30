const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const year = document.querySelector('#year');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

const datosBusqueda = { 
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
    // modelo,
}

// Eventos 
document.addEventListener('DOMContentLoaded', () => {
    // Muestra los automoviles al cargar
    mostrarAutos(autos)
   
    //Llena las opciones de año
    llenarSelect();
})

// Event listener para los select de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca =  e.target.value;
    filtrarAuto();    
})

year.addEventListener('change', (e) => {
    datosBusqueda.year =  parseInt(e.target.value);
    filtrarAuto();        
})

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo =  e.target.value;
    filtrarAuto();
})

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo =  e.target.value;
    filtrarAuto();    
})

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas =  parseInt(e.target.value);
    filtrarAuto();    
})

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision =  e.target.value;
    filtrarAuto();
})

color.addEventListener('change', (e) => {
    datosBusqueda.color =  e.target.value;
    filtrarAuto();
})
 
function mostrarAutos(autos){
        // Elimina el HTML previo
       limpiarHTML();

        autos.forEach( auto => {        
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;

        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio : ${precio} - Color: ${color}
        `;

        // Insertar en el HTML (No borra el contenido previo)
        resultado.appendChild(autoHTML);        
    })
}

// No resultados
function noResultado(){
    limpiarHTML()

    /* div */
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent = 'No existen resultados para esta búsqueda, intenta con otros parámetros de búsqueda';

    resultado.appendChild(noResultado);
}
// Limpiar HTML
function limpiarHTML(){
    while (resultado.firstChild) { resultado.removeChild(resultado.firstChild); }
}
// Genera los años del select
function llenarSelect(){
    
    for ( let i = max; i>= min; i-- ){
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = i; 
        year.appendChild(opt);
    }   

}

// Funcion que filtra en base a la busqueda
function filtrarAuto(){
    // Funcion de alto nivel funcion de funcion (chaining)
    // Bases de la Programacion Funcional 
    const res = autos.filter( filtrarMarca ).filter( filtrarYear ).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor ) ; 
    console.log(res)

    if (res.length) {
        mostrarAutos(res);
    } else {
        noResultado();         
    }  
}

//  Filtrar por marca 
function filtrarMarca(auto){
    const { marca } = datosBusqueda;
    if ( marca ) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto){
    const { year } = datosBusqueda;

    if ( year ) {
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const { minimo } = datosBusqueda;

    if ( minimo ) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const { maximo } = datosBusqueda;

    if ( maximo ) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const { puertas } = datosBusqueda;
    if ( puertas ) {
        return auto.puertas === puertas;
    }
    return auto;
}

function filtrarTransmision(auto){
    const { transmision } = datosBusqueda;
    if ( transmision ) {
        return auto.transmision === transmision;
    }
    return auto;
}

function filtrarColor(auto){
    const { color } = datosBusqueda;
    if ( color ) {
        return auto.color === color;
    }
    return auto;
}