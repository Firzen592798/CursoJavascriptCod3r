//imports do node
const fs = require('fs')
const path = require('path')

//__dirname é o diretorio atual do arquivo
const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(_, conteudo){
  console.log(conteudo);
}

fs.readFile(caminho, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));

