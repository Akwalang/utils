## is.string

Checks if value is a string

```javascript
import { isString } from '@utils/is/string';
```

### Usage

```javascript
isString(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is a string

#### Example

```javascript
[
  isString('text'),
  isString(new String('text')),

  isString(123),
  isString([]),
  isString({}),
  isString(true),
]
```

#### Result

```json
[true, true, false, false, false, false]
```