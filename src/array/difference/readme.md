## array.difference

Return array of different items in 2 arrays

```javascript
import difference from '@utils/array/difference';
```

### Usage #1

```javascript
difference(a, b[, comparator = DEFAULT_COMPARATOR])
```

**Params:**

* **a**: T[] - array of values
* **b**: T[] - array of values
* **comparator**: (a: T, b: T) => boolean _[default: (a, b) => a === b || isNaN(a) && isNaN(b)]_ - function to compare values

**Return:**

* T[] - array of different values

#### Example

```javascript
const a = [1, 2, 3, 4, 5];
const b = [6, 7, 1, 2, 8];

difference(a, b);
```

#### Result

```json
[3, 4, 5]
```

### Usage #2

```javascript
difference(a, b, getValue)
```

**Params:**

* **a**: T[] - array of values
* **b**: T[] - array of values
* **getValue**: (item: T) => any - function returns value from items of both arrays for compare

**Return:**

* T[] - array of different values

#### Example

```javascript
const a = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
const b = [{ value: 6 }, { value: 7 }, { value: 1 }, { value: 2 }, { value: 8 }];

difference(a, b, item => item.value);
```

#### Result

```json
[{ "value": 3 }, { "value": 4 }, { "value": 5 }]
```