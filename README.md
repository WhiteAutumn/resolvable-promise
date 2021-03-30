# resolvable-promise

I've found that for the majority of projects I keep needing to rewrite or copy-paste the same small piece of code,
a function that creates a promise with the resolve and reject functions exposed. This project is that small snippet
of code, created mostly for my own convenience.

Oh, and I also added types.

#

### Installation
```
npm install resolvable-promise
```

#

### Basic Usage

The basic usage is as follows:
```js
const resolvable = Resolvable()
resolvable.then(console.log)

console.log('Resolving...')
resolvable.resolve('Resolved!')
```
Where the console output will be:
```
Resolving...
Resolved!
```

#

### As constructor
Looks like a Promise ✨
```js
let resolvable = new Resolvable()
resolvable.then(console.log)

console.log('Resolving...')
resolvable.resolve('Resolved!')
```

#

### Arguments
You can optionally provide `Resolvable` with an executor callback just like a promise:
```js
const resolvable = new Resolvable((resolve, reject) => {
  // Do something async...
  resolve('Resolved!')
})
```

It's also possible to provide it with a promise that you might have gotten from somewhere else:
```js
const res = fetch('https://swapi.dev/api/people/')
const resolvable = new Resolvable(res)
```
