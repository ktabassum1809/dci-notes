# Responsive Roses

Here we will demonstrate how we can affect a page's content using only media queries.

## Task

For this task you will have to update both the [index.html](/index.html) and [style.css](/style.css) files.

### Requirements

- Build a website that shows different content, depending on the width of the browser (using breakpoints).

- When a breakpoint is active, the content from the other breakpoints should be hidden.

> Use the reference images below as a guide.

#### For screen widths up to 600px

- Has the heading 'Roses are #FF0000'
- Displays the image [images/red-rose.jpg](/images/red-rose.jpg)
- Uses the linear gradient `linear-gradient(140deg, black, red)` for the background

![600px.png](/assets/600px.png)

#### For screen widths between 601px and 900px

- Has the heading 'Violets are #0000FF'
- Displays the image [images/blue-rose.jpg](/images/blue-rose.jpg)
- Uses the linear gradient `linear-gradient(to right, black, blue)` for the background

![600px.png](/assets/601px-900px.png)

#### For screen widths 901px and up

- Has the heading 'All my base, are belong to you'
- Displays the image [images/colorful-rose.jpg](/images/colorful-rose.jpg)
- Uses the linear gradient `linear-gradient(hotpink, #d8eefd)` for the background

![901px.png](/assets/901px.png)

## Bonus Task

Show the images using `<picture>` and `<source>` elements with inline media breakpoints
