//Passa o calculo(callback) como parâmetro e opera em cima dos dois valores
function calcular(fn, a, b){
  return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

calcular(somarNoTerminal, 56, 38)
calcular(subtrairNoTerminal, 182, 27)

const fn = () => console.log('calcular...')
setInterval(fn, 1111)

setInterval(function () {
  console.log("function");
}, 3000);
