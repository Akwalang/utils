## is.object

Checks if value is an object

```javascript
import isObject from '@utils/is/object';
```

### Usage

```javascript
isObject(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is an object

#### Example

```javascript
class Qwerty {}

[
  isObject({}),
  isObject(new Qwerty()),

  isObject(window),
  isObject([]),
  isObject(true),
]
```

#### Result

```json
[
  true, true,
  false, false, false
]
```