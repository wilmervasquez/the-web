let te = [
 
];



function agruparToArray(array) {
  let acumulado = array[0];
  if (!acumulado) return [];
  
  const list = [];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (acumulado.n === element.n) {
      acumulado.v += element.v
      continue;
    }
    list.push(acumulado)
    acumulado = element;
  }
  list.push(acumulado);
  return list;
}

console.timeEnd('plus') // 0.383
console.log(agruparToArray(te));
