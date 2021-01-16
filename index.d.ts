type Executor<T> = (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void;

declare module "resolvable-promise" {

  interface Resolvable<T> extends Promise<T> {

    resolve(value: T): Promise<T>;
    resolve(): Promise<void>;
    reject(reason?: any): Promise<T>;

  }

  function makeResolvable<T>(promise?: Promise<T> | Executor<T>): Resolvable<T>;

  export = makeResolvable;
}
