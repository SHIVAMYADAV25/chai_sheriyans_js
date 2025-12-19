default Export => can only once in file and can receive by any name
const Export => can be export by the name initailize and can br import by the name it was exported can be have multiple export

Here are **clean, small, no-nonsense Markdown notes** you can directly keep in your JS/React notes 👇
(Told straight, the way it’s actually used in real projects.)

---

## Export in JavaScript (ES Modules)

### 1. `default export`

* A file can have **only ONE default export**
* While importing, you can **use ANY name** (name doesn’t matter)
* Mostly used when the file has **one main thing**

```js
// file: math.js
export default function add(a, b) {
  return a + b;
}
```

```js
// file: app.js
import sum from "./math";   // name can be anything
```

**Key points**

* Only one per file
* No `{ }` while importing
* Common in React components

---

### 2. `named export`

* A file can have **MULTIPLE named exports**
* Must be imported using the **same name**
* Names are **strict and explicit**

```js
// file: math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

```js
// file: app.js
import { add, sub } from "./math";
```

**Key points**

* Multiple exports allowed
* `{ }` required while importing
* Name must match exactly

---

### 3. Renaming while importing (Named Export)

```js
import { add as sum } from "./math";
```

---

### 4. Mixing both (Allowed but don’t overdo it)

```js
export default function multiply(a, b) {
  return a * b;
}

export const divide = (a, b) => a / b;
```

```js
import multiply, { divide } from "./math";
```

---

## Quick Comparison

| Feature        | Default Export | Named Export |
| -------------- | -------------- | ------------ |
| Count per file | Only one       | Multiple     |
| Import name    | Any name       | Must match   |
| Braces `{}`    | ❌ No           | ✅ Yes        |
| Common use     | Main thing     | Utilities    |

---

## Rule of Thumb (Industry Practice)

* **One main thing → default export**
* **Multiple helpers → named exports**
* Overusing default exports = messy imports later

---

If you want, I can also give:

* ❌ **Common mistakes**
* ⚛️ **How React teams decide**
* 📦 **How bundlers treat exports**

Just say the word.
