# UIB - Layout - 05: Grid container

**Last week:**

- Flexbox

**Today:**

- CSS Grid

## CSS Grid

- GRID - Similar to Flexbox
- Grid and Flexbox are both good tools together, no reason to abandon flexbox

- Flexbox
    - Parent flex container and flex items
    - Often used for fluid space distribution and simple alignment: card contents, navbars...
    - Two axis, but one-dimensional
        - You have one main axis: row or column
        - Wrapping is still one "line" of elements
        - Each "line" of elements is automatic, can't define "line" heights for rows

- Grid
    - Parent grid container and grid items
    - Often used for larger layouts; divides page or section of it into regions
    - Layouts are still be flexible
    - Somewhat similar to HTML tables, but more flexible and powerful
    - Two dimensional!
        - You control / define both horizontal and vertical
        - You can define column widths and row heights
        - Can't do everything, but still awesome

- CSS grid terminology
    - Container
    - Grid items
    - Track (Row, column)
    - Gaps, sometimes called gutters (gutter is Design language)
    - Lines

## CSS Grid on parent elements

- `display: grid;`

- `grid-template-columns: 2em 1fr 2fr;`
    - Defines Width and Number of columns
    - If columns are equal, you can also do `repeat(4, 1fr)`
    - Amount of rows here depends on amount of grid items
    - "fr" = Fraction recommended for grids
    > The fr unit distributes available space, not all space. 
    > Therefore, if one of your tracks has something large inside it, 
    > there will be less free space to share.
    > https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids#flexible_grids_with_the_fr_unit

- `gap: 1em`
    - shorthand for `column-gap` and `row-gap`

- `grid-template-rows: 40vh 2.5em;`
    - Defines the heights of the first two rows

- `grid-auto-rows: 100px`
    - Defines the height of extra/spillover rows
    - Could cause content to overflow
    - Flexible height with `grid-auto-rows: minmax(100px, auto)`

## Wrap-up

- Flexbox is 1D, grid is 2D
- Columns and rows

## Exercises

- [47-UIB-layout-grid-parent](https://classroom.github.com/a/Sazz2rS5)
- [48-UIB-layout-grid-and-flexbox-harmony](https://classroom.github.com/a/LRtg8Y4m)

## Self-study prompts

- Don't forget MDN learning paths https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids
- Excellent grid guide https://css-tricks.com/snippets/css/complete-guide-grid
- Grid learning website https://www.euismod.dev/#/
- CSS grid game https://cssgridgarden.com/
