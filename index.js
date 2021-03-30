const makeResolvable = (promise) => {
  let resolve, reject
  const result = new Promise(async (res, rej) => {
    resolve = res
    reject = rej

    if (typeof promise === "function") {
      promise(res, rej)
    }
    else if (promise instanceof Promise) {
      promise.then(res, rej)
    }
  })

  result.resolve = resolve
  result.reject = reject
  return result
}

module.exports = makeResolvable
