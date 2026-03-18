# Week 1 — Object-Oriented Programming (OOP) in JavaScript

OOP is a way to organize code by grouping related data and behavior into **classes** and **objects**.

## What we learned

- **Classes** — blueprints for creating objects
- **Constructor** — runs automatically when you create a new object; sets up initial data
- **Methods** — functions that belong to a class
- **Instantiation** — creating an object from a class using the `new` keyword

## Files

| File | What it does |
|------|-------------|
| `index.js` | Defines an `Animal` class with a constructor and a `bark()` method, then creates instances |

## Key idea

Instead of writing separate variables and functions for every "thing" in your program, a class bundles them together. Create one `Animal` class, then spin up as many animal objects as you need — each with its own name, but sharing the same `bark()` behavior.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  bark() {
    console.log(this.name + " says woof!");
  }
}

const dog = new Animal("Rex");
dog.bark(); // Rex says woof!
```
