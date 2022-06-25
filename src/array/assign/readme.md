## array.assign

**assign(source, getter[, accumulator = {}]);**

* **source**: _T[]_ - array of source data
* **getter**: _(item: T, index: number) => {}_ - function calling on every item. It should return object which will be assigned to accumulator
* **accumulator**: _Record<any, any>_ - accumulator for 

#### Import
```javascript
import assign from '@utils/array/assign';
```


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
