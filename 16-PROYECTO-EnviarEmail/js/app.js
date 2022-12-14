// Variables 
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const msj = document.querySelector('#mensaje');


eventListeners();

function eventListeners(){
    // Cuando la app arranca
    document.addEventListener('DOMContentLoaded', inicarApp);

    // Campos del formulario
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    msj.addEventListener('blur', validarFormulario)

    //Reinicia el formulario 
    btnReset.addEventListener('click',resetearFormulario);
    // Enviar email
    formulario.addEventListener('submit', enviarEmail);
}

// Funciones
function inicarApp(){
    console.log('Iniciando..')
    
    while (formulario.querySelector('p.error')) {
        formulario.querySelector('p.error').remove();
    }
    email.classList.remove('border-green-500');
    asunto.classList.remove('border-green-500');
    msj.classList.remove('border-green-500');

    email.classList.remove('border-red-500');
    asunto.classList.remove('border-red-500');
    msj.classList.remove('border-red-500');

    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

// Validar formulario
function validarFormulario(e){
    
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (e.target.value.length > 0 ) {
        console.log('Hay algo');   
        eliminarError();     
                
        e.target.classList.add('border','border-green-500');

        if ( e.target.type === 'email') {
           if ( er.test(e.target.value) ) {
                eliminarError();
                e.target.classList.add('border','border-green-500'); /* Estilos desde framework */
                console.log('Email valido')
            } else {
                e.target.classList.remove('border','border-green-500');
                e.target.classList.add('border','border-red-500'); /* Estilos desde framework */                
                mostrarError('Email no es v??lido');
            }
        }

    } else {
        eliminarError();
        //e.target.style.borderBottomColor = 'red';   
        e.target.classList.remove('border','border-green-500')     
        e.target.classList.add('border','border-red-500'); /* Estilos desde framework */
        mostrarError('Todos los campos son obligarotios');
    }
    
    if (er.test(email.value &&  asunto.classList.contains('border-green-500') && msj.classList.contains('border-green-500')) { 
        console.log('Todos los campos son validos');  
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');  
    };
};

function eliminarError(){
    const error = formulario.querySelector('p.error');    
    if ( error ) { error.remove()} ;   
}


function mostrarError(msj){
    const msjError = document.createElement('p');
    msjError.textContent = msj;
    msjError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error'); /* Estilos desde framework */

    const errores = document.querySelectorAll('.error');
    // ( !errores.length ? formulario.insertBefore(msjError,document.querySelector('.mb-10')) : null );
    if ( errores.length === 0 ) {
        formulario.appendChild(msjError);
    };
}

// Envia el email
function enviarEmail(e){
    e.preventDefault();
    // mostrar spinner
    const spinner = document.querySelector('#spinner');  
    spinner.style.display = 'flex';
    
    let templateParams = {
        From_name: "EZamora",
        To: email.value,
        Subject: asunto.value,
        Body: msj.value
    };

    emailjs.send(/* */)
    .then( res => {
            // console.log('SUCCESS!', res.status, res.text);
            if (res.status === 200){
                spinner.style.display = 'none';
                alert(res.text);
                resetearFormulario(e);
            };
         }, err => {
            console.log('FAILED...', err);
            alert(err)
         });       
}

// Resetear formulario
function resetearFormulario(e){
    e.preventDefault();
    formulario.reset();
    inicarApp();
}
