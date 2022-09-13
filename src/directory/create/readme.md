## directory.create

Recursively create directory in provided path

```javascript
import create from '@utils/directory/create';
```

### Usage

```javascript
create(path)
```

**Params:**

* **path**: string | string[] - target path

**Return:**

* Promise<void> - will be resolved after directories will be created

#### Example

```javascript
await create([__dirname, './new_folder_1/new_folder_2/new_folder_3']);
```