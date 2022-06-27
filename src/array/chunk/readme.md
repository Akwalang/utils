## array.chunk

#### chunk(array, size)

**Params:**

* **array**: T[] - array for split on chunks
* **size**: number - chunk size

**Return:**

* T[][] - array of arrays with income array values and setup length

#### Import

```javascript
import chunk from '@utils/array/chunk';
```

#### Example

```javascript
chunk([1, 2, 3, 4, 5], 2);
```

#### Result

```json
[[1, 2], [3, 4], [5]]
```