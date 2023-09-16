const fn = require('./scripts')
const cp = require('../classes/composition')
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

const execute = cp.composition(
   start,
   fn.toArray(','),
   fn.onlyFiles('srt'),
   fn.getAllPaths(folder),
   fn.readFiles,
   fn.removeChars(charsToRemove),
   fn.toArray(' '),
   fn.removeUnusableLines,
   fn.joinLines,
   fn.orderByCount,
)

execute(folder).then(console.log)


