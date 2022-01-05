import { Executor, Reject, Resolvable, Resolve } from './types';

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

type ResolvableConstructor = {
	new <T>(promise?: Executor<T>): Resolvable<T>
	<T>(promise?: Executor<T>): Resolvable<T>
};

(Resolvable as any).default = Resolvable;
export = Resolvable as unknown as ResolvableConstructor & {
  default: ResolvableConstructor
};
