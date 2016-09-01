# admit

```sh
npm install admit --save
```

### Features
- admit values into arrays
- ban values from arrays
- test if arrays contains values

## Usage

```js
var admit = require('admit')

admit([0, 1, 2], 2) // [0, 1, 2]
admit([0, 1, 2], 3) // [0, 1, 2, 3]
admit.has([0, 1, 2], 1) // true
admit.has([0, 1, 2], 3) // false
admit.ban([0, 0, 2], 0) // [2]
admit.is(1, 1) // true
admit.is(1, 2) // false
admit.use(Object.is) // cloned admit api that uses Object.is
```

## API

- <var>stack</var> can be an array or array-like object
- <var>value</var> can be any type

### admit(stack, value)
Add <var>value</var> into <var>stack</var> if <var>stack</var> doesn't already contain <var>value</var>

*Alias:* `admit.admit(stack, value)`

### admit.has(stack, value)
Test if <var>stack</var> contains <var>value</var>

### admit.ban(stack, value)
Remove all instances of <var>value</var> from <var>stack</var>

### admit.is(a, b)
Simple default `===` comparison

### admit.use(is)
Create a new version of admit that uses a different <var>is</var> function

#### Example
```js
var admit = require('admit')
var equal = require('deep-equal')
admit = admit.use(equal)
```

## License
MIT
