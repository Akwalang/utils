## common.setAsyncTimeout

Create Promise which will be resolved after setup delay

```javascript
import { setAsyncTimeout } from '@utils/common/setAsyncTimeout';
```

### Usage

```javascript
setAsyncTimeout(delay)
```

**Params:**

* **delay**: number - delay value in ms

**Return:**

* Promise<undefined> - Promise which will be revealed after timeout

#### Example

```javascript
const start = Date.now();

await setAsyncTimeout(500);

const end = Date.now();

end - start >= 500;
```

#### Result

```json
true
```