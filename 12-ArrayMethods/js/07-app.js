const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Nociembre','Diciembre'];

// Concat 
const res = meses.concat(meses2,meses3)
console.log(res)

// spread operator
const res2 = [...meses,...meses2,...meses3, 'Otro Mes']
console.log(res2)