## array.createSorter

Create sorter function which can be passed into array.prototype.sort method.

```javascript
import { createSorter } from '@utils/array/createSorter';
```

### Usage #1

```javascript
createSorter([key = null[, dir = 'asc']])
```

**Params:**

* **key**: null | string | number _[default: null]_ - path to value of object or null (values as is)

Notes: path works slowly, better use function
* **dir**: asc | desc _[default: asc]_ - sort direction

**Return:**

* (a: T, b: T) => number - default sort function for top level values with asc direction

#### Example

```javascript
['b', 'e', 'c', 'a', 'd'].sort(createSorter(null, 'desc'));
```

#### Result

```json
["e", "d", "c", "b", "a"]
```

### Usage #2

```javascript
createSorter(key[, dir = 'asc']])
```

**Params:**

* **key**: function - function returns value for compare
* **dir**: asc | desc _[default: asc]_ - sort direction

**Return:**

* (a: T, b: T) => number - sort function for returned values with applied direction

#### Example

```javascript
[15, 1, 7, 12, 19].sort(createSorter(v => v % 10));
```

#### Result

```json
[1, 12, 15, 7, 19]
```

### Usage #3

```javascript
createSorter(keys[, dirs = 'asc'])
```

**Params:**

* **keys**: string - paths to value of object separated by commas
* **dirs**: string | (asc | desc)[] _[default: asc]_ - sort directions array or string separated by commas, in case of missing corresponding value it will always take the first direction

**Return:**

* (a: T, b: T) => number - sort function for multiple values with applied directions

#### Example

```javascript
const list = [
  { type: 'glass', count: 5 },
  { type: 'cup', count: 8 },
  { type: 'dish', count: 10 },
  { type: 'cup', count: 3 },
  { type: 'glass', count: 2 },
  { type: 'cup', count: 5 },
];

const sorter = createSorter('count, type', 'asc, desc');

list.sort(sorter);
```

#### Result

```json
[
  { "type": "glass", "count": 2 },
  { "type": "cup",   "count": 3 },
  { "type": "glass", "count": 5 },
  { "type": "cup",   "count": 5 },
  { "type": "cup",   "count": 8 },
  { "type": "dish",  "count": 10 }
]
```

### Usage #4

```javascript
createSorter(keys[, dirs = 'asc'])
```

**Params:**

* **keys**: (string | function)[] - an array of paths to value or functions that returns values for sort
* **dirs**: string | (asc | desc)[] _[default: asc]_ - sort directions array or string separated by commas, in case of missing corresponding value it will always take the first direction

**Return:**

* (a: T, b: T) => number - sort function for multiple values with applied directions

#### Example

```javascript
const list = [
  { type: { category: { name: 'glass' } }, count: { total: 5, available: 1 } },
  { type: { category: { name: 'cup' } }, count: { total: 8, available: 3 } },
  { type: { category: { name: 'dish' } }, count: { total: 10, available: 4 } },
  { type: { category: { name: 'skillet' } }, count: { total: 5, available: 1 } },
  { type: { category: { name: 'cup' } }, count: { total: 5, available: 3 } },
  { type: { category: { name: 'glass' } }, count: { total: 2, available: 2 } },
  { type: { category: { name: 'vase' } }, count: { total: 5, available: 1 } },
  { type: { category: { name: 'cup' } }, count: { total: 5, available: 0 } },
];

const sorter = createSorter(['count.total', 'count.available', item => item.type.category.name], 'asc, desc');

list.sort(sorter);
```

#### Result

```json
[
  { "type": { "category": { "name": "glass" } },   "count": { "total": 2,  "available": 2 } },
  { "type": { "category": { "name": "cup" } },     "count": { "total": 5,  "available": 3 } },
  { "type": { "category": { "name": "glass" } },   "count": { "total": 5,  "available": 1 } },
  { "type": { "category": { "name": "skillet" } }, "count": { "total": 5,  "available": 1 } },
  { "type": { "category": { "name": "vase" } },    "count": { "total": 5,  "available": 1 } },
  { "type": { "category": { "name": "cup" } },     "count": { "total": 5,  "available": 0 } },
  { "type": { "category": { "name": "cup" } },     "count": { "total": 8,  "available": 3 } },
  { "type": { "category": { "name": "dish" } },    "count": { "total": 10, "available": 4 } }
]
```