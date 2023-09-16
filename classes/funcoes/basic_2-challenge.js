// Challenge #01
//  sum

function somar(a) {
   return function (b) {
      return function (c) {
         return a + b + c
      }
   }
}
  //console.log(somar(3)(4)(5));

// Challenge #02
sum = function (a) {
   return function (b) {
      return a + b
   }
}
division = function (a) {
   return function (b) {
      return a / b
   }
}
subtracion = function (a) {
   return function (b) {
      return a - b
   }
}
multiplication = function (a) {
   return function (b) {
      return a * b
   }
}

function calcular(a) {
   return function (b) {
      return function (fn) {
         return fn(a)(b)
      }
   }
}

  //console.log(calcular(3)(7)(multiplication))