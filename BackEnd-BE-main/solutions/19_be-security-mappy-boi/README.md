# Mappy boi is easy to break

This is an an app for citizens to report abandoned bicycles to their municipality.

## Tasks

> Before starting, read the code! 🤓
>
> - As a developer, you won't only be spending time writing code, but also **reading** existing code
> - Try and understand what it is doing

> Answer the questions below, and write your answers in the `README.md`

You can switch to the relevant folder or even open it directly in a new VS Code.

- BACKEND

  - `$ cd backend`
  - `$ npm i`
  - `$ npm run dev`

- FRONTED
  - `$ cd frontend`
  - `$ npm i`
  - `$ npm run start`

### Task 1

When you run the frontend, you'll notice it gives an error.

This is because the backend is sending malformed data! It looks like someone was able to save broken data into the "database"!

1. Thinking as the hacker, how would you have tried to save this malformed data?
2. Thinking as the backend developer, how could you prevent this from happening?
3. Thinking as the frontend developer, how could you prevent the page from crashing from this malformed data?

### Task 2

Delete the broken object and reload the page.

- Does the page work now?

### Task 3

We have another issue. Automated bots can easily submit multiple false reports.

> Research: What is a captcha?

1. How would you try to make this form only accept entries from humans?
2. Explain how would you design a captcha for this form

## Bonus Tasks

1. Implement a captcha for this form without using any extra npm dependencies
2. Make the frontend look 𝓖𝓸𝓸𝓭
