## directory.read

Return names of child directories and files inside of target folder

```javascript
import read from '@utils/directory/read';
```

### Usage

```javascript
read(path)
```

**Params:**

* **path**: string | string[] - path to directory

**Return:**

* Promise<string[]> - list of child directories and files

#### Example

```javascript
await read([__dirname, './sub_dir']);
```

#### Result

```json
["index.ts", "index.test.ts"]
```