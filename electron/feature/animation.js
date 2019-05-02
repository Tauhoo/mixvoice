const path = require('path')
const { makeFile, readDir, readFile } = require('../utilise/file')

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

module.exports = { registerAnimation, getAnimationList }
