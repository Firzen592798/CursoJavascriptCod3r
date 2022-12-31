//Map básico
const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.50 },
  { nome: 'Caderno', qtde: 4, preco: 27.10 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'tesoura', qtde: 1, preco: 19.2 }
]

const getTotal = n => n.qtde * n.preco;
const getNome = n => n.nome;
const totais = carrinho.map(getTotal);
const nomes = carrinho.map(getNome);

console.log(nomes)
console.log(totais)

//Criando o proprio map com o prototype adicionando a propriedade meuMap a um array
Array.prototype.meuMap = function(fn){
  const novoArray = []
  for (let i = 0; i < this.length; i++) {
    const resultado = fn(this[i], i, this)
    novoArray.push(resultado)
  }
  return novoArray
}

console.log(carrinho.meuMap(getNome))
console.log(carrinho.meuMap(getTotal))