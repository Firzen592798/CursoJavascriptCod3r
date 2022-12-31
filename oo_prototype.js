//Funcao construtora, classe como função
function Produto(nome, preco, desc = 0.5){
  this.nome = nome
  this.preco = preco
  this._desc = desc
  this.precoFinal = function(){
    return this.preco * (1 - this._desc)
  }
}

Produto.prototype.log = function(){
  console.log(`Nome: ${this.nome}, Preço R$ ${this.preco}`)
}

//Define o set e o get de uma propriedade que ainda não existe, para que possa ser acessada como um atributo
Object.defineProperty(Produto.prototype, 'desc', {
  get: function(){
    return this._desc
  },
  set: function(novoDesc){
    if(novoDesc >= 0 && novoDesc <= 1){
      this._desc = novoDesc
    }
  }
});

Object.defineProperty(Produto.prototype, 'descString', {
  get: function(){
    return `Desconto: ${this._desc}`
  }
});

const p1 = new Produto('Caneta', 10)
console.log(p1.nome)
p1.log()

console.log(p1.desc)
console.log(p1.descString)
p1.desc = 2
console.log(p1.desc)
p1.desc = 0.3
console.log(p1.desc)