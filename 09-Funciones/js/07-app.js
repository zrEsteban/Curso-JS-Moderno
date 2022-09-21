iniciarApp();

function iniciarApp() {
  console.log('...');
  
  segundaFunction();
}

function segundaFunction() {
  console.log('Hola desde la segunda function')
  usrAutenticado('Esteban');
}


function usrAutenticado(usuario){
  console.log('Autenticando usuario ... espere...')
  console.log(`Usuario Autenticado correctamente: ${usuario}`)
}