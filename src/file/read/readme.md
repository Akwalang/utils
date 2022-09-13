## file.read

Return content of file

```javascript
import read from '@utils/file/read';
```

### Usage

```javascript
read(path)
```

**Params:**

* **path**: string | string[] - path to file
* **options**: object | string _[default: { encoding: 'utf8' }]_ - look at fs.readFile options parameter

**Return:**

* Promise<string | Buffer> - return content of file as string or buffer

#### Example

```javascript
await read([__dirname, './path/to/file.txt']);
```

#### Result

```json
"Some text value"
```