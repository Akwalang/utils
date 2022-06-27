## array.chunk

Slice array on list of arrays with setup length.

```javascript
import chunk from '@utils/array/chunk';
```

### Usage

```javascript
chunk(array, size)
```

**Params:**

* **array**: T[] - array for split on chunks
* **size**: number - chunk size

**Return:**

* T[][] - array of arrays with income array values and setup length

#### Example

```javascript
chunk([1, 2, 3, 4, 5], 2);
```

#### Result

```json
[[1, 2], [3, 4], [5]]
```