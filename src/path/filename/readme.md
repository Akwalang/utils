## path.filename

Get filename from import.meta data

```javascript
import filename from '@utils/path/filename';
```

### Usage

```javascript
filename(meta)
```

**Params:**

* **meta**: { url: string } - import.meta data

**Return:**

* string - full path

#### Example

```javascript
filename(import.meta);
```

#### Result

```json
"index.js"
```