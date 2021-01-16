const makeResolvable = (promise) => {
  let resolve, reject;
  const result = new Promise((res, rej) => {
    resolve = res;
    reject = rej;

    if (typeof promise === "function") {
      promise(res, rej);
    }
    else if (promise instanceof Promise) {
      promise.then((it) => res(it)).catch((it) => rej(it));
    }
  });

  result.resolve = resolve;
  result.reject = reject;
  return result;
};

module.exports = makeResolvable;
