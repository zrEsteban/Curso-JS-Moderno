const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre'];

console.table(meses);

meses[0] = 'Nuevo Mes';
meses[11] = 'Last Month';

meses[13] = 'Last Month';

for (let i = 0; i <meses.length; i++){
    console.log(meses[i]);
}