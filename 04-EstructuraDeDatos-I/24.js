const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)


const b=2 ;
console.log(b*2);

console.log(wrapped)

function wrapping(gifts) {


    for (let i = 0; i < gifts.length; i++) {
      var ast = "*" ;
      var asteriscos = ast.repeat(gifts[i].length+2)
     gifts[i]= asteriscos +"\n"+"*"+gifts[i]+"*"+"\n"+asteriscos;
     console.log(asteriscos)
   }
     return gifts
   }

console.log(gifts[0])  
console.log(gifts) 



var ast = "*" ;
var c = ast.repeat(5);
console.log(c)