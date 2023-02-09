'use strict';

function BinarioADecimal(num) {
   var resultado = 0;
   var indice= num.length-1;
   console.log(num.length-1)
   for (let i = 0; i < num.length; i++) {
      resultado = resultado + (num[i]*2** indice );
      console.log(num[i])
      indice = indice- 1;
      console.log(num[i])
   }
   return resultado;
  
}
console.log(BinarioADecimal('111')); // debe retornar 12

function DecimalABinario(num) {
   let resultado="";
   console.log(resultado)
   while( num > 0){
   console.log(num%2+resultado)
   resultado = (num %2) + resultado;
   console.log(Math.floor(num/2))
   num = Math.floor(num/2);
   
   }
   return resultado;


}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
