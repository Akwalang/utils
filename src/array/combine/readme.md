## array.combine

```javascript
import combine from '@utils/array/combine';
```

### Usage

```javascript
combine(keys, values)
```

**Params:**

* **keys**: (string | number | symbol)[] - array of keys
* **values**: any[] - array of values

**Return:**

* Record<string | number | symbol, any> - object with first array values as keys and second array values as values

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