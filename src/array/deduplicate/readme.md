## array.deduplicate

Deduplicate elements in array comparing items one to each other.

```javascript
import deduplicate from '@utils/array/deduplicate';
```

### Usage

```javascript
deduplicate(array[, comparator = DEFAULT_COMPARATOR])
```

**Params:**

* **array**: T[] - array of values
* **comparator**: (a: T, b: T) => boolean _[default: (a, b) => a === b || isNaN(a) && isNaN(b)]_ - function to compare values

**Return:**

* T[] - array of uniq values

#### Example

```javascript
const list = [
  { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 },
  { value: 2 }, { value: 3 }, { value: 3 },
];

const comparator = (a, b) => a.value === b.value;

deduplicate(list, comparator);
```

#### Result

```json
[{ "value": 1 }, { "value": 2 }, { "value": 3 }, { "value": 4 }]
```