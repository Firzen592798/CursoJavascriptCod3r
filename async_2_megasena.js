//Gera um número aleatório, rejeita se for um número proibido
function gerarNumerosEntre(min, max, numerosProibidos){
  if(min > max) [max, min] = [min, max]
  return new Promise((resolve, reject) => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    if(numerosProibidos.includes(aleatorio)){
      reject('Numero repetido!')
    }else{
      resolve(aleatorio);
    }
  })
}

//Gera os n números da loteria, para cada reject no método gerarNumerosEntre, tenta chamar a função de novo até estourar, se não conseguir em 10 tentativas, da um throw
async function gerarMegaSena(qtdeNumeros, tentativas = 1){
  try{
    const numeros = []
    for(let _ of Array(qtdeNumeros).fill()){
      numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros
  }catch(e){
    if(tentativas > 10){
      throw "Não deu certo!"
    }else{
      return gerarMegaSena(qtdeNumeros, tentativas + 1)
    }
  }
}

gerarMegaSena(6)
  .then(console.log)
  .catch(console.log)