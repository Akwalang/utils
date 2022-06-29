## string.replaceAll

In string replace every substring on replacer

```javascript
import replaceAll from '@utils/string/replaceAll';
```

### Usage

```javascript
replaceAll(value, sub, replacer)
```

**Params:**

* **value**: string - string for replace
* **sub**: string - what should be replaced
* **replacer**: string - what will replace

**Return:**

* string - string after replaces

#### Example

```javascript
replaceAll('can you can a can?', 'can', 'dog');
```

#### Result

```json
"dog you dog a dog?"
```