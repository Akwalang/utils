## object.setter

Return value in object by provided path

```javascript
import { setter } from '@utils/object/setter';
```

### Usage

```javascript
setter(data, path)
```

**Params:**

* **data**: object | any[] - object or array
* **path**: string - path in js style of required value in income data. Array indexes can be avoid and it will works as method push
* **value**: any - value for set

**Return:**

* void - 

#### Example

```javascript
const data = {
  a: [
    []
  ]
};

setter(data, 'a[1][].b.c', 'Some text');
```

#### Result

```json
{
  "a": [
    [],
    [
      {
        "b": {
          "c": "Some text"
        }
      }
    ]
  ]
}
```