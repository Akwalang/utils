## common.idGenerator

Create function which return on every call next number or next string

```javascript
import idGenerator from '@utils/common/idGenerator';
```

### Usage #1

```javascript
idGenerator()
```

**Return:**

* () => number - function return next id number

#### Example

```javascript
const nextId = idGenerator();

[nextId(), nextId(), nextId(), nextId()];
```

#### Result

```json
[1, 2, 3, 4]
```

### Usage #2

```javascript
idGenerator(prefix, postfix?)
```

**Params:**

* **prefix**: string | null - id prefix
* **postfix**: string - id postfix

**Return:**

* () => number - function return next id string

#### Example

```javascript
const nextId = idGenerator(null, '-end');

[nextId(), nextId(), nextId(), nextId()]
```

#### Result

```json
["1-end", "2-end", "3-end", "4-end"]
```