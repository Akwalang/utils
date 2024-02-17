## is.nan

Checks if value is a NaN

```javascript
import { isNaN } from '@utils/is/nan';
```

### Usage

```javascript
isNaN(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is a NaN

#### Example

```javascript
[
  isNaN(NaN),

  isNaN(false),
  isNaN('text'),
  isNaN(null),
]
```

#### Result

```json
[true, false, false, false]
```