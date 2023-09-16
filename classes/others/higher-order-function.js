// Funções que operam em outras funções,
// Tomando-as como argumentos ou retornando-as
// são chamadas de higher-order functions

function executar(fn,...params) {
   return fn(...params)
}

function somar(a,b,c) {
   return a + b + c
}

function multi(a,b) {
   return a * b
}

const r1 = executar(somar,4,5,6)
const r2 = executar(multi,5,7)


console.log(r1,r2)