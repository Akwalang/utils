## is.nil

Checks if value is null or undefined

```javascript
import { isNil } from '@utils/is/nil';
```

### Usage

```javascript
isNil(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is null or undefined

#### Example

```javascript
[
  isNil(null),
  isNil(undefined),

  isNil(0),
  isNil(''),
  isNil(false),
]
```

#### Result

```json
[true, true, false, false, false]
```