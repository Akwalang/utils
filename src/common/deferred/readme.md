## common.deferred

Create an instance of Promise which can be resolved/rejected from outside

```javascript
import deferred from '@utils/common/deferred';
```

### Usage

```javascript
deferred([callback])
```

**Params:**

* **callback**: (resolve, reject) => void - array of source data

**Return:**

* Promise<T> & { resolve: <T>(value: T | PromiseLike<T>) => void, reject: (reason?: any) => void }

 - Instance of Promise with methods resolve and reject

#### Example

```javascript
const defer = deferred();

setTimeout(() => defer.resolve('Some value'), 1000);

await defer;
```

#### Result

```json
"Some value'
```