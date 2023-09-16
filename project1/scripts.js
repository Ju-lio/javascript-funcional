const fs = require('fs')
const numerals = ['0','1','2','3','4','5','6','7','8','9']

function getFiles(path) {
   const files = fs.readdirSync(path).toString()
   return files
}

function toArray(delimiter) {
   return function(files) {
      return files.split(delimiter)
   } 
}

function treat(extension) {
   if(extension[0] !== '.') {
      extension = '.' + extension
   }
   return extension
}

function onlyFiles(extension) {
   extension = treat(extension)
   return function(files) {
      const newFiles = files.filter(a => a.includes(extension))
      return newFiles;
   }
}

function getAllPaths(folder) {
   return function (files) {
      return files.map(file => {
         return require('path').join(folder, file)
      })
   }
}

function readFile(path) {
   return new Promise(resolve => {
      resolve(fs.readFileSync(path).toString())
   })
}

function readFiles(files) {
   return Promise.all(
      files.map(
         file => readFile(file)
      )
   )
}

function removeChar(text, initialChar, finalChar = ' ') {
   return text.replaceAll(initialChar,finalChar)
}

function removeChars(charsToRemove, finalChar = ' ') {
   return function(text) {
      if(typeof text != 'string') {
         text = text.toString()
      }
      charsToRemove.forEach(element => {
         text = removeChar(text, element, finalChar)
      });
      return text;
   }
}

function removeLines(array) {
   return new Promise(resolve => {
      resolve(array)
   })
}

const removeBlankLines = (array) => array.filter(e => e != '')

const removeNumberLines = (array) => array.filter(e => !numerals.includes(e[0]))

const removeUnusableLines = (array) =>
   removeLines(array)
      .then(removeBlankLines)
      .then(removeNumberLines)


function joinLines(array) {
   const newArray = []
   array.forEach(word => {
      if(newArray.find(w => w.word.toLowerCase() === word.toLowerCase())) {
         newArray.find(w => w.word.toLowerCase() === word.toLowerCase()).count += 1
      } else {
         newArray.push({
            word: word,
            count: 1,
         })
      }
   })
   return newArray
}

function orderByCount(array) {
   return array.sort((a,b) => b.count - a.count)
}

module.exports = {
   getFiles,
   toArray,
   onlyFiles,
   getAllPaths,
   readFiles,
   removeChars,
   removeUnusableLines,
   joinLines,
   orderByCount,
}