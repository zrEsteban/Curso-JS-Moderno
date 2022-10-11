let DB;

function conectarDB(){
    const abrirConexion = window.indexedDB.open('crm',1);

    abrirConexion.onerror = function(){
        console.log('Hubo un error');
    };

    abrirConexion.onsuccess = function(){
        DB = abrirConexion.result;
        console.log('DB Conectada');
    }
}

function obtenerCliente(id){        
    const transaction = DB.transaction(['crm'],'readonly');
    const objectStore = transaction.objectStore('crm');
    console.log(objectStore);
    const cliente = objectStore.openCursor();

    cliente.onsuccess = function (e){
        const cursor = e.target.result;
        if (cursor) {            
            if(cursor.value.id === Number(id)){
                llenarFormulario(cursor.value);
            }
            cursor.continue();
        }
    }
};

function llenarFormulario(datosCliente){
    const {nombre, email, telefono, empresa } = datosCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    nombreInput.value = nombre;
    emailInput.value = email;
    telefonoInput.value = telefono;
    empresaInput.value = empresa;        
} 

function actualizarCliente(e){
    e.preventDefault();
    
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    let idCliente = JSON.parse(localStorage.getItem('idCliente'));    
    console.log(idCliente);

    if(nombreInput.value === '' || emailInput.value === '' || telefonoInput.value === '' || empresaInput.value === ''){
        imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }
    
    const clienteActualizado = {
        nombre : nombreInput.value,
        email : emailInput.value,
        empresa : empresaInput.value,
        telefono : telefonoInput.value,
        id : Number(idCliente)
    }

    const transaction = DB.transaction(['crm'],'readwrite');
    const objectStore = transaction.objectStore('crm');

    console.log(clienteActualizado);

    objectStore.put(clienteActualizado);

    transaction.onerror = function(){            
        imprimirAlerta('Hubo un error','error');
    }
        
    transaction.oncomplete = function(){        
        imprimirAlerta('El Cliente editado correctamente');
        localStorage.removeItem('idCliente')
        setTimeout(()=> {
            window.location.href = 'index.html'
        },2000);
    }
}   

function validarCliente(e) {
    e.preventDefault();

    // Leer Inputs
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const telefono = document.querySelector('#telefono').value;
    const empresa = document.querySelector('#empresa').value;

    if (nombre === '' || email === '' || telefono === '' || empresa === ''){
        imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }
    
    // Crear un obj con la informacion
    const cliente = {
        nombre,
        email,
        telefono,
        empresa           
    }
    cliente.id = Date.now();
    // console.log(cliente);
    crearNuevoCliente(cliente);
}

function crearNuevoCliente(cliente){
               
    const transaction = DB.transaction(['crm'],'readwrite');
    const objectStore = transaction.objectStore('crm');
    objectStore.add(cliente);

    transaction.onerror = function(){
        console.log('Hubo un error');
        imprimirAlerta('Hubo un error','error');
    }
    
    transaction.oncomplete = function(){
        console.log('Cliente Agregado');
        imprimirAlerta('El Cliente se agregó correctamente');
        setTimeout(()=> {
            window.location.href = 'index.html'
        },3000);
    }
}

function imprimirAlerta(mensaje,tipo){

    const alerta = document.querySelector('.alerta');
    
    if(!alerta){
        const divMsj = document.createElement('div');
        divMsj.classList.add('px-4','py-3','rounded','max-w-lg', 'mx-auto', 'mt-6', 'text-center','border','alerta');

        if (tipo === 'error'){
            divMsj.classList.add('bg-red-100','border-red-400','text-red-700');
        } else {
            divMsj.classList.add('bg-green-100','border-green-400','text-green-700');
        }
        divMsj.textContent = mensaje;
        formulario.appendChild(divMsj);

        setTimeout(()=>{
            divMsj.remove();
        },3000)
    }
}

// Elimina un registro de la base de datos
function eliminarRegistro(e){        
    const idEliminar = Number(e.target.getAttribute('data-cliente'));
    swal({
        title: "Deseas eliminar este cliente?",
        text: "Una vez eliminado no podrás obtener información de este cliente. Desde la base de datos",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            const transaction = DB.transaction(['crm'],'readwrite');
            const objectStore = transaction.objectStore('crm');
            objectStore.delete(idEliminar);

            transaction.oncomplete = function(){
                e.target.parentElement.parentElement.remove();
                swal("Cliente eliminado correctamente", {icon: "success",});
            };                

            transaction.onerror = function(){
                swal("Hubo un error", {icon: "failed", });
            };
        }
    });
};

    // Crea la base de datos de IndexDB
    function crearDB(){
        const crearDB = window.indexedDB.open('crm',1);

        crearDB.onerror = function(){
            console.log('Hubo un error');
        };

        crearDB.onsuccess = function(){
            DB = crearDB.result;
        };

        crearDB.onupgradeneeded = function(e){
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm',{
                keyPath: 'id',
                autoIncrement : true
            });

            objectStore.createIndex('nombre','nombre',{ unique:false});
            objectStore.createIndex('email','email',{ unique:true});
            objectStore.createIndex('telefono','telefono',{ unique:false});
            objectStore.createIndex('empresa','empresa',{ unique:false});
            objectStore.createIndex('id','id',{ unique:true});

            console.log('DB Lista y Creada');

        }
    }

    function obtenerClientes(){
        const abrirConexion = window.indexedDB.open('crm',1);
        abrirConexion.onerror = function(){
            console.log('Hubo un error');
        }   

        abrirConexion.onsuccess= function(){
            DB = abrirConexion.result;     
            const objectStore = DB.transaction('crm').objectStore('crm');
            
            objectStore.openCursor().onsuccess = function(e) {
                const cursor = e.target.result;

                if (cursor){
                    const {nombre,empresa,email,telefono,id} = cursor.value;
                    const listadoClientes = document.querySelector('#listado-clientes');
                    listadoClientes.innerHTML += `
                    <tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                            <p class="text-gray-700">${telefono}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                            <p class="text-gray-600">${empresa}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a> 
                            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                        </td>
                    </tr>
                `;                    
                    cursor.continue();
                }else {
                    console.log('No hay más registro ... ')
                }
            }
        }
    }