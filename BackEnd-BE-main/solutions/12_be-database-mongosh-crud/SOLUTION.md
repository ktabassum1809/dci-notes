# Solution

## Tasks

### Task 1

1. `use organizer`
2. `db.createCollection("todo")`

### Task 2

`db.todo.insertOne({lernen: 'JS', completed: true})`

### Task 3

```js
db.todo.inserMany([
  { lernen: `React`, completed: true },
  { lernen: `Html`, completed: true },
  { lernen: `MongoDb`, completed: false },
  { lernen: `Mysql`, completed: false },
  { lernen: `Typescript`, completed: false },
]);
```

### Task 4

`db.todo.find()`

### Task 5

`db.todo.find({completed:true})`

### Task 6

```js
db.todo.updateOne({ lernen: "MongoDb" }, { $set: { completed: true } });
```

### Task 7

```js
db.todo.updateMany({ completed: false }, { $set: { completed: true } });
```

### Task 8

`db.todo.deleteOne({lernen:'Html'})`

### Task 9

`db.todo.deleteMany({})`

### Task 10

`db.todo.drop()`

### Task 11

`db.dropDatabase()`

## <ins>Bonus Task :</ins>

1. `use customers`

2. `db.createCollection("developers")`

3. Insert this Document:

```js
db.costumers_info.insertOne({
  name: "John",
  Job: "Web Developer",
  address: {
    country: "Spain",
    code: 1111,
  },
});
```

4.

```js
db.costumers -
  info.updateOne({ name: "John" }, { $set: { "address.country": "Germany" } });
```
