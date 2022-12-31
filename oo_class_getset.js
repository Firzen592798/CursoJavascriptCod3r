//Mesma coisa do oo mas criando como classe
class Produto{
  constructor(nome, preco, desc = 0.5){
    this._nome = nome
    this._preco = preco
    this._desc = desc
  }

  //O get permite chamar a função como um atributo!
  get precoFinal(){
    return this._preco * (1 - this._desc)
  }

  get nome(){
    return `Produto ${this._nome}`
  }
  //O set permite setar o atributo e definir uma funcao pra isso!
  set nome(novoNome){
    this._nome = novoNome.toUpperCase()
  }

  get preco(){
    return preco
  }

  set preco(novoPreco){
    if(novoPreco >= 0){
      this._preco = novoPreco
    }
  }
}

const p1 = new Produto('Caneta', 8.5)
p1.nome = 'Caneta'
p1.preco = -10
console.log(p1)

const p2 = new Produto('Geladeira', 2345.98)
console.log(p2.nome)
console.log(p2.precoFinal)