
export type Resolve<T> = (value?: T | PromiseLike<T>) => void;
export type Reject = (reason?: any) => void;

export type Executor<T> =
	| Promise<T>
	| ((resolve: Resolve<T>, reject: Reject) => void);

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

declare class Resolvable<T> extends Promise<T> {
	constructor(promise?: Executor<T>);
	resolve: Resolve<T>;
	reject: Reject;
}

export default Resolvable;
