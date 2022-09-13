## directory.remove

Remove empty of filled directory

```javascript
import remove from '@utils/directory/remove';
```

### Usage

```javascript
remove(path)
```

**Params:**

* **path**: string | string[] - path to directory

**Return:**

* Promise<void> - will be resolved after directory will be removed

#### Example

```javascript
await remove([__dirname, './sub_dir']);
```