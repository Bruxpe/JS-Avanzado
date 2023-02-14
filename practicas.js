// este es JS avanzado 
//                           THIS          THIS     THIS      THIS 
/* console.log(2+2)

function Persona(nombre){
    this.nombre = nombre;
    this.amigos = ["Kevin", "Magali"]
    console.log(nombre);
}

Persona.prototype.saludar = function(){
    console.log("Hola, mi nombre es", this.nombre); 
}

Persona.prototype.mostrarAmigos = function(){
    var that = this;
    this.amigos.forEach(function(amigos){
        console.log(amigos, "es amigo de ", that.nombre);
    });
}

var newPersona= new Persona("Jorge");
newPersona.saludar();
var miFuncion = newPersona.saludar;
 console.log(newPersona);
newPersona.mostrarAmigos();
console.log(this);  */


/************************************************************************************************************************** */

//                                                  CLOSURES
//cuando nos encontramos,
// UN FUNCION..
// QUE RETORNA UNA FUNCION..
// LA FUNCION RETORNADA UTILIZA UNA VARIBLE DE UN CONTEXTO MAYOR 


/* function crearsaludo(saludo){
    return function(nombre){
        console.log(saludo , nombre);   
    }
    
}

 
var saludarhola = crearsaludo("Hola");
saludarhola("Jorge"); */

/*crearsaludo("hi");
crearsaludo("holis"); */

/* ----------------------------------------------------------------------------------------------- */ 
                    // CLOSURES - CONTADORES

/* function crearcontador(){
    var count = 0;
    return function(){
        count ++;
        return count;

    }
}
var contador1 = crearcontador();  //  Y NOP UEDES MODIFICAR EL CONTADOR
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador1());

var contador2 = crearcontador();
console.log(contador2());

*/
/* ---------------------------------------------------------------------------------------------------------*/
//                       Bind CALL % Aplly    
/*
var persona = {   // es un objeto    // QUEDA COMO UN LAZO, HAYQ UE VERLO 
    
    apellido: "Torers",
    nombre : "Claudia",
 };
var perro = {
    nombre :"fifo",
    edad: 50
}
 var logNombre = function(){
    console.log(this.nombre);
 }


 var logNombrePersona = logNombre.bind(persona); // una copia de lognombre pero con un this definido
 var logNombrePerro = logNombre.bind(perro);
 
 logNombrePersona();
 logNombrePerro();
  */
 
 /* **********************************************************************************  */
 /*                                     CALL
 var persona = {   // es un objeto 
    apellido: "Torers",
    nombre : "Claudia",
 };
var perro = {
    nombre :"fifo",
    edad: 50
}
 var logNombre = function(edad){
    console.log(this.nombre, "tiene", edad);
 }
logNombre.call(persona, 25);
logNombre.call(perro,30);

*/
/* **************************************************************************************  */
//                                        APLY
var persona = {   // es un objeto 
    apellido: "Torers",
    nombre : "Claudia",
 };
var perro = {
    nombre :"fifo",
    edad: 50
}
 var logNombre = function(edad, metodoramdon){
    console.log(this.nombre, "tiene", edad, metodoramdon);
 }
 var parametros = [30, "Hola"]  // un array
 logNombre.apply(persona,parametros) 
 
//para que nos srive en lo general, ES PARA QUE EL THIS SEPA QUIEN ES 

