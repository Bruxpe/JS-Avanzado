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


function crearsaludo(saludo){
    return function(nombre){
        console.log(saludo , nombre);   
    }
    
}

 
var saludarhola = crearsaludo("Hola");
saludarhola("Jorge");

/*crearsaludo("hi");
crearsaludo("holis"); */

