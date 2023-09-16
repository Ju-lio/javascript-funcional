// Functors são objetos que implementam a função MAP
// que também é um "wrapper" de um valor

// ARRAY é um exemplo de FUNCTORS

const nums = [1,2,3,4,5,6]

function TipoSeguro(valor) {
   return {
      valor,
      invalido() {
         return this.valor === null || this.valor === undefined
      },
      map(fn) {
         if(this.invalido()) {
            return TipoSeguro(undefined)
         } else {
            const novoValor = fn(this.valor)
            return TipoSeguro(novoValor)
         }
      }
   }
}


const resultado = TipoSeguro('Esse é um texto')
   .map(t => t.toUpperCase())
   .map(t => `${t}!!!!`)
   .map(t => t.split('').join(' '))

console.log(resultado.valor)