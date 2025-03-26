# Font size, direction, text-align, text styling and pseudo-elements

## last day:

- Design: UI/UX
- inline semantic elements
- Fonts

## today:

- Font sizing (`em` & `rem`)
- Direction and alignment
- Style text (`font-weight`, `text-decoration`, `text-shadow`)
- Pseudo-elements (`::before` & `::after`)

### resources:

- [Foo Bar](https://stackoverflow.com/questions/4868904/what-is-the-origin-of-foo-and-bar)
- [`dir` global attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
- [Text shadow inspiration](https://codepen.io/argyleink/pen/QWzGmXK)
- [`::before` vs `:before`](https://css-tricks.com/to-double-colon-or-not-do-double-colon/)

### exercises

- Ex1: [22-uib-design-text-styling-formatting](https://classroom.github.com/a/9nq01dxz)
- Ex2: [23-uib-design-typography-text](https://classroom.github.com/a/cquyKw5o)
  <br /><br />bonus:
- Ex3: [24-UIB-UI-UX-typography](https://classroom.github.com/a/bpvU4_00)

## Theory

### `em` and `rem` [live code 1](./font-sizing.html) + [live code 2](./font-size-root.html)

_relative to the parent: `em`_ <br />
_relative to the root: `rem`_

- It's a fairly common need to size elements based on text size

- For example: add an icon inside a line of text that's the same size as the text -> This can be achieved with the em and rem units

Root has a default font-size of 16px. We can target root with `html` or `:root` (being the second more specific).

### direction and text align [live code 3](./direction-alignment.html)

We saw in class how to write text in RTL (right to left) languages with the `direction= rtl` attribute but is more recommended to use the HTML `dir` global. Example:

`<p dir="rtl">صباح الخير جميعا</p>`

Aligning text (and images) with `text-align`

- Start/left - same if the direction is set left to right
- End/right - same
- Center
- Justify

### Font styling [live code 4](./font-weight.html)

Pick fonts, font sizes (`font-size`) and font styles (`font-style`) you need for your project.

- If we import a BOLD font, the weight should be normal for that font!
- A separate bold font can look better than "boldifying" a normal font
- The same is true for italics; a font _made_ to be italic is nicer

Underline and line-through with css `text-decoration`

Text shadow (`text-shadow`) follows... x-axis + y-axis + blur + color

### Pseudo-elements `::before` and `::after` [live code 5](./pseudo-elements.html)

`::before` and `::after` is a pseudo-element which strangely allows CSS to add an element into the HTML document

### Wrap up

- Em unit: relative to parent font size
- Rem unit: relative to root font size
- Pseudo-elements are powerful styling tools
- Text shadows are pretty
- Text direction is important for international content!
