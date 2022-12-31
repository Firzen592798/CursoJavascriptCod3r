
//Promessa é algo que vai ser definido no futuro, coloca uma função que recebe outra função como parametro e chama essa função
let p = new Promise(function(cumprirPromessa){
  cumprirPromessa(3)
});

let p2 = new Promise((fn) => fn(2));


//Para acessar o valor da promessa, usa-se o then, passando uma função como parâmetro que receba o valor resultado da promessa
p.then(function(valor){
  console.log(valor)
})

p2.then(function(valor){
  console.log(valor)
})


let p3 = new Promise(function(resolve){
  resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
});

//As promises podem ser encadeadas, o resultado de um then é passado para o proximo
p3.then(valor => valor[0])
  .then(primeiro => primeiro[0])
  .then(letra => console.log(letra))