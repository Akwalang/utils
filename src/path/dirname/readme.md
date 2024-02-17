## path.dirname

Get dirname from import.meta data

```javascript
import { dirname } from '@utils/path/dirname';
```

### Usage

```javascript
dirname(meta)
```

**Params:**

* **meta**: { url: string } - import.meta data

**Return:**

* string - full path

#### Example

```javascript
dirname(import.meta);
```

#### Result

```json
"C:\projects\utils\src\path\dirname"
```