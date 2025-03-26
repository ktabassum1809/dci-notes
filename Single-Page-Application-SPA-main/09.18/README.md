# Modules I

## last day:

- Event propagation and delegation

## today:

- Modules

### exercises

- Ex1: [09-spa-modules-basics](https://classroom.github.com/a/i22Pdmat)
- Ex2: [10-spa-modules-calculator](https://classroom.github.com/a/ELKi7Ukq)


## Theory

- Modules allow us to divide and organize our code:

    - Code organization is vital to maintaining large projects

    - There is usually some logic on how projects are divided
        - Separate folders for images, CSS and JS
        - Or separate folders for the footer, login form etc

    - Often the JS of a project is divided into multiple files
        - menu.js login.js register.js chat.js search.js
        - These files can even depend on each other or share code
        - That gets complex FAST

    - One of the issues of having lots of JS is name collisions
        - What if two JS files both use a global helper variable "users"?
        - Or the same helper function "getFirst()"?

    - The solution is scope isolation
        - Keep everything private and only "reveal" what we want to
        - Encapsulating all of the details and helpers and such inside

There are two types of exports:

    - Named exports
        - They allow you to export multiple values from a module. You can export variables, functions, or classes by their names:

        ```js
        // fruits.js
        export const fruit1 = "apple"
        export const fruit2 = "orange"
        export const fruit3 = "banana"
        export const fruit4 = "watermelon"
        //  import { fruit1, fruit2, fruit3, fruit4 } from "./fruit.js"
        ```

        ```js
        // vegetables.js
        export const veg1 = "lettuce"
        export const veg2 = "cucumber"
        export const veg3 = "zucchini"
         // import * as veg from "./vegetables.js"
        ```

    - Default exports
        - A module can have one default export, which can be a variable, function, or class. The default export is useful when you want to export a single main value or a primary function from your module:

        ```js
        const bread = "bread"

        export default bread
        // import bread from "./bread.js"
        ```

    - Named imports and default imports:

        ```js
        // menu.js
        import { fruit1, fruit2, fruit3, fruit4 } from "./fruit.js" // curly braces to select the named imports
        import * as veg from "./vegetables.js" // another way of importing named elements - the veg variable is declared here right away

        import bread from "./bread.js" // no curly braces needed - it could be called bread or any other name we choose

        console.log(fruit1, fruit2, fruit3, fruit4)
        console.log(veg.veg1, veg.veg2, veg.veg3)

        console.log(bread)
        ```

### Modular JavaScript locally

- You need to create a package.json and change the type to module.

```js
// package.json

{
	"type": "module"
}

```

### Modular JavaScript in the browser

When linking the main script to the index.html you need to specify the type (type="module")

```js
<script type="module" src="main.js"></script>
```

- [modules-example](modules-example/)

### Benefits of using modules

- Organization: keeps code organized by splitting it into separate files.
- Reusability: modules can be reused across different projects
- Scope isolation: prevents variables from leaking into the global scope
- Encapsulation: hides internal details, exposing only what is necessary