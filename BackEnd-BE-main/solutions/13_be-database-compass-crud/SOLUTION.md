# Solution

## Tasks

### Task 1

1. `use dci`

2. `db.createCollection("faculty")`

### Task 3

1. `db.faculty.find().pretty()`

2. `db.faculty.count()`

### Task 4

1. `db.faculty.find({qualification:'Ph.D'}).pretty()`

2. `db.faculty.find({$and:[{exp:{$gt:7}},{exp:{$lt:13}}]}).pretty()`

### Task 5

1. `db.faculty.find({subjects:{$in:["Python","Java"]}}).pretty()`

2. `db.faculty.find({$and:[{subjects:'Java'},{exp:{$gt:8}}]}).pretty()`

3. `db.faculty.find({$or:[{type:"Part Time"},{subjects:"JAVA"}]}).pretty()`

### Task 6

`db.faculty.find().select("name qualification").pretty()`

### Task 7

`db.faculty.updateMany({},{$inc:{age:1,exp:1}})`

### Task 8

`db.faculty.updateOne({name:"Lina"},{$set:{qualification:"Ph.D",type:"Part Time"}})`

### Task 9

`db.faculty.updateMany({$push:{subjects:"MongoDB"}})`

### Task 10

1. `db.faculty.deleteMany({exp:{$lt:10}})`
2. `db.faculty.deleteMany({type:"Part Time"})`
3. `db.faculty.deleteMany({qualitification:"Ph.D"})`
