'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) { //! aca le damos un array 
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot = array[Math.floor(Math.random()*array.length)];
  let left = [];
  let right = [];
  let equals = [];
  if (array.length <=1 ){return array} //! es nuestr base donde, subira para ti. 
  //! aca tengo un array y un povit, pienso que deberia poner un arrya y separar-->

  for (let i = 0; i < array.length; i++) {
    if(array[i]<pivot) left.push(array[i])
    if(array[i]>pivot) right.push(array[i])
    if(array[i]===pivot ) equals.push(array[i])
  } //! hasta este for nosotros ya hemos ordenado en 3 array
  
  return quickSort(left).concat(equals).concat(quickSort(right))  //! ya esta ordenado, como nosotros podemos recibir arrays tbm, entonces hacemos recursio, ya que tenemos el codigo
 
} 

//


var a = [5,5, 1, 4, 2, 8];
console.log(quickSort(a));
console.log(Math.floor(Math.random()*a.length));



function mergeSort(array) {

  if (array.length <= 1) {
    return array;
  }
  
  // Divide el array en dos mitades
  var medio = Math.floor(array.length / 2);
  var left = array.slice(0, medio);
  var right = array.slice(medio);

  // Aplica merge sort recursivamente a cada mitad
  left = mergeSort(left);
  right = mergeSort(right);
  
  // Mezcla las dos mitades ordenadas en un solo array ordenado
  var nuevo = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      nuevo.push(left.shift());
    } else {
      nuevo.push(right.shift());
    }
  }
  return nuevo.concat(left, right);
}

  
// expect(mergeSort([5, 1, 4, 2, 8])).toEqual([1, 2, 4, 5, 8]);
// expect(mergeSort([10, 10, 16, 12])).toEqual([10, 10, 12, 16]);
// expect(mergeSort([10, -2, -7, 4])).toEqual([-7, -2, 4, 10]);       
a=[5, 1, 4, 2, 8]
console.log( mergeSort(a));
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
