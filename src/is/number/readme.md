## is.number

Checks if value is a number

```javascript
import isNumber from '@utils/is/number';
```

### Usage

```javascript
isNumber(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is a number

#### Example

```javascript
[
  isNumber(0),
  isNumber(Infinity),
  isNumber(NaN),
  isNumber(new Number(42)),

  isNumber('123'),
  isNumber([]),
  isNumber({}),
  isNumber(true),
]
```

#### Result

```json
[
  true, true, true, true,
  false, false, false, false
]
```