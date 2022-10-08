// Map, lista ordenada en llave y valor, son como objetos pero de 1 propiedad.
// Mejor performance que un objeto

const cliente = new Map();

cliente.set('nombre','Karen');
cliente.set('tipo','Premiun');
cliente.set('Saldo',3000);

cliente.set([0],true);

console.log(cliente.size);
console.log(cliente.has('Karen'));
console.log(cliente.has('nombre'));

console.log(cliente.get('nombre'));

cliente.delete('Saldo');

console.log(cliente.has('Saldo'));
console.log(cliente.get('Saldo'));



cliente.clear();

const Paciente = new Map([['nombre','Paciente'],['cuarto','no definido']])

Paciente.set('Dr','Dr Asignado');
console.log(Paciente);

Paciente.set('nombre','Anotnio');

console.log(Paciente);

Paciente.forEach(dato,index  => {
    console.log(index);
})