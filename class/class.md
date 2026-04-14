# Javascrupt class

# JavaScript Classes – Interview Questions & Answers

---

## 🧠 1. What is the difference between Class and Constructor Function?

### Answer:

* Both are used to create objects
* Classes are syntactic sugar over constructor functions

```js
// Constructor Function
function Person(name) {
  this.name = name;
}

// Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

---

## 🧠 2. What happens if constructor returns a value?

### Answer:

* If constructor returns **object → overrides this**
* If returns **primitive → ignored**

```js
class A {
  constructor() {
    this.name = "John";
    return { name: "Doe" };
  }
}

console.log(new A().name); // Doe
```

---

## 🧠 3. What are static methods?

### Answer:

* Belong to class, not instance

```js
class A {
  static greet() {
    return "Hello";
  }
}

A.greet(); // works
// new A().greet() ❌
```

---

## 🧠 4. What is method chaining in classes?

### Answer:

Return `this` from methods

```js
class Calculator {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }
}

const result = new Calculator().add(2).multiply(3);
console.log(result.value); // 6
```

---

## 🧠 5. What is encapsulation?

### Answer:

* Restrict direct access to data using private fields

```js
class Bank {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
```

---

## 🧠 6. What is inheritance in JS?

### Answer:

* Child class inherits parent properties

```js
class Animal {
  speak() {
    return "Animal sound";
  }
}

class Dog extends Animal {
  speak() {
    return "Bark";
  }
}
```

---

## 🧠 7. Why super() is required?

### Answer:

* Initializes parent constructor
* Must be called before using `this`

```js
class A {
  constructor() {
    this.value = 10;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(this.value);
  }
}
```

---

## 🧠 8. Difference between arrow function and method?

### Answer:

* Arrow function binds `this` automatically

```js
class A {
  name = "JS";

  method = () => this.name;
}
```

---

## 🧠 9. Can classes be hoisted?

### Answer:

* ❌ No (Temporal Dead Zone)

```js
const obj = new A(); // ❌ error

class A {}
```

---

## 🧠 10. Getter & Setter in class

### Answer:

```js
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
```

---

# 🔥 Output-Based Questions

---

## ❓ Q1

```js
class A {
  static hello() {
    return "Hello";
  }
}

const obj = new A();
console.log(obj.hello());
```

### ✅ Answer:

TypeError (static method not on instance)

---

## ❓ Q2

```js
class A {
  constructor() {
    return { name: "Test" };
  }
}

console.log(new A().name);
```

### ✅ Answer:

"Test"

---

## ❓ Q3

```js
class A {
  #value = 10;
}

const obj = new A();
console.log(obj.#value);
```

### ✅ Answer:

SyntaxError (private field)

---

## ❓ Q4

```js
class A {
  constructor() {
    this.name = "JS";
  }

  getName() {
    return this.name;
  }
}

const obj = new A();
const fn = obj.getName;

console.log(fn());
```

### ✅ Answer:

undefined (lost this)

---

## ❓ Q5

```js
class A {
  name = "JS";

  getName = () => this.name;
}

const obj = new A();
const fn = obj.getName;

console.log(fn());
```

### ✅ Answer:

"JS" (arrow keeps this)

---

# 🚀 Pro Tips

* Always remember `this` behavior
* Static ≠ instance
* Arrow function fixes binding issues
* super() is mandatory in child constructor
* Classes are NOT hoisted

---

 

