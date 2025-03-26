# Background-images & positioning

## yesterday:

- Modeling boxes
- Reseting `* {margin: 0; padding:0; box-sizing: border-box;}`

## today:

- Background images `background-image`
  - `background-size`, `background-repeat`, `no-repeat`
  - `background` shorthand
  - `linear-gradient` & ``
- Positioning `position`
  - `static`, `relative`, `absolute`, `fixed`, `sticky`
  - Position offsets - `top`, `bottom`, `right`, `left`
  - `z-index`

### resources:

- [`background-image`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)
- [`background-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size)
- [`background` shorthand](https://www.w3schools.com/css/css_background_shorthand.asp)
- [Linear gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
- [Radial gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- [Repeting linear gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/repeating-linear-gradient)
- [CSS gradient generator](https://cssgradient.io/)
- [Position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- [Ex-student portfolio for inspiration](https://razportfolio.onrender.com/)

### exercises

- Ex1: [16-uib-boxes-images-and-gradients](https://classroom.github.com/a/yPob1--Y)
- Ex2: [17-uib-boxes-header-and-footer](https://classroom.github.com/a/jfi8Z_DI)
- Practice with `static`, `relative`, `absolute`, `fixed`, `sticky` with a creation of your own

Optional:
- Ex3: [18-uib-boxes-make-me-a-happy-robot](https://classroom.github.com/a/R-tVhoXj)

## Theory

Background images are only about decoration, but not content. They can't have the alt attribute.

### `background-size`

    `background-size: contain`: Scales the image as large as possible within its container *without cropping* or *stretching* the image - meaning: it's not breaking the aspect ratio (which would be a deformation). It might result in repeating.

    `background-size: cover`: instead of respecting the whole image, it may actually crop it to fill the space. It's not breaking the aspect ratio

### `linear-gradient` + `radial-gradient`

Creates an image consisting of a progressive transition between two or more colors.

### `static`, `relative`, `absolute`, `fixed`, `sticky`

- Static: default value, elements are positioned according to the flow. The `top`, `right`, `bottom`, `left`, and `z-index` properties have no effect.

- Relative: elements are positioned according to the normal flow of the page. We can use the properties like `top`, `right`, `bottom`, and `left` to position the element from its original place.

- Absolute: elements are removed from the natural document flow. The element is positioned relative to its closest positioned ancestor (if any) or to the initial containing block. That means the nearest ancestor with a position value other than `static`. Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.

- Fixed: Elements are positioned relative to the viewport. They stay in place when scrolling. An example would be navigation bars that are always visible. They read the values `top`, `right`, `bottom`, and `left`.

- Sticky: Elements behave like relative positioned elements until they reach a certain scroll position in the viewport, at which point they become fixed. This is useful for things like sidebars that should stick to the side of the page as you scroll until they reach the top or bottom. They read the values `top`, `right`, `bottom`, and `left`.

### `z-index`

Controls the position of an element in the z-axis (it's depth, if it's in front of other elements, etc.)
