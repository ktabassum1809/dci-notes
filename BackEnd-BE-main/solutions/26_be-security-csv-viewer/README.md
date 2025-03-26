# Data viewer application

This is a generic application for viewing CSV data. It's not great at handling all types of data, but it functions well for common CSVs.

## Task

The application was working, but somehow the backend [multer](https://www.npmjs.com/package/multer) code got completely broken!

- Fix the file uploading logic. You only need to add and fix _very little_ code, _only_ in the backend [server.js](./backend/server.js).

- Please also make sure uploaded files are not added into git, place them into a folder called `uploads` in the backend.

Good luck!

## Requirements

- Update the **backend** code so that the file upload mechanism works
- Use the sample [CSV data](./data/) to test the upload works, with the provided frontend code
