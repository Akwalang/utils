## directory.isExists

Check is directory exists

```javascript
import isExists from '@utils/directory/isExists';
```

### Usage

```javascript
isExists(path)
```

**Params:**

* **path**: string | string[] - path to directory

**Return:**

* Promise<boolean> - return true only in case if target entity exists and it is a directory

#### Example

```javascript
await isExists([__dirname, './path/to/dir']);
```

#### Result

```json
true
```