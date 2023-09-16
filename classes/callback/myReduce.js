const shoppingCart = [
   {name: 'Pen',      quantity: 10, price:   7.99, fragile: false},
   {name: 'Printer',  quantity:  1, price: 649.50, fragile: true },
   {name: 'Note',     quantity:  4, price:  27.10, fragile: false},
   {name: 'Pencil',   quantity:  3, price:   5.82, fragile: true},
   {name: 'Scissors', quantity:  1, price:  19.20, fragile: false},
] 

Array.prototype.myReduce = function(fn, initialValue) {
   let acc = initialValue
   for(let i = 0; i< this.length; i++) {
      if(!acc && i === 0) {
         acc = this[i]
         continue
      }
      acc = fn(acc, this[i], i, this)
   }
   return acc
}

