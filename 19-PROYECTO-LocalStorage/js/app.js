const form = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];

// Event listeners ....
eventListeners();

function eventListeners(){
    //cujanto el usuario agrega un nuevo tweet
    form.addEventListener('submit',agregarTweet);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        console.log(tweets);

        crearHTML();
    });
}

// Agregar tweet
function agregarTweet(e){
    e.preventDefault();
    
    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validacion 
    if (tweet === ''){
        mostrarError('Un msje no puede ir vacio')
        return;
    }

    const tweetObj = {
        id : Date.now(),
        tweet        
    }

    // Agregando tweet
    tweets = [...tweets,tweetObj];
    
    // Crear HTML
    crearHTML();

    //Re iniciar el Form
    form.reset();
}

function mostrarError(error){
    const msjError = document.createElement('p');
    msjError.textContent = error;
    msjError.classList.add('error')
    document.querySelector('#contenido').appendChild(msjError);
    // Elimina msj de error luego de 3000s
    setTimeout( () => {
        msjError.remove();
    },3000);

}

// Muestra un listado de los tweets
function crearHTML(){

    // LimpiaTweets
    LimpiarHTML()


    if (tweets.length > 0){
        tweets.forEach( tweet => {
            // Agregar un btn de eliminar 
            const btnEliminar = document.createElement('a');
            btnEliminar .classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion eliminar 
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crear HTML
            const li = document.createElement('li');
            // añadir el texto
            li.innerText = tweet.tweet;

            // Asignar Btn eliminar
            li.appendChild(btnEliminar);
            // Insertar en HTML
            listaTweets.appendChild(li);
        });
    }

    // Sincronizar storage
    sincronizarStorage();
}

// Agrega tweets a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}

// Limpiar HTML
function LimpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}