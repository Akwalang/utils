## array.combine

#### combine(keys, values)

**Params:**

* **keys**: (string | number | symbol)[] - array of keys
* **values**: any[] - array of values

**Return:**

* Record<string | number | symbol, any> - object with first array values as keys and second array values as values

#### Import

```javascript
import combine from '@utils/array/combine';
```

#### Example

```javascript
combine(
  ['first', 'second', 'third'],
  [1, null, true, 'mismatch value']
);
```

#### Result

```json
{ "first": 1, "second": null, "third": true }
```