// Aulas Promise #01

const firstElement = (a) => a[0]
const firstLetter = (a) => a[0]
const letterLowerCase = (a) => a.toLowerCase()

new Promise(function(resolve) {
   resolve(['Ana','Bia','Carlos','André'])
})
   .then(firstElement)   
   .then(firstLetter)
   .then(letterLowerCase)
   .then(console.log) 
  