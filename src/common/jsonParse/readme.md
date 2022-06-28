## common.jsonParse

Create function which return on every call next number or next string

```javascript
import jsonParse from '@utils/common/jsonParse';
```

### Usage #1

```javascript
jsonParse(value)
```

**Params:**

* **value**: string - json string to be parsed

**Return:**

* any - parsed value or incoming value in case of parse error

#### Example

```javascript
jsonParse('[1, "a", {}]');
```

#### Result

```json
[1, "a", {}]
```

### Usage #2

```javascript
jsonParse(string, fallback)
```

**Params:**

* **value**: string - json string to be parsed
* **fallback**: any - json string to be parsed

**Return:**

* any - parsed value or fallback value

#### Example

```javascript
jsonParse('{INCORRECT JSON VALUE]', undefined);
```

#### Result

```json
undefined
```