## is.plainObject

Checks if value is a plain object

```javascript
import isPlainObject from '@utils/is/plain object';
```

### Usage

```javascript
isPlainObject(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is a plain object

#### Example

```javascript
class Qwerty {}

[
  isPlainObject({}),

  isPlainObject(new Qwerty()),
  isPlainObject([]),
  isPlainObject(new Boolean(false)),
]
```

#### Result

```json
[
  true,
  false, false, false
]
```