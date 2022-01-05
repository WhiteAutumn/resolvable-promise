export interface Resolvable<T> extends Promise<T> {
	resolve: Resolve<T>
	reject: Reject
}

export type Executor<T> =
	| Promise<T>
	| ((resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void);

export type Resolve<T> = (value?: T) => void;
export type Reject = (reason?: any) => void;
