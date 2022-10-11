(function(){

    // let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        formulario.addEventListener('submit', validarCliente);
        conectarDB();        
    });
            
})();