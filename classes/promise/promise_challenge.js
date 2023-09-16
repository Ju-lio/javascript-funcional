const fs = require('fs')
const getPath = require('path')

const path = getPath.join(__dirname, 'dados.txt')

function start(path) {
   return new Promise(resolve => {
      fs.readFile(path, function (_, content) {
         resolve(content.toString())
      })
   })
}

console.log('Start...')
start(path)
 .then(console.log)
console.log('End...')


