## array.union

Concat arrays into one and remove duplicate items

```javascript
import { union } from '@utils/array/union';
```

### Usage

```javascript
union([comparator = DEFAULT_COMPARATOR, ]...arrays)
```

**Params:**

* **comparator**: (a: T, b: T) => boolean _[default: (a, b) => a === b || isNaN(a) && isNaN(b)]_ - function to compare values
* **arrays**: T[][] - arrays of values

**Return:**

* T[] - Joined array with unique items

#### Example

```javascript
const a = [{ value: 1 }, { value: 2 }, { value: 3 }];
const b = [{ value: 3 }, { value: 1 }, { value: 4 }];
const c = [{ value: 4 }, { value: 4 }, { value: 3 }, { value: 2 }, { value: 5 }];

const comparator = (a, b) => a.value === b.value;

union(comparator, a, b, c);
```

#### Result

```json
[{ "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }, { "value": 5 }]
```