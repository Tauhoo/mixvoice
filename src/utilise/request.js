const ipc = window.ipcRenderer

const request = (route, value) =>
  new Promise((resolve, reject) => {
    resolve(ipc.sendSync(route, value))
  })

export const registerAnimation = value => request('register-animation', value)
export const getAllAnimation = () => request('get-animation-list', null)
export const getAnimation = name => request('get-animation', { name })
export const updateAnimation = data => request('update-animation', data)

export const uploadSound = data => request('upload-sound', data)
export const getSoundList = () => request('get-sound-list', null)

export const uploadFrez = data => request('upload-frez', data)
export const getFrez = () => request('get-frez', null)
