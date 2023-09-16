function funcionarOuNao(valor, chanceErro) {
   return new Promise((resolve, reject) => {
      if(Math.random() < chanceErro) {
         reject('An error has ocurred!')                 
         return
      }
      resolve(valor)
   })
}

funcionarOuNao('Testing...',0.5)
   .then(v => `Value: ${v}`)
   .then(console.log)
   .catch(err => console.log(`Error:  ${err}`))
   .then(() => console.log('Fim!'))w