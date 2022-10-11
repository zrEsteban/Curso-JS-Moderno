(function(){
    
    const listadoClientes = document.querySelector('#listado-clientes');
    
    document.addEventListener('DOMContentLoaded', () => {
        crearDB();
        if(window.indexedDB.open('crm',1)){
            obtenerClientes();
        }    
        
        listadoClientes.addEventListener('click',eliminarRegistro);
    }); 

})();