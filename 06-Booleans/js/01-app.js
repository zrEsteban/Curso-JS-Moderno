const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1)
console.log(boolean2)

console.log(typeof(boolean1));

console.log(boolean1 == boolean3); // no estricto se comporta como estricto para booleans

const boolean4 = new Boolean(true); // crea un objeto
console.log(typeof boolean4);

