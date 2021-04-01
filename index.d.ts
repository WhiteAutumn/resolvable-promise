
type Executor<T> = (
		resolve: (value: T | PromiseLike<T>) => void,
		reject: (reason?: any) => void
	) => void

interface Resolvable<T> extends Promise<T> {
	resolve(value?: T): void
	reject(reason?: any): void
}

declare const makeResolvable: {
	new <T>(promise?: Promise<T> | Executor<T>): Resolvable<T>
	<T>(promise?: Promise<T> | Executor<T>): Resolvable<T>
}

export = makeResolvable
