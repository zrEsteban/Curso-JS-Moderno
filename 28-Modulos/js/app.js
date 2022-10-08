import _, { nombreCliente,ahorro, mostrarInformacion, tieneSaldo, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

_();

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente,ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente,ahorro);

console.log(cliente.mostrarInformacion())

// Importar empresa
const empresa = new Empresa('EZAM',100,'Inspecciones Técnicas');
console.log(empresa);

console.log(empresa.mostrarInformacion());


