const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const paginacionDiv = document.querySelector("#paginacion");

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let pagActual = 1;

window.onload = ()=>{
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;

    if(terminoBusqueda === ''){
        mostrarAlerta('Agregar un término de búsqueda');
        return;
    }

    buscarImgs();
}

function mostrarAlerta(msj){

    const existeAlerta = document.querySelector('.bg-red-100');

    if(!existeAlerta){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center');

        alerta.innerHTML = `
        <strong class ="font-bold">Error! </strong>
        <span class="block sm:inline"> ${msj}<span>
        `;

        formulario.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        },3000);
    }    
}

function buscarImgs(){

    const termino = document.querySelector('#termino').value;
    
    const key = '31049005-5ae803f8efcd8805d9584c858';
    /* Esta API tiene paginacion */
    const url= `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${pagActual}`;

    fetch(url)
        .then(resp =>resp.json())
        .then(res=>{
            totalPaginas = calcularPaginas(res.totalHits);
            //console.log(totalPaginas);
            mostrarImgs(res.hits);
        })
}

function *crearPaginador(total){
    console.log(total)
    for (let i=1; i<=total;i++){
        yield i;
    }
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total/registrosPorPagina))
}

function mostrarImgs(imgs){

    // Limpiar resultados previo
    limpiarHTML(resultado)
    
    //Iterar sobre el arreglo de imagenes y construir el HTML
    imgs.forEach(img=>{
        const {previewURL,likes,views, largeImageURL} = img;
        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class = "bg-white">
            <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer">
            <img class ="w-full" src="${previewURL}">
            <div class = "p-4">
            <p class ="font-bold"> ${likes} <span class="font-light"> Me Gusta </span> </p>
            <p class ="font-bold"> ${views} <span class="font-light"> Veces Vista </span> </p>
            </div>
            </a>
            </div>
        </div>
        `        
    })
    
    // Limpiar Paginador previo
    limpiarHTML(paginacionDiv)

    // Generador de HTML
    imprimirPaginador();
    
}

function limpiarHTML(selector){
    while(selector.firstChild){
        selector.removeChild(selector.firstChild);
    }
}

function imprimirPaginador(){
    iterador = crearPaginador(totalPaginas);
    while(true){
         const {value,done} = iterador.next();
         if(done) return;

         //Caso contratio, genera un btn por cada elemento en el generador
         const btn = document.createElement('a');
         btn.href = '#';
         btn.dataset.pagina = value;
         btn.textContent = value;
         btn.classList.add('siguiente','bg-yellow-400','px-4','py-1','mr-2','font-bold','mb-1','rounded');
         btn.onclick = () =>{
            pagActual = value;
            buscarImgs();            
         }

        paginacionDiv.appendChild(btn)
    }
    //console.log(iterador.next().done)
}