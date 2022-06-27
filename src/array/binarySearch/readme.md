## array.binarySearch

#### binarySearch(array, value _[, side = 0]_)

**Params:**

* **array**: T[] - asc sorted array
* **value**: any | <T>(item: T) => boolean - searching value or function returns number from -Infinity to Infinity
* **side**: -1 | 0 | 1 _[default: 0]_ - search side: _-1_ - left, _0_ - first found, _1_ - right

**Return:**

* number _[default: -1]_ - index of value in array

#### Import

```javascript
import binarySearch from '@utils/array/binarySearch';
```

#### Example

```javascript
const array = [
  { value: 1 },
  { value: 1 },
  { value: 2 },
  { value: 2 },
  { value: 2 },
  { value: 2 },
  { value: 3 },
  { value: 3 },
  { value: 3 },
  { value: 3 },
];

binarySearch(array, item => {
  if (item.value < 3) return  1;
  if (item.value > 3) return -1;

  return 0;
}, -1);
```

#### Result

```json
6
```