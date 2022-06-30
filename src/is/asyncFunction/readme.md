## is.asyncFunction

Checks if value is classified as an instance of AsyncFunction.

Notice: it will not work in case if function was transformed by to usual function by babel.


```javascript
import isAsyncFunction from '@utils/is/array';
```

### Usage

```javascript
isAsyncFunction(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is an array

#### Example

```javascript
[
  isAsyncFunction(async () => {}),
  isAsyncFunction(async function() {}),

  isAsyncFunction(() => {}),
  isAsyncFunction(function * () {}),
]
```

#### Result

```json
[true, true, false, false]
```