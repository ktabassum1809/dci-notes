# Npm workflow, transpiling, bundling

## last day:

- Modular JavaScript

## today:

- Npm workflow
- Transpiling
- Bundling

### resources:

- [Babel](https://babeljs.io/)
- [Polyfill MDN](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)
- [Webpack site](https://webpack.js.org/)

### exercises

- Ex1: [11-spa-modules-npm-workflow](https://classroom.github.com/a/m-9WbzKx)
- Ex2: [12-spa-modules-exports](https://classroom.github.com/a/fLQEwXnT)

## Theory

### Npm workflow

- Create a folder [npm-workflow](./npm-workflow/)
- Run the command `npm i luxon`
- Check the `node_modules` and the `package.json`
- Create a [javascript file](./npm-workflow/script.js)
- Import { DateTime } from "luxon" to the js file
- Add `console.log(DateTime.now().minus({ weeks:1 }).toISO())`
- Run node on the script file and when it fails add `"type": "module"` to the json file

### Transpiling

- This is like SCSS to CSS
- Transpiling: converting code into different but compatible across environments
    - Similar to compiling
    - People often use the terms interchangeably

### Polyfills

- JS is often transpiled to other JS
    - Some ancient browsers don't support modern features
    - JS is constantly evolving
    - For example IE11 doesn't support Modules
    - Transpilers convert your code to very well supported format
    - Sometimes transpilers add a "polyfill" that adds a feature to a browser

- The polyfill for `Array.prototype.map` would be:

    ```js
    Array.prototype.map = function (callback) {
        const resultArray = [];

        if (typeof callback !== "function") {
            throw Error(`${callback} is not a function`)
        }

        // here, "this" refers to the array that this function is attached to
        for (let i = 0; i < this.length; i++) {
            resultArray.push(callback(this[i], i, this));
        }

        return resultArray;
    }
    ```

### Bundling

- Bundlers are often used together with transpilers
    - Or both as part of a larger build tool
    - Build tools turn development code into production code

- Bundlers... bundle your code
    - Combining many files into one production ready file
    - There are many, many bundlers out there
    - Quick look at [webpack](https://webpack.js.org/)

[A small demo](./bundling/):

- `mkdir bundling` - create the folder "bundling"
- `cd bundling` - access that folder
- `mkdir src ` - create the folder "src"
- `touch src/index.js` - create "index.js" inside of "src" folder
- `npm install --save-dev webpack webpack-cli` - install webpack in the main folder ("bundling")
- add a script to package.json: `"build": "webpack"`
    ```js
    "scripts": {
		"build": "webpack"
	},
    ```
- type `let test = (x) => console.log(123,x); test(2);` in the `index.js` file
- `npm run build`
- Check `dist/main`
- Webpack is good at making your files small