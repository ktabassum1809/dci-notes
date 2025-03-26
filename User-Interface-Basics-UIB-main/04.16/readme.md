# CSS Fundamentals:

## yesterday:

- Intro to HTML (basic concepts - meta data - comments - boilerplate)
- Emmet

## Today:

- CSS fundamentals:
   - the ways to use CSS in HTML
   - how to comment in CSS
   - CSS selectors (classes and IDs)

## CSS Fundamentals

- CSS: "Cascading Style Sheets"
    - The styling language of the web
    - Controls how the browser renders our HTML

- Separation of concerns
    - CSS is concerned only with presentation
    - HTML is concerned only with content

- Example of CSS

    ```css
    h1 {
        color: magenta;
        background: lightpink;
    }
    ```

- The code above is one CSS rule
    - The `h1` is a selector, it selects which element(s) are affected
    - The `{ }` are curly braces
    - Inside the curly we have **declarations**
        - `background: lightpink;` is one declaration
        - `color: magenta;`
            - `color` is a property
            - `magenta` is a property value

- CSS can be included into our page in three main ways
    - Inline
    - Internal
    - External (preferred)

- **Inline** CSS goes directly into the target element
    - `<p style="color:red">I'm red!</p>`
    - Very difficult to maintain

- **Internal** CSS is an HTML element that contains CSS for that HTML document
    - But not reusable in multiple files
    ```html
    <style>
        p { color: red; }
        pre { color: darkred; }
    </style>
    ```

- **External** CSS is stored in a separate file
    - Usually the preferred option
    - Easily reusable in multiple HTML files
    - Neatly separated CSS and HTML
    - The browser makes separate requests
        - The browser can "cache" the CSS between requests
        - If you go to the same page 10 times the CSS loads once
        - Caching speeds up production websites

## Selectors and Nesting

- We earlier practiced element selectors like `h1` and `p`
- Two other important selectors are
    - ID selectors
    - Class selectors

- ID selectors
    - HTML elements can have one id
    - `<p id="intro">Lorem ipsum</p>`
    - Think of them as unique names, IDs must be unique per page
    - CSS Selector for IDs: `#intro { color: red; }`

- Class selectors
    - HTML elements can have multiple classes
    - `<h1 class="highlight pop">My page!</h1>`
    - Multiple elements can have the same class
    - Classes are often like a type or grouping
        - Elements with "highlight" should be highlighted

    ```css
    .pop { color: hotpink; }
    .highlight { background: yellow; }
    ```

- HTML is a hierarchy; nested elements
    - Selectors often need to target nested elements as well
        - "All paragraphs are normally blue"
        - "But the paragraphs in the header are red"
    - To target specific kind of structures, you can combine selectors


    ```css
    p { color: blue; }

    header p { color: red; }
    ```

    ## Resources:

    - [w3schools - <ol>](https://www.w3schools.com/tags/tag_ol.asp)
    - [w3schools - css](https://www.w3schools.com/css/css_syntax.asp)