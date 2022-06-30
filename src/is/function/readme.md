## is.function

Checks if value is classified as an instance of Function

```javascript
import isFunction from '@utils/is/function';
```

### Usage

```javascript
isFunction(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is a function

#### Example

```javascript
[
  isFunction(() => {}),
  isFunction(function () {}),

  isFunction(async function () {}),
  isFunction(function * () {}),
]
```

#### Result

```json
[true, true, false, false]
```