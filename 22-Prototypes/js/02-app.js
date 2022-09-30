function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const Esteban = new Cliente('Esteban',500);

function formatearCliente (cliente){
    const { nombre , saldo } = cliente;
    return `El Cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa (empresa){
    const { nombre , saldo, categoria } = empresa;
    return `El Cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(Esteban));

function Empresa (nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;    
}

const EZAM = new Empresa('Codigo con Juan', 4000, 'Inspecciones Técnicas')

console.log(formatearCliente(EZAM))

console.log(formatearEmpresa(EZAM))