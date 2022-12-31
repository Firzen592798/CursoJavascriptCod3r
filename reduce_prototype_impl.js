const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'tesoura', qtde: 1, preco: 19.2, fragil: true }
]

const meuArray = [
  1, 2, 3, 4, 5
]

//Implementando meu proprio método de reduce imitando o original
Array.prototype.meuReduce = function(fn, init){
  let acc = init
  for (let i = 0; i < this.length; i++) {
    if(!acc && i === 0){
      acc = this[i]
      continue
    }
    acc= fn(acc, this[i], i, this)
  }
  return acc
}

console.log(meuArray.meuReduce((acc, el) => acc + el))

console.log(meuArray.meuReduce((acc, el) => acc + el, 3))