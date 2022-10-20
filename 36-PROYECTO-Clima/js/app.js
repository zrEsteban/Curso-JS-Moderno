const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

window.addEventListener('load', ()=>{
    form.addEventListener('submit',buscarClima);
})

function buscarClima(e){
    e.preventDefault();

    // Validar form 
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === ''){
        // Hubo un error
        mostrarError('Ambos campos son obligatorios');
        return;
    }
    // Consultar API
    consultarAPI(ciudad,pais);
    //console.log(`ciudad : ${ciudad} ; pais : ${pais}`);
}

function mostrarError(msj){
    const alerta = document.querySelector('.bg-red-100');
    if(!alerta){
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-md','mx-auto','mt-6','text-center');
    
        alerta.innerHTML = `
            <strong class ="font-bold">Error!<strong>
            <span class="block">${msj}</span>
        `;

        container.appendChild(alerta);

        setTimeout(()=>{
            alerta.remove();
        },3000);
        
    }    
}

function consultarAPI(city_name,country_code){
    const API_key = '3c0bc35e58e5c39a152ca84be569a15c';
    // JSMFetchAPI   
    // console.log(`${city_name}`) 
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_code}&appid=${API_key}`

    Spinner(); // Muestra un Spinner de carga.

    fetch(url)
        .then(resp =>resp.json())
        .then(datos => {

            limpiarHTML();

            console.log(datos);
            if(datos.cod === "404") {
                mostrarError('Ciudad NO encontrada');
                return;
            }

            // Imprime respuesta en el HTML
            mostrarClima(datos);
        })
}

function mostrarClima(datos){
    const { name , main : {temp, temp_max,temp_min} } = datos;
    
    const tactual = kelvinCelsius(temp);
    const tmax = kelvinCelsius(temp_max);
    const tmin = kelvinCelsius(temp_min);

    const actual = document.createElement('p');
    actual.innerHTML = `${tactual} &#8451`;
    actual.classList.add('font-bold','text-6xl');

    const maxima = document.createElement('p');
    maxima.innerHTML = `Max: ${tmax} &#8451`;
    maxima.classList.add('text-xl');

    const minima = document.createElement('p');
    minima.innerHTML = `Min: ${tmin} &#8451`;
    minima.classList.add('text-xl');

    const cityName = document.createElement('p');
    cityName.textContent = `Clima en ${name}`;
    cityName.classList.add('font-bold','text-2xl');


    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');
    resultadoDiv.appendChild(cityName);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(maxima);
    resultadoDiv.appendChild(minima);


    resultado.appendChild(resultadoDiv);
}

// Helppers
const kelvinCelsius = (grados) => parseInt(grados - 273.15);

function limpiarHTML(){
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}


function Spinner(){
    limpiarHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('sk-fading-circle');

    divSpinner.innerHTML = `
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>        
    `;

    resultado.appendChild(divSpinner);
}