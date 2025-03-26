# Table of Contents

Practice linking to content internally within an HTML file, by creating a table of contents.

## Tasks

Use the provided `index.html` file to complete the following tasks.

### Task 1

- Add the `id` attribute with the value **title** to the `<h1>` element
- Under the last `<p>` element for each `<section>` element, add the following HTML;

```html
<a href="#title">Back to top</a>
```

### Task 2

- Add a unique `id` to all the `<h2>` and `<h3>` elements on the page
- Make the `id` as descriptive as possible
- Directly beneath the `<h1>` element, create an `<h2>` element with the text **Table of contents**

### Task 3

Under the new `<h2>` element;

- Create an ordered list `<ol>`
- Create a `<li>` item for each `<h2>` element on the page, and for each `<li>` element;
  - Create an anchor element `<a>`
  - Fill each `<a>` element with the text of the `<h2>` element
  - Add the attribute `href` with the correct link to the `<h2>` element - using the id you created

> When each link is clicked, the page should scroll to the relevant heading

### Task 4

The heading **History** (`<h2>`) also has subheadings (`<h3>`). These need to be linked to as well.

- Inside the `<li>` element for the heading **History**, create a new ordered list `<ol>`
- Create a `<li>` item for each `<h3>` element under the **History** heading. For each `<li>` element;
  - Create an anchor element `<a>`
  - Fill each `<a>` element with the text of the `<h3>` element
  - Add the attribute `href` with the correct link to the `<h3>` element - using the id you created

> When each link is clicked, the page should scroll to the relevant heading
