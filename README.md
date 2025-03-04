# `resolvable-promise`
[![npm](https://img.shields.io/npm/v/resolvable-promise?style=for-the-badge)](https://www.npmjs.com/package/resolvable-promise) [![npm type definitions](https://img.shields.io/npm/types/resolvable-promise?style=for-the-badge)](#) [![npm modules type](https://img.shields.io/badge/modules-hybrid-blue?style=for-the-badge)](#) [![npm bundle size](https://img.shields.io/bundlephobia/min/resolvable-promise?style=for-the-badge)](https://bundlephobia.com/package/resolvable-promise)

#

I've found that for the majority of projects I keep needing to rewrite or copy-paste the same small piece of code,
a function that creates a promise with the resolve and reject functions exposed. This project is that small snippet
of code, created mostly for my own convenience.


#

### Basic Usage

```js
import Resolvable from 'resolvable-promise';

const resolvable = new Resolvable();
resolvable.then(console.log);

console.log('Resolving...');
resolvable.resolve('Resolved!');
```

Looks like a Promise ✨
#

### Arguments

You can optionally provide `Resolvable` with an executor callback just like a promise:

```js
const resolvable = new Resolvable((resolve, reject) => {
  // Do something async..
  resolve('Resolved!');
});
```

It's also possible to provide it with a promise that you might have gotten from somewhere else:

```js
const res = fetch('https://swapi.dev/api/people/');
const resolvable = new Resolvable(res);
```
