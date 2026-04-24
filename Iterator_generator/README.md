# 📘 JavaScript Iterators & Generators Guide

---

# 🔁 Iterators in JavaScript

## 📌 What is an Iterator?

An **iterator** is an object that allows sequential access to elements of a collection.

### ✅ Iterator Protocol

An object is an iterator if it has a `next()` method.

```js
{
  value: any,
  done: boolean
}
```

---

## 📌 Example: Custom Iterator

```js
function createIterator(arr) {
  let index = 0;

  return {
    next() {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      }
      return { value: undefined, done: true };
    }
  };
}

const it = createIterator([10, 20, 30]);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
```

---

## 📌 Built-in Iterators

```js
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

console.log(iterator.next());
```

---

## 📌 Iterable vs Iterator

| Concept  | Description                       |
| -------- | --------------------------------- |
| Iterable | Object with `[Symbol.iterator]()` |
| Iterator | Object with `next()`              |

---

## 📌 Custom Iterable Object

```js
const obj = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;

    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};

for (let val of obj) {
  console.log(val);
}
```

---

# ⚡ Generators in JavaScript

## 📌 What is a Generator?

A **generator** is a function that can pause and resume execution.

---

## 📌 Syntax

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
```

---

## 📌 Example

```js
function* gen() {
  yield 10;
  yield 20;
  yield 30;
}

const g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
```

---

## 📌 How It Works

* `yield` → pause execution
* `next()` → resume execution

---

## 📌 Passing Values

```js
function* gen() {
  const x = yield 10;
  console.log(x);
}

const g = gen();

g.next();
g.next("Hello");
```

---

## 📌 Infinite Generator

```js
function* infinite() {
  let i = 0;

  while (true) {
    yield i++;
  }
}
```

---

# 🔄 Iterator vs Generator

| Feature     | Iterator | Generator   |
| ----------- | -------- | ----------- |
| Creation    | Manual   | `function*` |
| Complexity  | High     | Low         |
| State       | Manual   | Automatic   |
| Readability | Low      | High        |

---

# 💻 Coding Exercises

## 🧪 1. Range Iterator

```js
function range(start, end) {
  return {
    [Symbol.iterator]() {
      let current = start;

      return {
        next() {
          if (current <= end) {
            return { value: current++, done: false };
          }
          return { done: true };
        }
      };
    }
  };
}

for (let num of range(1, 5)) {
  console.log(num);
}
```

---

## 🧪 2. Range Generator

```js
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
```

---

## 🧪 3. Fibonacci Generator

```js
function* fibonacci() {
  let a = 0, b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
```

---

# 🎯 Interview Questions

## ✅ Beginner

1. What is an iterator?
2. What does `next()` return?
3. What is `Symbol.iterator`?
4. Difference between iterable and iterator?

---

## ⚡ Intermediate

5. How does `for...of` work?
6. Can objects be iterable?
7. What is a generator?
8. What is `yield`?

---

## 🚀 Advanced

9. Generator vs async generator?
10. Memory benefits of generators?
11. Can generators be used for infinite loops?
12. What happens after `return` in generator?

---

# 🔥 Tricky Questions

## ❓ 1. Output

```js
function* gen() {
  yield 1;
  return 2;
  yield 3;
}

const g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
```

### ✅ Output

```js
{ value: 1, done: false }
{ value: 2, done: true }
{ value: undefined, done: true }
```

---

## ❓ 2. Execution Flow

```js
function* gen() {
  console.log("Start");
  yield 1;
  console.log("Middle");
  yield 2;
}

const g = gen();

g.next();
g.next();
```

### ✅ Output

```
Start
Middle
```

---

## ❓ 3. Spread Operator

```js
function* gen() {
  yield 1;
  yield 2;
}

console.log([...gen()]);
```

### ✅ Output

```
[1, 2]
```

---

# 💡 Pro Tips

* Generators are lazy (on-demand execution)
* Iterators define protocol, generators implement it
* Generators are one-time use
* `for...of` works only with iterable objects

---

# 🚀 Advanced Topics (Next Step)

* Async Generators (`async function*`)
* Real-world use (pagination, streaming APIs)
* Generator-based state machines

---

🔥 **Tip:** Practice writing custom iterators manually — interviewers love that.

---
