// Ends-points
// Categorias www.themealdb.com/api/json/v1/1/categories.php
// Filtro por categorias www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// Platillo www.themealdb.com/api/json/v1/1/lookup.php?i=52772

function iniciarApp(){
    
    const selectCategorias = document.querySelector('#categorias');       
    const resultado = document.querySelector('#resultado');

    if (selectCategorias){
        selectCategorias.addEventListener('change', seleccionartCategoria)    
        obtenerCategorias();
    }
    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }
        
    const modal = new bootstrap.Modal('#modal',{});

    function obtenerCategorias(){
        const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
        fetch(url)
            .then(resp => resp.json())
            .then(res => mostrarCategorias(res.categories))
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach(categoria => {
            const {strCategory } = categoria
            const opt = document.createElement('OPTION');
            opt.value = strCategory;
            opt.textContent = strCategory;
            selectCategorias.appendChild(opt);            
            
        })
        
    }

    function seleccionartCategoria(e){
        const categoria = e.target.value
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        
        fetch(url)
            .then(resp => resp.json())
            .then(res => mostrarRecetas(res.meals))
    }

    function mostrarRecetas(recetas=[]){
        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center','text-black','my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No Hay Resultados';
        resultado.appendChild(heading);

        // Iterar en los resultados
        recetas.forEach(receta=>{
            const {idMeal, strMeal, strMealThumb} = receta
            
            // Scripting
            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card','mb-4');

            const recetaImg = document.createElement('IMG');
            recetaImg.classList.add('card-img-top');
            recetaImg.alt = `Imagen de la receta ${strMeal ?? receta.title}`;
            recetaImg.src = strMealThumb ?? receta.img;

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');
 
            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title','mb-3');
            recetaHeading.textContent = strMeal ?? receta.title;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn','btn-danger','w-100');
            recetaButton.textContent = 'Ver Receta';

            recetaButton.onclick = function(){
                seleccionarReceta(idMeal ?? receta.id);
            }
            //recetaButton.dataset.bsTarget = "#modal";
            //recetaButton.dataset.bsToggle = "modal";

            // Inyectar en el código HTML
            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImg);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);
            /*
            .card
                img
                .card-nody
                    h3
                    button
            */        
           resultado.appendChild(recetaContenedor);
        })
        
    }

    function seleccionarReceta(id){
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
            .then(
                resp => resp.json()
            ).then(res=>mostrarRecetaModal(res.meals[0]))        
    }

    function mostrarRecetaModal(receta) {

        const {idMeal,strInstructions,strMeal,strMealThumb} = receta;
        
        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;
        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}" />
            <h3 class="my-3"> Instrucciones </h3>
            <p> ${strInstructions}</hp>
            <h3 class="my-3"> Ingredientes & Cantidades </h3>
        `;

        const listGroup = document.createElement('UL')
        listGroup.classList.add('list-group');
        //Mostrar cantidades e ingredientes
        for(let i=1; i<20; i++ ){
            if(receta[`strIngredient${i}`]){
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`
                listGroup.appendChild(ingredienteLi);                
            }
        }

        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        // Botones de cerrar y favorito
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn','btn-danger','col');

        btnFavorito.textContent = !existeStorage(idMeal) ? 'Guardar Favorito' : 'Eliminar Favorito';

        // localStorage
        btnFavorito.onclick = function(){

            if (!existeStorage(idMeal)){
                agregarFavorito({
                    id: idMeal,
                    title: strMeal,
                    img: strMealThumb
                });
                btnFavorito.textContent = 'Eliminar Favorito';
                mostrarToast('Agregado correctamente a favoritos');
            } else {
                mostrarRecetas(eliminarFavorito(idMeal));
                btnFavorito.textContent = 'Guardar Favorito';
                mostrarToast('Eliminado correctamente');
                return;
            }

           
        }

        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn','btn-secondary','col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = function(){
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);

        //Muestra el modal
        modal.show();
        
    }
    
    function agregarFavorito(receta){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];        
        localStorage.setItem('favoritos',JSON.stringify([...favoritos,receta]));

    }

    function eliminarFavorito(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const nuevosFavoritos = favoritos.filter(favorito => favorito.id !== id);

        localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));      
        return nuevosFavoritos
    }

    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return favoritos.some(favorito => favorito.id === id);
    }

    function mostrarToast(msj){
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastBody.textContent = msj;
        toast.show();
    }

    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];

        if(favoritos.length){
            mostrarRecetas(favoritos);
            return
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay favoritos aún.'
        noFavoritos.classList.add('fs-4','text-center','font-bold','mt-5');
        favoritosDiv.appendChild(noFavoritos);
        //console.log(favoritos)
    }

    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }
}

document.addEventListener('DOMContentLoaded',iniciarApp);