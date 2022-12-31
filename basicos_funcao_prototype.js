
//curring totalmente construido com arrow function
const potencia = base => exp => Math.pow(base, exp);
  
//somar uma quantidade indefinida de elementos usando o operador spread
const somar = (...numeros) => {
  let total = 0
  for(let n of numeros){
    total+=n
  }
  return total
}

Array.prototype.log = function(){
  console.log(this);
}

Array.prototype.primeiro = function(){
  console.log(this[0]);
}


const numeros = [1, 2, 3];

numeros.log();

console.log(somar(3,4,5))

console.log(potencia(4)(3))