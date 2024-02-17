## file.isExists

Check is file exists

```javascript
import { isExists } from '@utils/file/isExists';
```

### Usage

```javascript
isExists(path)
```

**Params:**

* **path**: string | string[] - path to file

**Return:**

* Promise<boolean> - return true only in case if target entity exists and it is a file

#### Example

```javascript
await isExists([__dirname, './path/to/dir']);
```

#### Result

```json
true
```