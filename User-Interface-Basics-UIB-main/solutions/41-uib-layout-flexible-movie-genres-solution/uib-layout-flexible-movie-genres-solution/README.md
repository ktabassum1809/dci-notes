# Flexible Movie Genres

With this exercise, we will be showing how you can create a flexible layout for a list of categories (in this case, movie genres).

## Tasks

### Task 1

Modify the [index.html](/index.html) file and;

- Create an HTML element with the class `genres`
- Inside, create 6 child HTML elements with the following text and background colors. They should be created in the following order:
  - Action → `rgb(30, 144, 255)`
  - Thriller → `rgb(190, 178, 178)`
  - Comedy → `rgb(255, 214, 30)`
  - Horror → `rgb(0, 0, 0)`
  - Drama → `rgb(169, 169, 169)`
  - Romance → `rgb(255, 0, 0)`
- Give each genre its own CSS class, for example, for "Action" add the class `action`

### Task 2

Modify the [style.css](/style.css) file to apply the following CSS effects;

- Make `.genres` a flex-container
- Each flex-item should have a base width of `200px` and a fixed height of `100px`
- By default, each flex-item should take up all available space
- The text should be centered for each flex-item
- The `romance` section should take up three times as much space as the other sections
- The `comedy` section should take up six times as much space as the other sections

> **Hint**: Consider using `flex-wrap` to achive the last two points

## Reference Image

![Reference Image](/reference.gif)
