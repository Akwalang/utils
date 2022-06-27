## array.assign

```javascript
import assign from '@utils/array/assign';
```

### Usage

```javascript
assign(source, getter[, accumulator = {}])
```

**Params:**

* **source**: T[] - array of source data
* **getter**: (item: T, index: number) => {} - function calling on every item. It should return object which will be assigned to accumulator
* **accumulator**: Record<any, any> _[default: {}]_ - object accumulator

**Return:**

* Record<string | number | symbol, any> _[default: {}]_ - object extended by all returned values

#### Example

```javascript
const array = [
  { name: 'first', value: 1 },
  { name: 'second', value: 2 },
  { name: 'third', value: 3 },
];

const object = assign(
  array,
  item => {
    const name = '__' + item.name;
    const value = item.value ** 2;

    return { [name]: value };
  },
  { startValue: true }
);
```

#### Result

```json
{
  "startValue": true,
  "__first": 1,
  "__second": 4,
  "__third": 9
}
```