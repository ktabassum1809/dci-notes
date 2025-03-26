# Fullstack auth

Build a fullstack application that allows users to register and login.

## Tasks

### Task 1

Examine the frontend code included in the [frontend](./frontend/) folder. This can be run with the VS Code Live Server.

Create a simple `register.html` page;

- Use the [login.html](./frontend/login.html) as a template.
- Only ask for the **username** and **password** during the registration process

### Task 2

Examine the backend code included in the [backend](./backend/) folder.

1. Allow requests from everywhere (CORS)
2. Connect to MongoDB Atlas (DO NOT commit your credentials!)
3. Create a User schema and model with a simple `username` and `password`
4. Create the following endpoints
   - `GET /users` <- returns a list of all users in the database
   - `POST /login` <- receives username and password
   - `POST /register` <- receives username and password

### Task 3

In `POST /login`

- If the login is successful, return the secret to the frontend
- If the login fails, return a response with the HTTP status code `400`

### Task 4

In `login.html` after the login is successful;

- Save the secret into localstorage
- Then, refresh the page
- When the login page is loaded, check the localstorage
- If the localstorage contains the secret make a request to `GET /users`
  - If the request is successful, display a list of users instead of the login screen

### Task 5

In `GET /users`;

- Require the secret as a query parameter
  > For example `/users?secret=0cc175b9c0f1b6a831c399e269772661`
- If the secret is correct, return a list of all users
- If the secret is wrong, return a response with the HTTP status code `401`
- What are the downsides of authenticating like this?
