## common.tokenGenerator

Generate string with required length and random chars

```javascript
import tokenGenerator from '@utils/common/tokenGenerator';
```

### Usage

```javascript
tokenGenerator(length[, letters = LETTERS])
```

**Params:**

* **length**: number - size of token
* **letters**: string _[default: 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]_ - string with chars for pick

**Return:**

* string - string with random chars

#### Example

```javascript
tokenGenerator(15, '0123');
```

#### Result

```json
"010310123203330"
```