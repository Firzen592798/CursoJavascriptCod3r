//imports do node
const fs = require('fs')
const path = require('path')

//__dirname é o diretorio atual do arquivo
const caminho = path.join(__dirname, 'dados.txt');

//Encapsulando a leitura de um arquivo dentro de um promise
function lerArquivo(path){
  return new Promise(function(resolve){
    fs.readFile(path, (_, conteudo) => resolve(conteudo.toString()));
  });
}

lerArquivo(caminho)
  .then(conteudo => conteudo.split('Linha'))
  .then(linhas => linhas.join(','))
  .then(conteudo => `O valor final é ${conteudo}`)
  .then(console.log)