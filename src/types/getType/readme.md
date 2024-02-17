## types.get

Return type name of value

```javascript
import { getType } from '@utils/types/get';
```

### Usage

```javascript
getType(value)
```

**Params:**

* **value**: any - target value

**Return:**

* string - name of type based on {}.toString function

#### Example

```javascript
class Qwerty {}

[
  getType(new Qwerty),
  getType(window),
  getType('Alexi'),
];
```

#### Result

```json
["Object", "Window", "String"]
```