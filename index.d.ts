type Executor<T> = (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void;

declare module "resolvable-promise" {

  interface Resolvable<T> extends Promise<T> {

    resolve(value?: T): void;
    reject(reason?: any): void;

  }

  function makeResolvable<T>(promise?: Promise<T> | Executor<T>): Resolvable<T>;

  export = makeResolvable;
}
