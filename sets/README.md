Set objects are collections of values. A value in the set may only occur once; it is unique in the set's collection. 

# 📘 JavaScript Set – Complete Guide

---

## 🧠 What is a Set?

A **Set** is a built-in JavaScript object that stores **unique values only**.

* ❌ No duplicates allowed
* ✅ Maintains insertion order
* ✅ Can store any data type

```js
const set = new Set();
```

---

## 🔥 Basic Example

```js
const set = new Set();

set.add(1);
set.add(2);
set.add(2);

console.log(set); // Set(2) {1, 2}
```

---

## ⚙️ Set Methods

### ➤ add()

```js
set.add(10);
```

### ➤ delete()

```js
set.delete(10); // true/false
```

### ➤ has()

```js
set.has(1); // true
```

### ➤ clear()

```js
set.clear();
```

### ➤ size

```js
console.log(set.size);
```

---

## 🔄 Iterating over Set

```js
const set = new Set([1, 2, 3]);

for (let value of set) {
  console.log(value);
}
```

---

## 🔁 Convert Array ↔ Set

### Remove duplicates from array

```js
const arr = [1, 2, 2, 3];
const unique = [...new Set(arr)];

console.log(unique); // [1, 2, 3]
```

### Convert Set → Array

```js
const set = new Set([1, 2, 3]);
const arr = [...set];
```

---

## 🧪 Important Concepts

### 🔹 1. Objects are stored by reference

```js
const set = new Set();

set.add({});
set.add({});

console.log(set.size); // 2
```

---

### 🔹 2. NaN is treated as same value

```js
const set = new Set();

set.add(NaN);
set.add(NaN);

console.log(set.size); // 1
```

---

### 🔹 3. Order is preserved

```js
const set = new Set([3, 1, 2]);

console.log([...set]); // [3, 1, 2]
```

---

## 🚀 Real Use Cases

### ✅ Remove duplicates

```js
const unique = [...new Set([1, 2, 2, 3])];
```

---

### ✅ Fast lookup

```js
const set = new Set([1, 2, 3]);

set.has(2); // O(1)
```

---

### ✅ Intersection

```js
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

const intersection = new Set(
  [...a].filter(x => b.has(x))
);

console.log([...intersection]); // [2, 3]
```

---

### ✅ Union

```js
const union = new Set([...a, ...b]);
```

---

### ✅ Difference

```js
const diff = new Set(
  [...a].filter(x => !b.has(x))
);
```

---

## ⚠️ Common Mistakes

❌ Access like array

```js
set[0]; // undefined
```

❌ Forgetting spread operator

```js
[...set]; // correct way
```

---

## 🔥 Advanced: WeakSet

```js
const ws = new WeakSet();

const ws = new WeakSet();

const obj1 = { name: "A" };
const obj2 = { name: "B" };

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true

let obj = { name: "JS" };

const ws = new WeakSet();
ws.add(obj);

// Remove reference
obj = null;

// Now object can be garbage collected automatically


```

Methods Available

WeakSet has only 3 methods:

ws.add(obj);
ws.delete(obj)


### Features:

* Only stores objects
* Weak references (auto garbage collected)
* Not iterable

WeakSet stores objects only
Uses weak references
Helps prevent memory leaks
No iteration, no size

Methods Available

WeakSet has only 3 methods:

ws.add(obj);
ws.delete(obj);
ws.has(obj);

Real Use Cases (Important for Interviews)
✅ 1. Track visited objects (without memory leak)

const visited = new WeakSet();

function process(obj) {
  if (visited.has(obj)) return;

  visited.add(obj);
  console.log("Processing", obj);
}
✅ 2. Private data (before #private fields existed)
const privateData = new WeakSet();

class User {
  constructor() {
    privateData.add(this);
  }

  check() {
    return privateData.has(this);
  }
}
✅ 3. DOM element tracking (avoid memory leaks)
const clickedElements = new WeakSet();

document.addEventListener("click", (e) => {
  if (!clickedElements.has(e.target)) {
    clickedElements.add(e.target);
    console.log("First click on element");
  }
});

---

## 🆚 Set vs Array

| Feature      | Set    | Array     |
| ------------ | ------ | --------- |
| Duplicates   | ❌ No   | ✅ Yes     |
| Order        | ✅ Yes  | ✅ Yes     |
| Index access | ❌ No   | ✅ Yes     |
| Search speed | ⚡ Fast | 🐢 Slower |

---

## 📝 Summary

* Set stores **unique values**
* Best for:

  * Removing duplicates
  * Fast lookup
* Key methods:

  * `add()`, `delete()`, `has()`, `clear()`
* Convert using:

  * `[...set]`

---

## 🚀 Use Cases in Real Projects

* Remove duplicate API data
* Cache values for fast lookup
* Compare datasets (union/intersection)
* Optimize performance

---

## 👨‍💻 Author Notes

Use this file for:

* Interview preparation
* GitHub documentation
* Daily JavaScript revision

---
