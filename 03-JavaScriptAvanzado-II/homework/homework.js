'use strict';


//CLOSURES

/* Ejercicio 1
La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando 
un valor numérico que empieza en 1 e incrementa con cada invocación.
EJEMPLO
const nuevoContador = counter()
nuevoContador()     // 1
nuevoContador()     // 2

const otroContador = counter()
otroContador()      // 1
otroContador()      // 2 */
function counter() {
var i= 0;
  return function(){
      i++;
      return i;
  }
} 
var hola = counter();

hola();
hola();
hola();

// como el de dai e isac


/* Ejercicio 2
Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback 
que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, 
al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar 
otra vez cálculos que ya se hicieron anteriormente.

- cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento;
 hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea 
  el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el 
  mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".

  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará
   (tip: si usaste un objeto, podés usar hasOwnProperty) */

   // medio complejo
function cacheFunction(cb) {// es una funcion cualquier que haga cualquier cosa
  var cache = {};
                //
 return function(arg){//? cache.hasOwnProperty(arg) 
  if(cache.hasOwnProperty(arg)){
    return cache[arg];
  }else{
    cache[arg]= cb(arg);
    return cache[arg];
  }
 };
}

//----------------------------------------

// Bind

var instructor = {
   nombre: 'Franco',
   edad: 25,
};

var alumno = {
   nombre: 'Juan',
   curso: 'FullStack',
};

function getNombre() {
  return this.nombre;}

/*
  Ejercicio 3
  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)
  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre 
  pero retornen el nombre del instructor y del alumno, respectivamente.
*/

let getNombreInstructor = getNombre.bind(instructor); // call, podemos usar los 3
let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 4
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, 
  tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, 
    respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

//----------------------------------------------------------------------------------------- */
function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
    return delimitadorIzquierda + cadena + delimitadorDerecha;
}
//  * un texto cualquier ( cadena) *
let textoAsteriscos = crearCadena.bind(null,"*","*");
let textoGuiones = crearCadena.bind(null,"-","-");
let textoUnderscore = crearCadena.bind(null,"_","_");

textoAsteriscos();
textoGuiones();
textoUnderscore();

console.log(crearCadena("Franco"))

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   counter,
   cacheFunction,
   getNombreInstructor,
   getNombreAlumno,
   textoAsteriscos,
   textoGuiones,
   textoUnderscore,
};

//                                                      ---------MI PRACTICA-----------

// Closures -----------  una fucion que retorna otra funcion

// function saludar(saludo){// "hola" 
//   return function (nombre){
//     console.log(saludo+ " " +nombre);
//   }
// }
//  var saludarhola = saludar("hola");
//                     //  function (nombre){ -------> aca recibe Dai
//                     //   console.log(saludo+ " " +nombre);
//                     // }
// saludarhola("Dai") ;// me sali :v
// saludarhola("Bruno")


// //quiero que salga bruno come arroz aver

// function brunox (bruno){
//   return function(comida){
//     console.log( bruno+ " come " + comida)
//   }
// }
// var fucionbruno = brunox("alex");
// fucionbruno("arroz");
// fucionbruno("Platano");
// fucionbruno("manzana");
// ;

// // ahora dai hermosa :v
//  function decirle (nombre3){
//   return function(quees){
//     return (nombre3 + ' ' +quees);
//   }
//  }
//  var brunodice = decirle('dai');
//  console.log(brunodice('hermosa'))


// var crearfuncion = function(){
//     var nuevoarray = []// [fn, fn, fn]
//     // mi array vacio
//     for (let i= 0; i < 3; i++) {
//         // i= 0
//       nuevoarray.push(
//               function() {
//                   console.log(i)
//                   }
//         )
//     }
//     return nuevoarray; //[ fn , fn , fn]
//   }
// var arr = crearfuncion(); // [fn, fn , fn]
//  arr[0]() 
//  arr[1]() 
//  arr[2]() 

//  console.log(arr[0])

//                                      BIND
// var alumno = {
//   name : 'Bruno',
//   last: 'Gonza',
// }

// var logueaName = function(){
//   console.log(this);
// }

// var logNanmeAlumno = logueaName.bind(alumno);  // me devuelve una funcion

// logNanmeAlumno();

//                                      CALL                 -----------> a donde mira
// var alumno = {
//   name : 'Bruno',
//   last: 'Gonza',
// }

// var logueaName = function(){
//   console.log(this.name);
// }

// logueaName.call(alumno);// solo a donde quiero que mire el this, 

// let lognombre = function(arg1, arg2){
//     console.log( arg1 + ' '+ this.name + arg2);
//   }
//   lognombre.call(alumno, 'Hola',  ' como estas');  

//                                  APLLY

//        lognombre.apply(alumno, ['Hola',  ' como estas']);  SOLO QUE ESTAS EN LLAVES

