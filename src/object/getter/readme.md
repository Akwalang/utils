## object.getter

Return value in object by provided path

```javascript
import getter from '@utils/object/getter';
```

### Usage

```javascript
getter(data, path)
```

**Params:**

* **data**: object | any[] - object or array
* **path**: string - path in js style of required value in income data

**Return:**

* T - value from data or undefined

#### Example

```javascript
const data = {
  a: [
    [],
    [
      {
        b: { c: 15 }
      }
    ]
  ]
};

[
  getter(data, 'a[0][0].b.c'),
  getter(data, 'a[0][1].b.c')
];
```

#### Result

```javascript
[undefined, 15]
```