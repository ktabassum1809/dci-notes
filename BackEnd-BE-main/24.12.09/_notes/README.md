# BE - Mongoose - 01:Mongoose Intro
## Recap
- MongoDB Atlas
  - Connection to Compass
  - Connection to MongoShell

## Agenda
- Theory: MVC, ODM/ORM
- Using MongoDB from Node with Mongoose

## Theory

### MVC

- A classic and very common architectual pattern is called _MVC_
  - Model, View, Controller
  
- **Model** represents the data  of an application
- **View** represents the user interface
- **Controller** handles interaction between views and models
- In a purely REST API backend, we don't really have the _View_ at all
- Let's think of an example
  - We have an application with a feedback form
  - Logged in users can submit feedback form
  - Admin users can log in, view and delete feedback forms (spam)
  - Admins can also create, list, update and delete users
  - Endpoints:
    - `GET /feedback` - requires admin login
    - `POST /feedback` - requires admin or normal user login
    - `DELETE /feedback/:id` - requires admin login
    - `GET /user` - requires admin login
    - `POST /user` - requires admin login to create users
    - `POST /user/login` - allows users to login
    - `PATCH /user/:id` - requires admin login
    - `DELETE /user/:id` - requires admin login
  - Here we have 2 main concepts: `Feedback` and `User`
  - You would probably want an express router for Feedback and User as well.
  - With MVC
    - `Feedback` and `User` are the Models
    - `FeedbackRouter` and `UserRouter` are the Controllers
      - sometime the endpoint functions are called the controllers instead
      - MVC is conceptual, not a tight terminology
    - The `Feedback` and `User` would probably be stored in a Database


### ODM / ORM
- It's very common to use a library to work with databases
- This can make coding easier and code nicer to read
- One way common data libraries work is called ODM or ORM
  - _Object Document Mapping_ (we will focus on this)
  - _Object Relational Mapping_
- **In MongoDB, these libraries "map" a `collection` to a `Model`**
- A model is basically like a JavaScript class
  - Instead of doing `db.feedbacks.find()`
  - You would do `Feedback.find()`
- Concepts like an ODM are a great example of "layers of abstraction"
  - They allow a programmer to focus on less at a time
  - Instead of having to think of database/collection/document
  - You can just _think of the concepts_ and the _details are abstracted_ away
- The biggest ODM for MongoDB is called _Mongoose_
    - Mongoose is an ODM, it maps `Collections` to `Models`


## Mongoose Setup and Basic Usage

**Installing Mongoose**
- To use Mongoose, install it via your terminal using npm. `npm install mongoose`

**Connecting to MongoDB Atlas**
- To connect to your MongoDB Atlas database, use `mongoose.connect()` with your database URI.
_Example:_
    ```js
    const mongoose = require('mongoose');
    mongoose.connect('your-connection-string', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=> console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error', err));
    ```

**Listening to Mongoose Connection Events**
- Mongoose provides several connection events that you can listen to for debugging and monitoring purposes.
  - _connected_: This event is fired when Mongoose successfully connects to the database.
  - _error_: This event is fired if there is an error while connecting.
  _Example_
  ```js
  mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
  });

  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error:', err);
  });
  ```


### Models and Schemas

- Organize your project by creating a `models` folder.
- To use Mongoose, we have to define the _shape of our data_
    - Kind of defining a _blueprint of the data_
    - In other words; what does our data look like

    ```js
    // Basic object example
    const user = {
        _id: "123",
        email: "samy@example.org",
        password: "qwerty123",
        accountNumber: 8675309,
        description: "but most of all, Samy is my hero"
        isVerified: true,
    }

    // The shape of or data might be like this
    {
        _id             // String, cannot be empty
        email           // String, cannot be empty
        password        // String, cannot be empty
        accountNumber   // Integer, cannot be empty
        description     // String, can also be empty/null
        isVerified      // Boolean, false by default until account is verified
    }
    ```


- A schema defines the structure of the documents in a collection
  - Example:
    ```js
    const productSchema = new mongoose.Schema({
      name: String,
      price: Number,
      inStock: Boolean
    });
    ```

### Models
- A model is a wrapper for the schema. It provides an interface to the database:
    
    - Example:
      ```js
      const Product = mongoose.model('Product', productSchema);
      ```


### Creating Documents

- To create a new document in the database, use `Product.create()`. This is an asynchronous operation.
  
  - Example:
    ```js
    const newProduct = await Product.create({
      name: 'Sample Product',
      price: 10.99,
      inStock: true
    });
    console.log(newProduct);
    ```

### Finding Documents
- To find documents in the database, use `Product.find()`. This is also an asynchronous operation.

    - Example:
      ```js
      const products = await Product.find({ inStock: true });
      console.log(products);
      ```

## Wrap-up

- MVC is a software architecture pattern
- stands for Model View Controller
- Mongoose is a MongoDB ODM
- Object-Document Mapper
- Mongoose has Schemas to define the shape of our data
- Mongoose Schemas create Mongoose Models
- Mongoose Models are used to control objects

## References
- [Mongoose Docs](https://mongoosejs.com/docs/index.html)
- [MVC - MDN](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

## Exercises
- [14_be-mongoose-basic-exercises](https://classroom.github.com/a/nKtFvexi)

## Upcommings
- Creating a simple API (CRUD)
- Seeding a database with mock data