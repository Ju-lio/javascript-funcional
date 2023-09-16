const fn = require('./scripts')
const folder = require('path').join(__dirname, 'subtitles')
const charsToRemove = [
   '.',
   ',',
   '"',
   '-',
   '?',
   '<i>',
   '</i>',
   /\r/g,
   /\n/g,
   '>',
]

function start(folder) {
   const files = fn.getFiles(folder)
   return new Promise(resolve => {
      resolve(files)
   })
}

start(folder)
   .then(fn.toArray(','))
   .then(fn.onlyFiles('srt'))
   .then(fn.getAllPaths(folder))
   .then(fn.readFiles)
   .then(fn.removeChars(charsToRemove))
   .then(fn.toArray(' '))
   .then(fn.removeUnusableLines)
   .then(fn.joinLines)
   .then(fn.orderByCount)
   .then(console.log)