## common.random

Returns random number between 2 values

```javascript
import random from '@utils/common/random';
```

### Usage #1

```javascript
random(lower, upper[, floor = false])
```

**Params:**

* **lower**: number - lower border value
* **upper**: number - upper border value
* **floor**: false _[default: false]_ - remove decimal numbers

**Return:**

* any - random number in range [lower, upper)

#### Example

```javascript
random(5, 9);
```

#### Result

```json
6.965876254700356
```

### Usage #2

```javascript
random(lower, upper[, floor = false])
```

**Params:**

* **lower**: number - lower border value
* **upper**: number - upper border value
* **floor**: true _[default: false]_ - remove decimal numbers

**Return:**

* any - random floored number in range [lower, upper]

#### Example

```javascript
random(3, 7, true);
```

#### Result

```json
7
```