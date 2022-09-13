## object.merge

Update first object by values from the second object. Array will not be merged only replaced.

```javascript
import merge from '@utils/object/merge';
```

### Usage

```javascript
merge(value)
```

**Params:**

* **dest**: Record<any, any> - target object
* **src**: Record<any, any> - source object

**Return:**

* Record<any, any> - dest object

#### Example

```javascript
const dest = {
  a: 1,
  b: {
    c: [1, 2],
    d: {
      e: 15
    }
  }
};

const src = {
  b: {
    c: [3, 4],
    d: {
      f: true
    }
  }
};

merge(dest, src);
```

#### Result

```json
{
  "a": 1,
  "b": {
    "c": [3, 4],
    "d": {
      "e": 15,
      "f": true
    }
  }
}
```