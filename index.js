function Resolvable(handler) {
  let resolve, reject
  const result = new Promise(async (res, rej) => {
    resolve = res
    reject = rej

    if(typeof handler == 'function')
      promise(res, rej)
    else if(handler instanceof Promise)
      handler.then(res, rej)
  })

  result.resolve = resolve
  result.reject = reject
  return result
}

module.exports = Resolvable
