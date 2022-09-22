const usr = false;
const puedePagar = false;

if (usr && puedePagar) {
    console.log('Si puedes comprar');
} else if (!puedePagar && !usr){
    console.log('No puedes comprar');
} else if (!usr){
    console.log('Inicia sesion o saca una cuenta');
} else if (!puedePagar){
    console.log('Saldo Insuficiente');
}
