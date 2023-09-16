// Aulas:
// Básico sobre função #02

// 1) Passar uma função como parâmetro para outra função

function goodMorning() {
  //console.log('Good morning!')
}

const goodAfternoon = function () {
  //console.log('Good afternoon!')
}

function executarQualquerCoisa(fn) {
  if (typeof fn === 'function') {
    fn()
  }
}

executarQualquerCoisa(goodAfternoon);
executarQualquerCoisa(goodMorning);

// 2) Retornar uma função a partir de outra função

// Exemplo1
function potencia(base, exp) {
  return Math.pow(base, exp)
}

const bits8 = potencia(2, 8)
  //console.log(bits8)

// Exemplo2
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp)
  }
}
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
console.log(potencia(2)(8))