## debug.write

Stringify data and write it in the file.

```javascript
import { write } from '@utils/debug/write';
```

### Usage

```javascript
write(data[, name])
```

**Params:**

* **data**: any - debug data for write
* **name**: string _[default: __filename]_ - name for debug file

Name of the result file will be matched by follow rule:

1. in case of missing argument "name" it will match file name of place where this function was called and remove extension

2. add to this file postfix .__debug__.json

**Return:**

* Promise<undefined> - promise that will be resolved after write operation will be finished

#### Example

```javascript
await write([1, 'a', {}], 'get-users');
// create file get-users.__debug__.json
```

#### Result

```javascript
undefined
```