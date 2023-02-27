'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
//   let array = [1]
//   console.log(180%2);
//   console.log(180/2);
let array =[1]; //!, el array comienza en 1 
let divisor = 2;  //! el divisor comienza en 2 
while(num >1){ //!  mientras el num sea mayor a 1 hacer esto
  console.log(num);
  if(num % divisor ===0){   //! si (ingresado) es dividible por (2++) has esto 
    console.log(num % divisor);
    console.log(180 / divisor);
    console.log(divisor);
    num=num/divisor;
    console.log(num);
    array.push(divisor)
    divisor
  }else{
    divisor++
  }
}
return array
}
console.log(factorear(180));
// expect(factorear(180)).toEqual([1,2,2,3,3,5]);
//     expect(factorear(32)).toEqual([1,2,2,2,2,2]);
//     expect(factorear(33)).toEqual([1,3,11]);
//     expect(factorear(1)).toEqual([1]);


// num
//   while(num > 1){
  //     while(num%2 ===0){
//      console.log(num);
//      num = num/2;
//      array.push(2);
//      console.log(array);
//     }  
//     while(num%3 ===0){
//       console.log(num);
//       num = num/3;
//       array.push(3);
//      }
//      while(num%5 ===0){
//       console.log(num);
//       num = num/5;
//       array.push(5);
//      }while(num%11 ===0){
//       console.log(num);
//       num = num/11;
//       array.push(11);
//      }
//   return array
//   } 

// return array

// [4,  2,1,5,7,3]
//  i-1 i
function bubbleSort(array) { //! hiba de a pares hasta el final, y cambia la posciion si esta mal su ordenmaiento 
  for (let index = 0; index < array.length-1; index++) {   
    for (let i = 1; i < array.length; i++) {  
      if(array[i-1] > array[i]){ //! aca comparamos, si el primero es amyor se hace lo siguente
        let aux = array[i-1]; //! se guarda el primerm valor 
        array[i-1] = array[i];
        array[i] = aux
      }    
    }
  } 
  return array;
}

let a = [4,2,1,5,7,3]
//! [2,4,1,5,7,3]
//! [2,1,4,5,7,3]
//! [2,1,4,5,3,7]

console.log(bubbleSort(a));

//! tambien peude hacerce con true 
let c = [2,1,5,6,8,4]
c.push(2)
console.log(c);

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  //*  4 , 1 ,2,3,5
  //*     ^        
  for (let i = 1; i < array.length; i++) {
   let  j= i-1;
    let aux = array[i];

    while(j>= 0 && aux < array[j]){
      array[j+1] = array[j]
      j--;
    } 
    array[j+1] =aux;
  }
  return array;
}

//* [ 1  , 3 , 5 , 7 , 8]
//*                   i j      
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) { //! i= 1

    for (let j = i; j < array.length; j++) { //! j=0
      //! 
      if( array[i]> array[j]){ //! 
        let aux= array[i]; //!
        array[i] = array[j]; //! 
        array[j]= aux
      }
    }     
  }
   return array
}
// [1,7,8,5,6,3,2];
//  j i   
let aa = [5,7,8,3,6,2,1];
console.log(selectionSort(aa));


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
