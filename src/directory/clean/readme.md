## directory.clean

Remove all files and directories from directory

```javascript
import { clean } from '@utils/directory/clean';
```

### Usage

```javascript
clean(path)
```

**Params:**

* **path**: string | string[] - path to directory

**Return:**

* Promise<void> - will be resolved after directory will be cleared

#### Example

```javascript
await clear([__dirname, './sub_dir']);
```