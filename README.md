# resolvable-promise

I've found that for the majority of projects I keep needing to rewrite or copy-paste the same small piece of code,
a function that creates a promise with the resolve and reject functions exposed. This project is that small snippet
of code, created mostly for my own convenience.

Oh, and I also added types.

#

### Installation

```
npm i resolvable-promise
```

#

### Basic Usage

Looks like a Promise ✨

```js
import Resolvable from 'resolvable-promise'

const resolvable = new Resolvable()
resolvable.then(console.log)

console.log('Resolving...')
resolvable.resolve('Resolved!')
```

#

### Arguments

You can optionally provide `Resolvable` with an executor callback just like a promise:

```js
const resolvable = new Resolvable((resolve, reject) => {
	// Do something async..
	resolve('Resolved!')
})
```

It's also possible to provide it with a promise that you might have gotten from somewhere else:

```js
import makeResolvable from 'resolvable-promise'

const res = fetch('https://swapi.dev/api/people/')
const resolvable = makeResolvable(res)
```
