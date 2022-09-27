const carrito = document.querySelector('#carrito'); // Solo un carrito
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos'); // todo el listado de cursos
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Cuando agregas iun curso presionando "Agregar al carrito"    
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click',eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        // Limpiar el HTML
        limpiarHTML();
    });
}

// Elimina curso de carrito
function eliminarCurso(e){
    e.preventDefault();
    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        // Resta del carrito el curso seleccionado por cantidad
        idx = articulosCarrito.findIndex( p => p.id === cursoId);
        articulosCarrito[idx].cantidad--;
        // Elimina del arreglo por el data - id cuando llegue la cantidad a 0
        if (!articulosCarrito[idx].cantidad) {            
            articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        }       
        carritoHTML();
    }
};

function agregarCurso(e){    
    e.preventDefault(); //Previene accion por default es ir al inicio ya que href  = #
    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leetDatosCurso(cursoSeleccionado);
    }
    
}

// Lee el contenido del html del que le dimos click y exstrae la informacion del curso
function leetDatosCurso(curso){
    
    //crear un obj con el contenido del curso actual
    const infoCurso = {
        img : curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    // Revisa si ya existe en el carrito
    const existe = articulosCarrito.some( p => p.id === infoCurso.id)
    if (existe) {
        //Actualiza ¿?
        idx = articulosCarrito.findIndex( p => p.id === infoCurso.id);
        articulosCarrito[idx].cantidad ++;
    } else {
        // Agrega elementos al arreglo de carrito.
        articulosCarrito = [...articulosCarrito,infoCurso];
    }
    
    console.log(articulosCarrito);

    carritoHTML();
};

//Muestra el carrito de compras en el html
function carritoHTML(){

    // Limpiar el HTML
    limpiarHTML();

    // recorre el carrito y genera HTML
    articulosCarrito.forEach(curso => {
        const {img, titulo, precio,cantidad, id } = curso;
        
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> <img src = ${img} width=100> </td>
        <td> ${titulo} </td>
        <td> ${precio} </td>
        <td> ${cantidad} </td>
        <td> 
            <a href ="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;

        //Agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row);
    })
}

// Elimina los cursos del tbody
function limpiarHTML(){
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    
};