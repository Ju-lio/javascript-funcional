function generateNumbers() {
   return {
      start: (fn, interval = 1000) => {
         let num = 0;
         const i = setInterval(() => {
            fn(num++);
         }, interval);

         return {
            stop: () => {
               clearInterval(i);
            }
         };
      }
   };
}

const temp1 = generateNumbers();
const exec1_1 = temp1.start(number => {
   console.log(`#1.1: ${number * 2}`);
}, 1500)

