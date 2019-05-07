const path = require('path')
const { copyFile, readDir } = require('../utilise/file')

const uploadSound = async (event, { currentPath, filename }) => {
  try {
    const Path = path.resolve(__dirname + '/../../file/music/' + filename)
    let { status, detail } = await copyFile(currentPath, Path)
    if (status !== 'success') {
      event.returnValue = { status, detail }
      return
    }
    event.returnValue = { status: 'success' }
  } catch (err) {
    event.returnValue = { status: 'error', detail: err }
  }
}

const getSoundList = async (event, arg) => {
  try {
    const Path = path.resolve(__dirname + '/../../file/music/')
    let { status, result } = await readDir(Path)
    if (status !== 'success') {
      event.returnValue = { status: 'fail' }
      return
    }
    event.returnValue = { status: 'success', result }
  } catch (err) {
    event.returnValue = { status: 'error', detail: err }
  }
}

module.exports = {
  uploadSound,
  getSoundList,
}
