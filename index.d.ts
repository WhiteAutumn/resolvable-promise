type Executor<T> = (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void;

declare module "resolvable-promise" {

  export interface Resolvable<T> extends Promise<T> {

    resolve(value?: T): void;
    reject(reason?: any): void;

  }

  export default function makeResolvable<T>(promise?: Promise<T> | Executor<T>): Resolvable<T>;
}
