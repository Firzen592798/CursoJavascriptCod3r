const carrinho = [
  { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'tesoura', qtde: 1, preco: 19.2, fragil: true }
]

// 1. fragil: true
// 2. qtde: 4, preco: 27.10 -> total
// 3. media totais

const fragil = n => n.fragil

const total = n => n.qtde * n.preco

//Retorna um objeto com informações auxiliares para calcular a média
const getMedia = (acc, el) => {
  return {
    qtde: acc.qtde + 1,
    total: acc.total + el,
    media: (acc.total + el) / (acc.qtde + 1)
  }  
}

console.log(carrinho.filter(fragil)
  .map(total)
  .reduce(getMedia, {qtde: 0, total: 0, media: 0}));