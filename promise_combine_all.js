function gerarNumerosEntre(min, max, tempo){
  if(min > max){
    [max, min] = [min, max]
  }

  return new Promise(resolve => {
    setTimeout(function() {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
      resolve(aleatorio);
    }, tempo)

  })
}

//Sincroniza as 4 promessas. O then só pode ser acionado quando todas elas forem concluidas
function gerarVariosNumeros(){
  return Promise.all([
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000),
  ])
}

console.time('promise')

gerarVariosNumeros()
  .then(console.table)
  .then(() => {
    console.timeLog('promise')
    console.timeEnd('promise')
  });