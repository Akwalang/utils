## path.resolve

Check is path exists

```javascript
import { resolve } from '@utils/path/resolve';
```

### Usage

```javascript
resolve(...paths)
```

**Params:**

* **paths**: (string | string[])[] - full or relative path values that can be wrapped into arrays

**Return:**

* string - full path

#### Example

```javascript
resolve(__dirname, ['..', [['./path'], 'to']], [[['dir']]]);
```

#### Result

```json
"C:\projects\utils\path\to\dir"
```