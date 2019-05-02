const ipc = window.ipcRenderer

const request = (route, value) =>
  new Promise((resolve, reject) => {
    resolve(ipc.sendSync(route, value))
  })

export const registerAnimation = value => request('register-animation', value)
export const getAllAnimation = () => request('get-animation-list', null)
