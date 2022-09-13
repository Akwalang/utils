## file.write

Return content of file

```javascript
import write from '@utils/file/write';
```

### Usage

```javascript
write(path)
```

**Params:**

* **path**: string | string[] - path to file
* **data**: string | ArrayBuffer - look at fs.writeFile data parameter
* **options**: object - look at fs.writeFile options parameter

**Return:**

* Promise<void> - will be resolved after the file will be written

#### Example

```javascript
await write([__dirname, './path/to/file.txt'], 'New text content');
```