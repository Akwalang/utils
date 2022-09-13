## path.stat

Return deep copy of provided value

```javascript
import stat from '@utils/path/stat';
```

### Usage

```javascript
stat(value)
```

**Params:**

* **path**: string | string[] - path to directory or file

**Return:**

* Promise<fs.Stats | null> - stats of entity or null on case of error

#### Example

```javascript
await stat([__dirname, 'test.txt']);
```