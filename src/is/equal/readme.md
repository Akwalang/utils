## is.equal

Make deep comparison of two values

```javascript
import isEqual from '@utils/is/equal';
```

### Usage

```javascript
isNil(value)
```

**Params:**

* **a**: any - first value to compare
* **b**: any - second value to compare

**Return:**

* boolean - result of comparing

#### Example

```javascript
const now = new Date();

const a = {
  a: 1,
  b: [1, true, { c: NaN }],
  c: new Date(+now),
};

const b = {
  a: 1,
  b: [1, true, { c: NaN }],
  c: new Date(+now),
};

isEqual(a, b);
```

#### Result

```json
true
```