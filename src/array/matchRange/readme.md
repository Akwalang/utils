## array.matchRange

Calculate range of values based on items in the passed array

```javascript
import { matchRange } from '@utils/array/matchRange';
```

### Usage

```javascript
matchRange(array[, fallback = [null, null] [, getValue = v => v]])
```

**Params:**

* **array**: any - array of values
* **fallback**: F extends any _[default: [null, null]]_ - return value in case of passed empty array
* **getValue**: (v: any) => number _[default: v => v]_ - function return value to compare

**Return:**

* [number, number] | F - array with min and max value or fallback argument in case of empty array

#### Example

```javascript
const list = [{ value: 57 }, { value: 41 }, { value: 9 }, { value: 93 }, { value: 12 }];

matchRange(list, null, item => item.value);
```

#### Result

```json
[9, 93]
```