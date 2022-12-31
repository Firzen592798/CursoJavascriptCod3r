//Uso do await para esperar promise ser executada
function esperarPor(tempo = 2000){
  return new Promise(function(resolve){
    setTimeout(() => resolve(), tempo)
  })
}

function retornarValor(){
  return new Promise(resolve => {
    setTimeout(() => resolve(10), 5000)
  })
}

async function executar(){
  let valor = await retornarValor();
  await esperarPor(2000)
  console.log('async')
}

executar()