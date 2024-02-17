## is.null

Checks if value is null

```javascript
import { isNull } from '@utils/is/null';
```

### Usage

```javascript
isNull(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is null

#### Example

```javascript
[
  isNull(null),

  isNull(undefined),
  isNull(0),
  isNull(''),
  isNull(false),
]
```

#### Result

```json
[true, false, false, false, false]
```