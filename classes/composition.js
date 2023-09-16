function composicao(...fns) {
   return function(valor) {
      return fns.reduce(async (acc, fn) => {
         if(Promise.resolve(acc) === acc) {
            return fn(await acc)
         } else {
            return fn(acc)
         }
      }, valor)
   }
}

function gritar(texto) {
   return texto.toUpperCase()
}

function enfatizar(texto) {
   return `${texto}!!!`

}

function tornarLento(texto) {
   return texto.split('').join(' ')
}

const exagerado = composicao(
   gritar,
   enfatizar,
   tornarLento
)

// exagerado('para').then(console.log)

module.exports = {
   composition: composicao
}