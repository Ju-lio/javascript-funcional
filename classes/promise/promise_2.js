function generateNumberBetween(min,max) {
   if (min > max) {
      [min, max] = [max, min]
   }

   return new Promise(resolve => {
      const factor = max - min + 1;
      const random = parseInt(Math.random() * factor) + min
      resolve(random)
   })
}