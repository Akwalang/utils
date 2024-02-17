## is.date

Checks if value is classified as an instance of Date

```javascript
import { isDate } from '@utils/is/date';
```

### Usage

```javascript
isDate(value)
```

**Params:**

* **value**: any - value to be checked

**Return:**

* boolean - value is a date

#### Example

```javascript
[
  isDate(new Date()),
  isDate('2022-01-01T00:00:00.000z'),
]
```

#### Result

```json
[true, false]
```