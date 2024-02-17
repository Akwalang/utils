## process.args

Get args from process parameters

```javascript
import { args } from '@utils/process/args';
```

### Usage

```javascript
args(argv)
```

**Params:**

* **meta**: string[] - process arguments (process.argv)

**Return:**

* object - object of parameters with values processed by JSON.parse method

#### Example

```javascript
args([
  '',
  '',
  '-param1=value',
  '--param2',
  'param3=10',
  'param4=[true,false,true]',
  'param5=false'
]);
```

#### Result

```json
{
  "param1": "value",
  "param2": true,
  "param3": 10,
  "param4": [true, false, true],
  "param5": false
}
```