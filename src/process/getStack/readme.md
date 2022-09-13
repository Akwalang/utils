## process.getStack

Get files list of call stack till the place where it was called

```javascript
import getStack from '@utils/process/getStack';
```

### Usage

```javascript
getStack([from[, to]])
```

**Params:**

* **from**: number - start index for slice

**Params:**

* **to**: number - end index for slice

**Return:**

* { file: string }[] - list of previous call files

#### Example

```javascript
getStack(0, 4);
```

#### Result

```json
[
  { "file": "C:/projects/utils/src/process/getStack/mock/4_fourth.js" },
  { "file": "C:/projects/utils/src/process/getStack/mock/3_third.js" },
  { "file": "C:/projects/utils/src/process/getStack/mock/2_second.js" },
  { "file": "C:/projects/utils/src/process/getStack/mock/1_first.js" }
]
```