# 📘 JavaScript WeakMap – Complete Guide

---

## 🧠 What is a WeakMap?

A **WeakMap** is a special type of Map where:

* ✅ Keys must be **objects only**
* ✅ Holds **weak references** to keys
* ❌ Not iterable
* ❌ No size property

```js
const wm = new WeakMap();
```

---

## 🔥 Why "Weak"?

👉 Because it does NOT prevent garbage collection.

If there are no other references to a key object, it will be **automatically removed** from the WeakMap.

```js
let obj = { name: "JS" };

const wm = new WeakMap();
wm.set(obj, "Developer");

obj = null; 
// Now key can be garbage collected
```

---

## ⚙️ Available Methods

### ➤ set(key, value)

```js
wm.set(obj, "value");
```

### ➤ get(key)

```js
wm.get(obj);
```

### ➤ has(key)

```js
wm.has(obj);
```

### ➤ delete(key)

```js
wm.delete(obj);
```

---

## ❌ What WeakMap DOES NOT support

```js
wm.size        // ❌ undefined
wm.clear()     // ❌ not available
for (let x of wm) {} // ❌ not iterable
```

👉 Reason: Keys can disappear anytime due to garbage collection.

---

## 🧪 Important Concepts

---

### 🔹 1. Keys must be objects

```js
const wm = new WeakMap();

wm.set(1, "a"); // ❌ TypeError
wm.set({}, "a"); // ✅ valid
```

---

### 🔹 2. Key equality is reference-based

```js
const wm = new WeakMap();

wm.set({}, "A");
wm.set({}, "B");

console.log(wm); // two different entries
```

---

### 🔹 3. Garbage collection behavior

```js
let user = { name: "John" };

const wm = new WeakMap();
wm.set(user, "data");

user = null; 
// entry is removed automatically
```

---

## 🆚 Map vs WeakMap

| Feature     | Map   | WeakMap      |
| ----------- | ----- | ------------ |
| Key types   | Any   | Only objects |
| Strong ref  | ✅ Yes | ❌ No         |
| Iterable    | ✅ Yes | ❌ No         |
| Size        | ✅ Yes | ❌ No         |
| GC friendly | ❌ No  | ✅ Yes        |

---

## 🚀 Real Use Cases

---

### ✅ 1. Private Data Storage

```js
const privateData = new WeakMap();

class User {
  constructor(name) {
    privateData.set(this, { name });
  }

  getName() {
    return privateData.get(this).name;
  }
}

const user = new User("John");
console.log(user.getName()); // John
```

---

### ✅ 2. Avoid Memory Leaks

```js
const cache = new WeakMap();

function process(obj) {
  if (cache.has(obj)) return cache.get(obj);

  const result = obj.value * 2;
  cache.set(obj, result);

  return result;
}
```

---

### ✅ 3. DOM Element Metadata

```js
const elementData = new WeakMap();

function track(element) {
  elementData.set(element, { clicked: true });
}
```

---

## ⚠️ Common Mistakes

❌ Using primitive as key

```js
wm.set("key", "value"); // ❌
```

❌ Trying to iterate

```js
for (let item of wm) {} // ❌
```

---

## 🔥 Exercises (Interview Practice)

---

### ❓ 1. Why WeakMap is not iterable?

👉 Explain the reason.

---

### ❓ 2. When to use WeakMap instead of Map?

👉 Give real-world scenario.

---

### ❓ 3. Private Data Implementation

👉 Create a class with private data using WeakMap.

---

### ❓ 4. Cache System

👉 Build a cache using WeakMap.

---

### ❓ 5. Compare Set vs WeakSet vs Map vs WeakMap

👉 Write differences.

---

## 🧠 Quick Summary

* WeakMap stores **key-value pairs**
* Keys must be **objects**
* Uses **weak references**
* Helps prevent **memory leaks**
* No iteration, no size

---

## 🚀 Use This File For

* Interview preparation
* GitHub documentation
* Advanced JavaScript concepts

---

## 👨‍💻 Author Notes

Master Map + WeakMap + Set + WeakSet
= Strong JavaScript fundamentals 🚀

---
