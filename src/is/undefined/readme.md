## is.undefined

Checks if value is undefined

```javascript
import isUndefined from '@utils/is/undefined';
```

### Usage

```javascript
isUndefined(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is undefined

#### Example

```javascript
[
  isUndefined(undefined),

  isUndefined(null),
  isUndefined(0),
  isUndefined(''),
  isUndefined(false),
]
```

#### Result

```json
[true, false, false, false, false]
```