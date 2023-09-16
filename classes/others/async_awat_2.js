function generateNumbersBetween(min, max, numbersDisallowed) {
   if(min > max) [max, min] = [min = max]
   return new Promise((resolve, reject) => {
      const factor = max - min + 1
      const random = parseInt(Math.random() * factor) + min
      if(numbersDisallowed.includes(random)) {
         reject('Número repetido!')
      } else {
         resolve(random)
      }
   })
}

async function generateMegaSenaNumbers(quantityNumbers, attempts = 1) {
   try {
      const numbers = []
      for (let _ of Array(quantityNumbers).fill()) {
         numbers.push(await generateNumbersBetween(1,60, numbers))
      }
      return numbers
   } catch(e) {
      if (attempts > 100) {
         throw 'Que chato!'
      } else {
         return generateMegaSenaNumbers(quantityNumbers, attempts + 1)
      }
   }
}

generateMegaSenaNumbers(15)
   .then(console.log)
   .catch(console.log)
