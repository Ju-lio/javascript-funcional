// Aula Básico sobre Função #03

// arrow function
const felizNatal = () => console.log('Feliz Natal!')
felizNatal()

const saudacao = nome => `Fala ${nome}, blz?!?`
//console.log(saudacao('Julio'))

const somar = (...numeros) => {
   //console.log(Array.isArray(numeros))
   let total = 0
   for (let n of numeros) {
      total += n
   }
   return total
}
//console.log(somar(1,2,3,4,5,6,7,8,9,10))

// Micro Challenge - função dentro de outra função com arrow funcion

const potencia = base => exp => Math.pow(base, exp)

console.log(potencia(2)(2))
