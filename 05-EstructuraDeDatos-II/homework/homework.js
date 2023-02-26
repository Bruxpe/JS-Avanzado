'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo 
   valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
}

function Node(value) {
  this.value = value;
  this.next = null ;
}


LinkedList.prototype.add = function(value){ // le pasamos el 10
  let nodo = new Node(value);  //! crea el nmod { data: 10 ; next: null}
  let current = this.head; //! current --> { data 5,  next : null}

  if(current === null){ //!
    this.head = nodo;
    return; //! aca termina , es por eos que usa el return y nunca pasa abajo 
  }
  
  while(current.next){ 
    current = current.next
  }

  current.next = nodo; //! aca entra el nodo 
  
}


LinkedList.prototype.remove = function(){
  let current = this.head
  let previous = null;
  let last = null;

  if (current === null){
    return ;
  }
  if (current.next === null){
    previous = current
    this.head=null
    return previous.value;
  }
  
  while(current.next){
    previous = current;
    current = current.next
  }
 
  last = current;
  previous.next = null;
  return last.value;

}

//   while (current){ 
//     if(typeof value === "function"){
//     if(value(current.value)) return current.value 
//     }
//     else {
//     if(current.value === value) return current.value
//     }
//     current = current.next;
//   }
//   return null;
// };
LinkedList.prototype.search = function(value){ //! aca entra el 5, ahora hayq ue busacarlo a laa fifi
  let current = this.head;
  let previous = null;


  if(!current) return;

  try{
    while(current.value != value){ //! en la primera busacamos si el rimer data, es el valor
      if(typeof value === 'function'){
        if(value(current.value)) return current.value // si lo que me devuelve es true, si esto salio bien, retorna el parametro, en si te dara
      }
      previous = current //! al no suceder esto, tomamos un previus, 
      current = current.next //! y hacemos que current pase al siguiente, hasta que lo encuentr
    }
    console.log(current)
    console.log(current);
    return current.value;
  }catch(error){
    return null
  }
}


//!charCodeAt

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos 
datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para 
  que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)
La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método
    charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando 
set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.table = []
  this.numBuckets = 35;
}


HashTable.prototype.hash = function (value){
  if( typeof clave === "boolean") return 'Keys must be strings'
  let suma = 0;
  for (let i = 0; i < value.length; i++) {
  suma = suma + value[i].charCodeAt()
  }
  suma = suma%35;
  return suma
}

// HashTable.prototype.set=function(value,value2){ //   { key : valor}
//   if(typeof  value !== "string"){
//     throw TypeError("El value debe ser String")
//   }

//     let num = this.hash(value); // num = 25       25
//     if(!this.table[num]){ // [  {"Bruno" : 25x}  ]
//       console.log(this.table[num])
//       this.table[num] = {};
//     }
//     this.table[num][value] = value2 ;  
//     }

HashTable.prototype.set = function (clave , valor){
  
  if(typeof  clave !== "string"){
    throw TypeError("El value debe ser String")
   }
    let numB = this.hash(clave)
   
  if (!this.table[numB]){
    this.table[numB] = {}
    this.table[numB][clave] = valor
    return this.table
  }else{
    this.table[numB][clave]=valor
  }

}



// get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
HashTable.prototype.get = function (clave){

let numB = this.hash(clave);
let valor = Object.values(this.table[numB])
let claves =Object.keys(this.table[numB])
let aca = 0;

while (clave != claves[aca]){
  aca++
}

return valor[aca]; 
}

// - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).
// Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando 
// set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)

HashTable.prototype.hasKey = function (clave){    //! clave : valor
  let numB = this.hash(clave)

if(Object.keys(this.table[numB]) == clave) return true
return false
}



// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
//------------------------------------------------------------------------------------------------------------------------------------------------------
// 'use strict';

// const year = 2022
// const holidays = ['01/06', '04/01', '12/25'] 

// console.log("bruno".split("r"))



// /* EJERCICIO 1
// Implementar la clase LinkedList, definiendo los siguientes métodos:
//   - add: agrega un nuevo nodo al final de la lista;
//   - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
//   - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
//     En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, 
//     al ser pasado como parámetro del callback, retorne true. 
//   EJEMPLO 
//   search(3) busca un nodo cuyo valor sea 3;
//   search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
//   En caso de que la búsqueda no arroje resultados, search debe retornar null.
// */
// function LinkedList(value) {
//   this.head = null;//{data: 5, next=null}
// }

// function Node(value) {
//   this.data= value;
//   this.next = null;
// }

// LinkedList.prototype.add = function(value) { 
//   let nodo = new Node(value);  
//   let current = this.head 

//   if (!current ){
//     this.head = nodo
//     return nodo    
//   }

//   while (current.next ){
//     current = current.next
//   }

//   current.next = nodo;
//   return nodo
// }

// LinkedList.prototype.remove = function(){
//   let current = this.head; 
//   let previous = null; 
//   let last = null;

//   if (!current) {   
//     return null;
//   }

//   while (current.next) {//

//   previous = current; // aca nos quedamos con el cureent, para que este avance

//   current = current.next; //!aca se ve que, current ya aesta uno mas adeltante del previus 
// }

// last = current.data //! aca estamos hubicado al final, y last toma su valor

// if (!previous) { //! si el previus esta vacio 
//   this.head = null;
// } else {
//   previous.next = null;
// }
// console.log(last)
  
//   return last;
// };

// // - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. 
// // En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, 
// // al ser pasado como parámetro del callback, retorne true. 

// LinkedList.prototype.search = function(value){ // 5
//   let current = this.head;

  
//   while (current){ 
//     if(typeof value === "function"){
//     if(value(current.value)) return current.value 
//     }
//     else {
//     if(current.value === value) return current.value
//     }
//     current = current.next;
//   }
//   return null;
// };


// let Nuervolista = new LinkedList()
// Nuervolista.add(5)
// Nuervolista.add(2)


// console.log(Nuervolista.search(5))



// Nuervolista.remove()
// Nuervolista.remove()
// Nuervolista.remove()

// console.log(Nuervolista)


// /* EJERCICIO 2
// Implementar la clase HashTable.
// Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar 
//   la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
// Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, 
//   pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

// La clase debe tener los siguientes métodos:
//   - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada 
//   caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de 
//   esta manera determina la posición de la tabla en la que se almacenará el dato.
//   - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto 
//   en el bucket correcto.
//   - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
//   - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

// Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el 
// nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear 
//   la clave)
// */
// function HashTable() {
// this.table = [];
// this.numBuckets = 35;
// }

// console.log("bRUNO".charCodeAt())
// console.log("bruno".length)
// console.log(560%35)
// console.log("bruno".charCodeAt(0))
// console.log("Bruno".charCodeAt(1))
// console.log("Bruno".charCodeAt(2))
// 98
// console.log("b".charCodeAt())
// console.log("r".charCodeAt())
// console.log("u".charCodeAt())
// console.log("n".charCodeAt())
// console.log("o".charCodeAt())
// 98/35 
// console.log(98%35)
// HashTable.prototype.hash=function(value){ //"bruno"
//   let num = 0;// let = 0
//   for (let i = 0; i < value.length; i++) { // i < 5
//     num = num + value.charCodeAt(i) // 98 + 114 +117 +110 +111
//     console.log(num)// 560
//   }
//   console.log(num%this.casillas)
//   return num%this.numBuckets;// 553 % 35 --> 0
  
// }
// let nuevito = new HashTable()


//                                 // "bruno" // 25x
// HashTable.prototype.set=function(value,value2){ //   { key : valor}
//   if(typeof  value !== "string"){
//     throw TypeError("El value debe ser String")
//   }
//     let num = this.hash(value); // num = 25       25
//     if(!this.table[num]){ // [  {"Bruno" : 25x}  ]
//       console.log(this.table[num])
//       this.table[num] = {};
//     }
//     this.table[num][value] = value2 ;  
//     }

//   let xx = new HashTable()
//   xx.set("bruno", 25)
//   xx.set("bruno", 15)
//   xx.set("rbuno", 0)
//   console.log(xx.table)

//   HashTable.prototype.get=function(value){
//     let num = this.hash(value);
//     return this.table[num][value]
//   }


//   HashTable.prototype.hasKey=function(value){
//     let num = this.hash(value);
//     return this.table[num].hasOwnProperty(value)  
//   }


// // No modifiquen nada debajo de esta linea
// // --------------------------------

// module.exports = {
//    Node,
//    LinkedList,
//    HashTable,
// };
