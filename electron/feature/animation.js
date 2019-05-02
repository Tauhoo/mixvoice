const path = require('path')
const { makeFile, readDir, readFile, writeFile } = require('../utilise/file')

const registerAnimation = async (event, { json, name }) => {
  try {
    const Path = path.resolve(
      __dirname + '/../../file/animation/' + name + '.json',
    )
    let { status, detail } = await makeFile(Path, json)
      .then(res => res)
      .catch(res => res)

    if (status !== 'success') {
      console.log(detail)
      event.returnValue = { status: 'fail' }
      return
    }

    event.returnValue = { status: 'success', result: Path } //, result: { Path, json } }
  } catch (error) {
    event.returnValue = { status: 'error', detail: error }
  }
}

const getAnimationList = async (event, arg) => {
  try {
    const Path = path.resolve(__dirname + '/../../file/animation/')

    let { status, result } = await readDir(Path)
      .then(res => res)
      .catch(res => res)
    let responst = []

    for (let name of result) {
      let data = await readFile(Path + '/' + name)
        .then(res => res)
        .catch(res => res)
      if (data.status !== 'success') continue
      responst.push({ ...data.result, name })
    }

    event.returnValue = { status: 'success', result: responst } //: responst }
  } catch (error) {
    event.returnValue = { status: 'error', detail: error }
  }
}

const getAnimation = async (event, { name }) => {
  const Path = path.resolve(__dirname + '/../../file/animation/' + name)
  try {
    let { status, result, detail } = await readFile(Path)
    if (status !== 'success') {
      event.returnValue = { status: 'fail' }
      console.log(detail)
      return
    }
    event.returnValue = { status: 'success', result }
  } catch (err) {
    event.returnValue = { status: 'error', detail: err }
  }
}

const updateAnimation = async (event, { name, animation }) => {
  const Path = path.resolve(__dirname + '/../../file/animation/' + name)
  try {
    let { status } = await writeFile(Path, JSON.stringify({ animation }))
    event.returnValue = { status }
  } catch (err) {
    event.returnValue = { status: 'error', detail: err }
  }
}

module.exports = {
  registerAnimation,
  getAnimationList,
  getAnimation,
  updateAnimation,
}
