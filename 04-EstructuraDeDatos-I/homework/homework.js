'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y 
segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del
 último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 
            0 1   2  3   4  5 6   7             

Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
if (n === 0 || n === 1) return 1;
else {return n*nFactorial(n-1)}
}

console.log(nFactorial(5));


function nFibonacci(n) {//7
  if (n ===0 ) return 0;
    if (n ===1) return 1 ;
//                  fino 6      fino 5
    return nFibonacci(n-1) + nFibonacci(n-2);
}
console.log(nFibonacci(7))


var asas = [1,2,3,4,5];

asas.unshift(10) // mete al comienzo
console.log(asas)

asas.shift()  //saca deñ cp,eomzp 
console.log(asas)

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. 
Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.arra = [];
}
console.log(Queue)

Queue.prototype.enqueue= function(valor){ // mete al final, como una fila 
  this.arra.push(valor);
}

Queue.prototype.dequeue = function(){ //saca del comienzo
  if (this.arra.length < 0) return undefined;
  if (this.arra.length > 0) return this.arra.shift();
}

//Queue.prototype.dequeue = function () {
//   return this.arr.shift();
// };

Queue.prototype.size = function(){
  return  this.arra.length;
}

var brunoiontento = new Queue()
console.log(brunoiontento.arra.length)
console.log(brunoiontento.size());

console.log(brunoiontento)
brunoiontento.enqueue(5);// mete 5
console.log(brunoiontento)
brunoiontento.dequeue(5);// sacas 5
console.log(brunoiontento)
brunoiontento.enqueue(5);// mete 5
brunoiontento.enqueue(6);// mete 6
console.log(brunoiontento)
console.log(brunoiontento)
console.log(brunoiontento)


console.log(brunoiontento.size());


/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};


//                          RECURSIÍON

// function contarnumeros(num){
//  console.log(num);
//  if(num ===0 ){
//    return "termino";
//   }
//   contarnumeros(num - 1)
// }
// contarnumeros(10);

// function factorial(mun){
//     if(mun ===0 || mun ==1 ) {
//       return 1
//     }
//     return mun * factorial(mun-1);
// }

// factorial(5);
// console.log(factorial(5))
//---> 5-4-3-2-1
//    5¡ => 5*4¡
//    4¡ => 4*3¡
//    3¡ => 3*2¡
//    2¡ => 2*1¡
//    1¡ => 1


function sumar (m){

}


//5 --> 1 +2 +3 +4+5

//                                                                ARRRAY  
// set nunca tomara elementos repetidos

// var miset = new Set();

// miset.add(5);
// miset.add(15);
// miset.add(35);
// miset.add(35);

// console.log(miset)

// var miarr = new Array();

// miarr.push(5);
// miarr.push(5);
// miarr.push(5);

// console.log(miarr);

//                                                                FIFO              -> tu creastes el array por eso los dos 

// LIFO EL ULTIMO QUE ENTRO ES EL PRIMERO EN SALIR 


// esta estack va a ser una clase
// miStack => INSTANCIA de la clase Stack
//      ¡objetos = PROPIEDADES Y METODOS
// METODOS ------------------> QUE PUEDE HACER ESTE OBJETO                 puede agragar un elemento, y SACAR un elemento 
//¡ AGREGAR Y SACAR VAN A ASER METODOS====> son funciones 

//! para representar la pial vamos a usar un ARRAY
//                                                              arrays, EJEMPLOSSSSSSS
function Stack(){
  this.arr =[]; //! Propiedad
}

Stack.prototype.push = function (value){
  this.arr.push(value);
};

Stack.prototype.pop = function(){
  this.arr.pop()
};

var mistack = new Stack();

console.log(mistack);

mistack.push(5);

console.log(mistack);

mistack.pop();

console.log(mistack);



// var brustack = new Stack();

// brustack.push(10);
// brustack.push(10);
// brustack.push(10);

// console.log(brustack);
// brustack.pop();
// brustack.pop();
// console.log(brustack);

// //                                                  QUEUE
//                                            REPASO -- PROFE

// function Persona(nombre, edad){
//       this.nombre = nombre;
//       this.edad = edad;
// }

// var studiante = new Persona("Bruno", 5 ); //es una instancia 

// console.log(studiante)

