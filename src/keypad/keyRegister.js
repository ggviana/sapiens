const registered = {}

document.addEventListener('keydown', event => {
  if (isRegistered(event.code)) {
    registered[event.code].onPressStart(event)
  }
}, false)

document.addEventListener('keyup', event => {
  if (isRegistered(event.code)) {
    registered[event.code].onPressEnd(event)
  }
}, false)

function isRegistered (code) {
  return Object.keys(registered).includes(code)
}

export function register (code, cb) {
  const codes = Array.isArray(code) ? code : [code]

  codes.forEach(code => {
    registered[code] = cb
  })
}

export function unregister (code) {
  const codes = Array.isArray(code) ? code : [code]

  codes.forEach(code => {
    delete registered[code]
  })
}