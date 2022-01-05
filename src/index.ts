function Resolvable<T>(handler?: Executor<T>) {
  let resolve!: Resolve<T>;
  let reject!: Reject;

  const result: Resolvable<T> = new Promise((res, rej) => {
    resolve = res;
    reject = rej;

    if (handler == null) {
      return;
    }

    if (typeof handler === 'function') {
      handler(res, rej);
    }
    else if (handler.constructor === Promise) {
      handler.then(res, rej);
    }
  }) as any;

  result.resolve = resolve;
  result.reject = reject;
  return result;
}

Resolvable.default = Resolvable;

export = Resolvable as unknown as ResolvableConstructor & {
  default: ResolvableConstructor
};

interface Resolvable<T> extends Promise<T> {
	resolve: Resolve<T>
	reject: Reject
}

type ResolvableConstructor = {
	new <T>(promise?: Executor<T>): Resolvable<T>
	<T>(promise?: Executor<T>): Resolvable<T>
};

type Executor<T> =
	| Promise<T>
	| ((resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void);

type Resolve<T> = (value?: T) => void;
type Reject = (reason?: any) => void;
