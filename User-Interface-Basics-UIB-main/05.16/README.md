# Planning layout & Flexbox on parent elements

## last day:

- Responsiveness

## today:

- Planning Our Layout
- Figma
- Flexbox on parent elements

### resources:

- [YouTube: Figma UI Design Tutorial](https://www.youtube.com/watch?v=FTFaQWZBqQ8)
- [Flexbox CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [`flex-wrap` CSS Tricks](https://css-tricks.com/almanac/properties/f/flex-wrap/)
- [`flex-wrap` demo Codepen](https://codepen.io/team/css-tricks/pen/bEajLE/1ea1ef35d942d0041b0467b4d39888d3)
- [`flex-flow`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow)
- [Game to practice Flexbox 🐸](https://flexboxfroggy.com/)

### exercises

- Ex1: [38-uib-layout-flexbox](https://classroom.github.com/a/GhpT_8wt)
- Ex2: [39-uib-layout-magazine-landing-page](https://classroom.github.com/a/thu3MNkd)
<br>

*optional (and potentially challenging):*

- Ex3: [40-uib-layout-neumorphic-music-player](https://classroom.github.com/a/HEoGReUy)
<br>

*self-study exercise (Figma):*

- Research on how to use Figma for developers ([this video is recommended](https://www.youtube.com/watch?v=FTFaQWZBqQ8))
- Go to this url and [copy the free template for Figma](https://www.templatefreebies.com/resources/figma-food-delivery-app-ui)

- With a mobile first perspective, develop the design into code using HTML & CSS
- Don't worry about being pixel perfect
- It's a good practice for media queries, so design mobile first and then use min-width to add stuff (following the design)
- If you really wanna dive deeper into Figma, come to us (teachers), and we could find you a spot to share your knowledge with the class

## Theory

### Planning a layout

There are infinite ways to start, but one is this:

- Draw out a flowchart; how will the user accomplish goals (UX)
- Draw a rough pen-and-paper wireframe of the pages (UI/UX)
- Draw a digital wireframe of the pages (UI/UX)
- Make a full design (UI)
- Implement that design (Dev)

- Sometimes only some main pages have a fully designed layout
- In the case of variable content pages, a few examples might be made
    - An example of this is news articles
    - They follow the same *template*, but with different content

**Figma**
- A design tool often used by developers as well
- Helps designers design and developers translate designs to code
- Used for multiple purposes
    - Rough wireframing (even for multiple breakpoints)
    - Designing Screen layouts
    - Designing User flows
    - Creating style guides

### Flexbox on parent elements

**`justify-content`**
justify-content: center; /* Pack items around the center */
justify-content: flex-start; /* Pack flex items from the start */
justify-content: flex-end; /* Pack flex items from the end */
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;

**`align-items`**
align-items: center;
align-items: flex-start;
align-items: flex-end;
align-items: stretch;
align-items: baseline;

_How to center a div, then?_

- `Display: flex` to the parent
- `justify-content: center` + `align-items: center`

**`flex-direction`**

flex-direction: row; - The one by default. Natural flow from left to right
flex-direction: row-reverse; - Like <row>, but reversed
flex-direction: column; - Top to bottom
flex-direction: column-reverse; - Bottom to top

**`flex-wrap`**

We decide if our children elements shrink or jump to the next line

flex-wrap: nowrap; - Default value
flex-wrap: wrap;
flex-wrap: wrap-reverse;

**`flex-flow`**
A shorthand that combines of `flex-direction` and `flex-wrap`