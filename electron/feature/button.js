const path = require('path')
const { readFile } = require('../utilise/file')
const fs = require('fs')
var frezs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var { spawn } = require('child_process')
var process = spawn('python', ['index.py', ...frezs])

const restart = () => {
  process.kill('SIGINT')
  process = spawn('python', ['index.py', ...frezs])
}

const uploadFrez = async (event, { number, frez }) => {
  try {
    const Path = path.resolve(__dirname + '/../../file/button/data.json')
    let { result } = await readFile(Path)
      .then(res => res)
      .catch(res => res)
    result.list[number - 1] = frez
    frezs = result.list
    restart()
    fs.writeFile(Path, JSON.stringify(result), err => {
      if (err) throw err
    })
    event.returnValue = { result, frezs }
  } catch (e) {
    event.returnValue = { status: 'error' }
  }
}

const getFrez = async (event, arg) => {
  try {
    const Path = path.resolve(__dirname + '/../../file/button/data.json')
    let { result } = await readFile(Path)
      .then(res => res)
      .catch(res => res)
    frezs = result.list
    restart()
    event.returnValue = { result, frezs }
  } catch (e) {
    event.returnValue = { status: 'error' }
  }
}

module.exports = { uploadFrez, getFrez }
