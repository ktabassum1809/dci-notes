# Vite

This is a simple exercise to practice "bootstrapping" a React project with [vite](https://vitejs.dev/).

## Tasks

- For these tasks, you do not need to do any coding
- Instead, use the `terminal` to answer the questions
- Add your answers directly here into the README

### Task 1

- Open a terminal in the folder where this [README.md](./README.md) file is located
- Run the command `npm create vite@latest my-project`
- Select `React` as the framework and `JavaScript` as the variant
- **Don't run the project yet**
- Run the command `find my-project -type f` in the Terminal

  - Q: What did this command do?
  - A: Lists all the files in my-project

  - Q: How many files are inside my-project?
  - A: 12

- Run `find my-project -type d` in the Terminal

  - Q: What did this command do?
  - A: Lists all the folders in my-project

  - Q: How many folders are inside my-project?
  - A: 2 (children) / 3 (descendants)

### Task 2

Test that the React project located in the folder `my-project` project actually runs by running the following commands:

```bash
cd my-project
npm install
npm run dev
```

- Q: What two images are displayed when you open the project in the browser?
- A: React and Vite logos

- Q: What port is the project running in?
- A: 5173 (which spells out SITE in leetspeak! Or alternatively VITE if you think of 5 as the roman numeral V)

- Q: What is the first line of text you see in the terminal after the project started?
- A: "VITE v4.4.9 ready in 485 ms"

### Task 3

- You may need to spend some time using the internet to research the answers for the following questions
- Don't spend too long! There's no need to research these topics deeply
- Answer in your own words

- Q: What is the difference between the `public` and `src` folders?
- A: Files in public are served directly by the server and kept as is during build. Files in src are processed during build.

- Q: Describe how can you change the title of your page
- A: Change the `title` element in index.html

- Q: Which 4 **scripts** are included in `package.json`?
- A: dev, build, lint, preview

- Q: What is the difference between **regular** dependencies and **dev** dependencies in `package.json`?
- A: Regular deps are included in the output when the project is built

- Q: What happens when you run `npm run build`?
- A: Vite generates a compressed and production optimized version of your site

- Q: Can you run `dist/index.html` with Live server?
- A: Technically yes, but practically no. This is because the root of the project is the **parent** of `my-project` instead of `my-project` itself, the compiled sources have a wrong baseURL and don't really work. The dist is not meant to be used in this way.

- Q: Remove all CSS files and imports, then run the build again. Do you still see a css file in `dist`?
- A: I don't!
