## file.remove

Remove empty of filled file

```javascript
import { remove } from '@utils/file/remove';
```

### Usage

```javascript
remove(path)
```

**Params:**

* **path**: string | string[] - path to file

**Return:**

* Promise<void> - will be resolved after file will be removed

#### Example

```javascript
await remove([__dirname, './file.txt']);
```