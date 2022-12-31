function funcionarOuNao(valor, chanceErro){
  return new Promise((resolve, reject) => {
    try {
      if(Math.random() < chanceErro){
        reject('Ocorreu um erro!')
      }else{
        resolve(valor)
      }
    }catch(e){
      reject(e)
    }
  })
}

//Pode ser encadeado varios then e fazer um catch geral no final
//Também pode tratar um then específico passando o segundo parâmetro como sendo o tratametno do erro
funcionarOuNao('Testando...', 0.9)
  .then(v => `valor: ${v}`)
  .then(v => consol.log(v), 
          err => console.log(`Erro especifico: ${err}`)
  )
  .catch(e => console.log(`erro: ${e}`))
  .then(() => console.log('FIM!'))