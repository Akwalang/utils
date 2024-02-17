## array.intersection

Find elements which exists in every array

```javascript
import { intersection } from '@utils/array/intersection';
```

### Usage

```javascript
intersection([comparator = DEFAULT_COMPARATOR, ]...arrays)
```

**Params:**

* **comparator**: (a: T, b: T) => boolean _[default: (a, b) => a === b || isNaN(a) && isNaN(b)]_ - function to compare values
* **arrays**: T[][] - arrays of values

**Return:**

* T[] - array of different values

#### Example

```javascript
const a = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
const b = [{ value: 3 }, { value: 2 }, { value: 5 }];
const c = [{ value: 1 }, { value: 5 }, { value: 2 }, { value: 4 }]

intersection((a, b) => a.value === b.value, a, b, c);
```

#### Result

```json
[{ "value": 2 }, { "value": 5 }]
```