/* 


RECORD STORE

BACKEND

- Setting up server.js
- Connecting to MongoDB
- Error handlers
    - generic errors
    - not found
- Routes
    - UserRouter 
        - register
        - login
        - get single user by id
        - get all users
        - delete users
        - update users
    - Records Router
        - seed database
        - add record
        - delete record
        - update record
        - get all records
        - get single record
- Models
    - Records
        
    - Users
        - subdocument for address
        - relations to records, 1 user can have multiple records
- Security
    - Hashing passwords with bcrypt
    - Generating tokens with JWT on registering and logging in
    - adding tokens to cookies
- Protected routes
    - only logged in users can see records
    - only admins can handle records
- Validation
- Sanitization 
 */