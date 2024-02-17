## is.array

Checks if value is classified as an instance of Array

```javascript
import { isArray } from '@utils/is/array';
```

### Usage

```javascript
isArray(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is an array

#### Example

```javascript
[
  isArray([]),
  isArray({}),
  isArray(42),
  isArray('text'),
]
```

#### Result

```json
[true, false, false, false]
```