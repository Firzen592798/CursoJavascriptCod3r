console.log('teste');

//Implementando o calcular como uma composição de funções, passa primeiro o numero 1, depois o 2 depois a função
function calcular(a){
  return function(b){
    return function(fn){
      return fn(a, b);
    }
  }
}

function somar(a,b){
  return a + b;
}

const multiplicar = (a,b) => a + b;

console.log(calcular(3)(5)(somar));