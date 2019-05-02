const fs = require('fs')

const makeFile = (path, text) =>
  new Promise((resolve, reject) => {
    fs.appendFile(path, text, (err, file) => {
      if (err) throw { status: 'error', detail: err }
      resolve({ status: 'success' })
    })
  })

const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, function(err, data) {
      if (err) throw { status: 'error', detail: err }
      resolve({ status: 'success', result: JSON.parse(data) })
    })
  })

const readDir = path =>
  new Promise((resolve, reject) => {
    fs.readdir(path, function(err, items) {
      if (err) throw { status: 'error', detail: err }
      resolve({ status: 'success', result: items })
    })
  })

const writeFile = (path, value) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, value, err => {
      if (err) throw { status: 'error' }
      resolve({ status: 'success' })
    })
  })

module.exports = {
  makeFile,
  readFile,
  readDir,
  writeFile,
}
