## array.create

Create array with prefilled values.

```javascript
import { create } from '@utils/array/create';
```

### Usage #1

```javascript
create(from, to[, step = 1])
```

**Params:**

* **from**: number - start number
* **to**: number - end number
* **step**: number - step for match middle array items (number sign doesn't matter)

**Return:**

* number[] - array of number from..to

#### Example

```javascript
create(3, -6, 2);
```

#### Result

```json
[3, 1, -1, -3, -5]
```

### Usage #2

```javascript
create(count[, map = index => index])
```

**Params:**

* **count**: number - count of items in new array
* **map**: (index: number) => T _[default: index => index]_ - function returns array items

**Return:**

* T[] - array with setup length and matched values

#### Example

```javascript
create(4, i => 'item-' + i);
```

#### Result

```json
["item-0", "item-1", "item-2", "item-3"]
```

### Usage #3

```javascript
create(count, asyncFunction)
```

**Params:**

* **count**: number - count of items in new array
* **asyncFunction**: async (index: number) => T - async function returns array items

**Return:**

* Promise<T[]> - promise of array with setup length and matched values

#### Example

```javascript
await create(4, async i => 'value-' + i);
```

#### Result

```json
["value-0", "value-1", "value-2", "value-3"]
```