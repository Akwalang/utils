## is.empty

Checks is value an empty.

It will return true in strait mode if passed: null, undefined, an empty array or an empty object.

And will return true in not strait mode event if passed: an array or object with empty values.


```javascript
import isEmpty from '@utils/is/empty';
```

### Usage

```javascript
isEmpty(value[, strait = true])
```

**Params:**

* **value**: any - value to be checked
* **strait**: boolean _[default: true]_ - in not strait mode arrays and object will be empty if his values are empty too

**Return:**

* boolean - value is empty

#### Example

```javascript
[
  isEmpty(''),
  isEmpty(null),
  isEmpty(undefined),
  isEmpty([]),
  isEmpty({}),

  isEmpty([null, undefined, [null, undefined], {}], false),
  isEmpty({ a: [], b: null, c: {} }, false),

  isEmpty(false),
  isEmpty([null]),
  isEmpty({ a: undefined }),
]
```

#### Result

```json
[
  true, true, true, true, true,
  true, true,
  false, false, false
]
```