## object.clone

Return deep copy of provided value

```javascript
import clone from '@utils/object/clone';
```

### Usage

```javascript
clone(value)
```

**Params:**

* **value**: T - any value

**Return:**

* T - copy of the value

#### Example

```javascript
clone({ a: 1, b: 'string', c: [1, 2, 3] });
```

#### Result

```json
{
  "a": 1,
  "b": "string",
  "c": [1, 2, 3]
}
```