function esperarPor(tempo = 2000){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('executando')
      resolve('Vishiii')
    }, tempo)
  });
}

let p = esperarPor(3000);
p.then(3000).then(texto => console.log(texto))