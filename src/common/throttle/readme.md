## common.throttle

Create function which accumulate call arguments and will run callback with accumulated arguments after timeout

```javascript
import throttle from '@utils/common/throttle';
```

### Usage #1

```javascript
throttle(callback, delay)
```

**Params:**

* **callback**: (stack: T[]) => void - size of token
* **delay**: number - time in ms

**Return:**

* ((...args: T) => void) & { flush: () => void, destroy: () => void } - return function which accumulate call arguments and will run callback with accumulated arguments after timeout

#### Example

```javascript
const calls = [];
const time = Date.now();

const throttler = throttle((stack) => {
  calls.push({ time: Date.now() - time, stack });
}, 400);

await new Promise((resolve) => {
  setTimeout(() => throttler(1), 0);
  setTimeout(() => throttler(2), 200);

  // callback call at ~400ms

  setTimeout(() => throttler(3), 600);
  setTimeout(() => throttler(4), 800);
  setTimeout(() => throttler(5), 950);

  // callback call at ~1000ms

  setTimeout(() => resolve(calls), 1200);
});
```

#### Result

```json
[
  { time: 463, stack: [[1], [2]] },
  { time: 1055, stack: [[3], [4], [5]] }
]
```

### Usage #2

```javascript
throttle(callback, delay, minDelay, maxDelay)
```

**Params:**

* **callback**: (stack: T[]) => void - size of token
* **delay**: number - time in ms
* **minDelay**: number - min delay in ms
* **maxDelay**: number - max delay in ms

**Return:**

* ((...args: T) => void) & { flush: () => void, destroy: () => void } - return function which accumulate call arguments and will run callback with accumulated arguments after timeout
in this case throttler

#### Example

```javascript
const calls = [];
const time = Date.now();

const throttler = throttle((stack) => {
  calls.push({ time: Date.now() - time, stack });
}, 80, 150, 400);

await new Promise((resolve) => {
  setTimeout(() => throttler(1), 0);

  // callback call at ~150ms, delay ~150ms

  setTimeout(() => throttler(2), 400);
  setTimeout(() => throttler(3), 530);
  setTimeout(() => throttler(4), 600);

  // callback call at ~680ms, delay ~230ms

  setTimeout(() => throttler(5), 800);
  setTimeout(() => throttler(6), 940);
  setTimeout(() => throttler(7), 1020);
  setTimeout(() => throttler(8), 1090);
  setTimeout(() => throttler(9), 1150);
  setTimeout(() => throttler(10), 1170);

  // callback call at ~1200ms, delay ~400ms

  setTimeout(() => throttler(11), 1210);

  // callback call at ~1390ms, delay ~150ms

  setTimeout(() => resolve(calls), 1500);
});
```

#### Result

```json
[
  { "time": 178,  "stack": [[1]] },
  { "time": 701,  "stack": [[2], [3], [4]] },
  { "time": 1208, "stack": [[5], [6], [7], [8], [9], [10]] },
  { "time": 1412, "stack": [[11]] }
]
```