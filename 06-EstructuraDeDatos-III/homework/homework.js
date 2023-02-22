'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro 
  ("post-order", "pre-order", o "in-order"). 
   Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
} 

BinarySearchTree.prototype.insert = function(value){

   if( value < this.value){
      if(this.left){//! si su izquierda no esta vacia
         this.left.insert(value);
      }else{ //! si su izquierda esta vacia
         this.left = new BinarySearchTree(value)
         return;
      }
   }else{
      if(this.right){   //! si su derecha no esta vacia
         this.right.insert(value)
      }else{  //! si su derecha esta vacia
         this.right = new BinarySearchTree(value)
         return; 
      }
      return value;
   }

}


BinarySearchTree.prototype.size  = function(){
   let counter = 1;
   if(this.left){                   //! si su izquiera no esta vacia
      counter += this.left.size()
   }
   if(this.right){//! si su derecha no esta vacia
      counter += this.right.size();
   }
   return counter;
};
   // resolucion mas simple 
   // if( this.value === null) return null;
   // if(!this.left && !this.right) return 1;
   // if(this.left && !this.right) return 1+ this.left.size();
   // if(!this.left && this.right) return 1+ this.right.size();
   // if(this.left && this.right) return 1+ this.right.size() + this.left.size(); 




BinarySearchTree.prototype.contains  = function(value){   //! aca entra 1 
   if (value=== this.value) return true ;

   if(value < this.value){
      if(!this.left) return false;
      else return this.left.contains(value) 
   }else{
      if(!this.right) return false;
      else return this.right.contains(value)
   }
}

   //    console.log(this.value);
//    console.log(value);
//    if (this.value === value) { //! como 1 no es giual al nodo raiz, pasa al siguietne 
//       return true; // Si el valor actual es igual al valor buscado, retorna verdadero
//     } else if (value < this.value && this.left) { //! 1 si es mejor que su valor 
//       console.log(value);
//       console.log(this.value);
//       // Si el valor buscado es menor que el valor actual y el nodo actual tiene un hijo izquierdo, busca en el subárbol izquierdo
//       return this.left.contains(value);
//     } else if (value > this.value && this.right) {
//       console.log(value);
//       console.log(this.value);
//       // Si el valor buscado es mayor que el valor actual y el nodo actual tiene un hijo derecho, busca en el subárbol derecho
//       return this.right.contains(value);
//       console.log(value);
//     } else {
//       return false; // Si el valor buscado no se encuentra en el árbol, retorna falso
//     }
  
// }

var newtre = new BinarySearchTree(10)
console.log(newtre);
newtre.insert(7)
newtre.insert(6)
newtre.insert(5)

console.log(newtre.contains(5));


BinarySearchTree.prototype.depthFirstForEach  = function(cb , order){
   if(order ==='in-order' || order=== undefined){ //! izquierda nodo derecha
      if(this.left /*&& this.left.depthFirstForEach(cb,order)*/) this.left.depthFirstForEach(cb,order)
      //    tru         si el primero da true, llama al segundo 
      cb(this.value)
      if(this.right /* && this.right.depthFirstForEach(cb,order)*/)  this.right.depthFirstForEach(cb,order)
      // que este adentro del if o afeura es lo mismo 
   }
   if(order ==='post-order' ){ //! ziquierda derecha nodo
      if(this.left ) this.left.depthFirstForEach(cb,order)
      if(this.right )  this.right.depthFirstForEach(cb,order)
      cb(this.value)
   }
   if(order ==='pre-order'){ //! nodo, izquirda , derecha
      cb(this.value)
      if(this.left )this.left.depthFirstForEach(cb,order)
      if(this.right)  this.right.depthFirstForEach(cb,order)
   }
   return
}

BinarySearchTree.prototype.breadthFirstForEach  = function(cb,value=[]){//defaul, lo creo 

   if(this.left !== null) value.push(this.left)

   if(this.right !== null) value.push(this.right)

   cb(this.value)

   if (value.length > 0){
      value.shift().breadthFirstForEach(cb,value )
   }
}





// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
