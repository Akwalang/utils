## string.template

Replace <%= plaiceHolders %> by values from params object. It also support paths.

```javascript
import { template } from '@utils/string/template';
```

### Usage

```javascript
template(str[, params = {}])
```

**Params:**

* **str**: string - string for replace
* **params**: {} _[default: {}]_ - object with values for replace

**Return:**

* string - string after replaces

#### Example

```javascript
template(
  'Hi, <%= name %>. Can we have a call at <%= date.time %> <%= date.day %>?',
  { name : 'John', date: { time: '10:00', day: 'tomorrow' } }
);
```

#### Result

```json
"Hi, John. Can we have a call at 10:00 tomorrow?"
```