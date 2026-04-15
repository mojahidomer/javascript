# 📘 JavaScript Map – Complete Guide

---

## 🧠 What is a Map?

A **Map** is a built-in JavaScript object that stores **key-value pairs**.

### ✅ Key Features:

* Keys can be **any type** (object, function, primitive)
* Maintains **insertion order**
* No duplicate keys
* Faster lookup compared to objects in many cases

```js
const map = new Map();
```

---

## 🔥 Basic Example

```js
const map = new Map();

map.set("name", "John");
map.set("age", 25);

console.log(map.get("name")); // John
```

---

## ⚙️ Important Methods

### ➤ set(key, value)

```js
map.set("a", 1);
```

### ➤ get(key)

```js
map.get("a"); // 1
```

### ➤ has(key)

```js
map.has("a"); // true
```

### ➤ delete(key)

```js
map.delete("a");
```

### ➤ clear()

```js
map.clear();
```

### ➤ size

```js
console.log(map.size);
```

---

## 🔄 Iterating over Map

```js
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

for (let [key, value] of map) {
  console.log(key, value);
}
```

---

## 🔁 Convert Map ↔ Array

### Map → Array

```js
const map = new Map([
  ["a", 1],
  ["b", 2],
]);

const arr = [...map];
```

### Array → Map

```js
const arr = [["a", 1], ["b", 2]];

const map = new Map(arr);
```

---

## 🧪 Important Concepts

---

### 🔹 1. Keys can be objects

```js
const map = new Map();

const obj = { id: 1 };

map.set(obj, "User");

console.log(map.get(obj)); // User
```

---

### 🔹 2. Key equality (reference-based)

```js
const map = new Map();

map.set({}, "A");
map.set({}, "B");

console.log(map.size); // 2
```

👉 Different object references → different keys

---

### 🔹 3. Order is preserved

```js
const map = new Map();

map.set("c", 3);
map.set("a", 1);
map.set("b", 2);

console.log([...map]);
// [["c", 3], ["a", 1], ["b", 2]]
```

---

## 🆚 Map vs Object

| Feature   | Map         | Object           |
| --------- | ----------- | ---------------- |
| Key types | Any         | String/Symbol    |
| Order     | ✅ Preserved | ❌ Not guaranteed |
| Size      | ✅ map.size  | ❌ manual         |
| Iteration | ✅ Easy      | ❌ Complex        |

---

## 🚀 Real Use Cases

---

### ✅ 1. Frequency Counter

```js
const arr = ["a", "b", "a", "c"];

const freq = new Map();

for (let char of arr) {
  freq.set(char, (freq.get(char) || 0) + 1);
}

console.log(freq); // Map { 'a' => 2, 'b' => 1, 'c' => 1 }
```

---

### ✅ 2. Caching (Memoization)

```js
const cache = new Map();

function square(n) {
  if (cache.has(n)) return cache.get(n);

  const result = n * n;
  cache.set(n, result);

  return result;
}
```

---

### ✅ 3. Store DOM/Data mapping

```js
const userMap = new Map();

userMap.set(1, { name: "John" });
userMap.set(2, { name: "Jane" });
```

---

## ⚠️ Common Mistakes

❌ Using object instead of Map

```js
const obj = {};
obj[{}] = "test";

console.log(obj); // [object Object]
```

✅ Use Map instead

```js
const map = new Map();
map.set({}, "test");
```

---

## 🔥 Advanced: WeakMap

```js
const wm = new WeakMap();
```

### Features:

* Keys must be **objects**
* Weak references (garbage collected)
* Not iterable

---

# 🧪 Exercises (Interview Practice)

---

## ❓ 1. Create Map from Array

```js
const arr = ["a", "b", "c"];
```

👉 Create a map where key = element, value = index

---

## ❓ 2. Count Frequency

```js
const str = "aabbcc";
```

👉 Count character frequency using Map

---

## ❓ 3. First Non-Repeating Character

```js
const str = "aabbcdde";
```

👉 Find first unique character

---

## ❓ 4. Group By Property

```js
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];
```

👉 Group users by age using Map

---

## ❓ 5. Convert Object → Map

```js
const obj = { a: 1, b: 2 };
```

👉 Convert into Map

---

## ❓ 6. Two Sum using Map

```js
const nums = [2, 7, 11, 15];
const target = 9;
```

👉 Return indices

---

## ❓ 7. LRU Cache (Advanced)

👉 Implement basic LRU cache using Map

---

# 🧠 Quick Summary

* Map stores **key-value pairs**
* Keys can be **any type**
* Better than object for:

  * Dynamic keys
  * Frequent insert/delete
* Key methods:

  * `set`, `get`, `has`, `delete`, `clear`

---

# 🚀 Use This File For

* Interview preparation
* GitHub documentation
* JavaScript revision

---

## 👨‍💻 Author Notes

Master Map + Set + WeakMap = Strong DSA + JS fundamentals

---

# 📘 JavaScript Map – Exercise Answers

---

## ✅ 1. Create Map from Array

### Question:

```js
const arr = ["a", "b", "c"];
```

### Answer:

```js
const map = new Map();

arr.forEach((val, index) => {
  map.set(val, index);
});

console.log(map);
// Map { 'a' => 0, 'b' => 1, 'c' => 2 }
```

---

## ✅ 2. Count Frequency

### Question:

```js
const str = "aabbcc";
```

### Answer:

```js
const freq = new Map();

for (let char of str) {
  freq.set(char, (freq.get(char) || 0) + 1);
}

console.log(freq);
// Map { 'a' => 2, 'b' => 2, 'c' => 2 }
```

---

## ✅ 3. First Non-Repeating Character

### Question:

```js
const str = "aabbcdde";
```

### Answer:

```js
const freq = new Map();

// Step 1: Count frequency
for (let char of str) {
  freq.set(char, (freq.get(char) || 0) + 1);
}

// Step 2: Find first unique
for (let char of str) {
  if (freq.get(char) === 1) {
    console.log(char); // c
    break;
  }
}
```

---

## ✅ 4. Group By Property

### Question:

```js
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 25 },
];
```

### Answer:

```js
const group = new Map();

for (let user of users) {
  const key = user.age;

  if (!group.has(key)) {
    group.set(key, []);
  }

  group.get(key).push(user);
}

console.log(group);
/*
Map {
  20 => [ { name: 'A', age: 20 }, { name: 'B', age: 20 } ],
  25 => [ { name: 'C', age: 25 } ]
}
*/
```

---

## ✅ 5. Convert Object → Map

### Question:

```js
const obj = { a: 1, b: 2 };
```

### Answer:

```js
const map = new Map(Object.entries(obj));

console.log(map);
// Map { 'a' => 1, 'b' => 2 }
```

---

## ✅ 6. Two Sum using Map

### Question:

```js
const nums = [2, 7, 11, 15];
const target = 9;
```

### Answer:

```js
const map = new Map();

for (let i = 0; i < nums.length; i++) {
  const complement = target - nums[i];

  if (map.has(complement)) {
    console.log([map.get(complement), i]); // [0, 1]
    break;
  }

  map.set(nums[i], i);
}
```

---

## ✅ 7. LRU Cache (Advanced)

### Answer:

```js
class LRUCache {
  constructor(limit) {
    this.limit = limit;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const value = this.cache.get(key);

    // refresh key
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    if (this.cache.size > this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}

// Usage
const lru = new LRUCache(2);

lru.put(1, 1);
lru.put(2, 2);
lru.get(1); // 1
lru.put(3, 3); // removes key 2
lru.get(2); // -1
```

---

# 🧠 Key Learnings

* Map is great for:

  * Frequency counting
  * Fast lookup
  * Grouping data
* Always use:

  * `map.get(key) || default`
* LRU uses:

  * Map + insertion order trick

---

# 🚀 Practice Tip

Try solving:

* Without looking at solution
* Then optimize using Map

---

## 👨‍💻 Author Notes

Master these problems → You’re ready for:

* Frontend interviews
* DSA rounds
* Real-world coding

---

