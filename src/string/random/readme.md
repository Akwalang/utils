## string.random

Generate string with required length and random chars

```javascript
import { random } from '@utils/string/random';
```

### Usage

```javascript
random(length[, letters = LETTERS])
```

**Params:**

* **length**: number - size of token
* **letters**: string _[default: 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]_ - string with chars for pick

**Return:**

* string - string with random chars

#### Example

```javascript
random(15, '0123');
```

#### Result

```json
"010310123203330"
```