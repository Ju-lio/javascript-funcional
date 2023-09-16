function generateNumbersBetween(min, max, time) {
   if(min > max) [max, min] = [min, max]
   return new Promise(resolve => {
      setTimeout(function() {
         const factor = max - min + 1
         const random = parseInt(Math.random() * factor) + min
         resolve(random)
      }, time)
   })
}

function generateMultipleNumbers() {
   return Promise.all([
      generateNumbersBetween(1,60,4000),
      generateNumbersBetween(1,60,1000),
      generateNumbersBetween(1,60,500),
      generateNumbersBetween(1,60,3000),
      generateNumbersBetween(1,60,100),
      generateNumbersBetween(1,60,1500),
   ])
}

console.time('Promise')
generateMultipleNumbers()
   .then(console.log)
   .then(() => {
      console.timeEnd('Promise')
   })
