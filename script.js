// num = recebendo os parâmetros que estou enviando no html
function insert(num) {
  var numero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numero + num
}

function clean() {
  document.getElementById('resultado').innerHTML = ''
}

function back() {
  var resultado = document.getElementById('resultado').innerHTML
  //substring = apagar. : Pega o resultado e subtraia a ultima string
  document.getElementById('resultado').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}

function calcular() {
  var resultado = document.getElementById('resultado').innerHTML
  // SE o resultado tiver conteúdo dentro, realize as chaves {}. EVAL = faz toda operação matematica
  if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
  } else {
    document.getElementById('resultado').innerHTML = ''
  }
}
