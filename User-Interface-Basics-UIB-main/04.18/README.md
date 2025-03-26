# Fundamentals 4

## yesterday:

- Hyperlinks (`<a>`)
- Colors in CSS
- Pseudo Classes

## today:

- CSS units
- Using images
- Debugging with dev tools

### resources:

- [`<img>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [Importance of the `alt` attribute](https://alttexthalloffame.org/)
- [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
- [`float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
- [Web dev tools](https://developers.google.com/web/tools/chrome-devtools/css)
- [Web dev tools for CSS](https://developers.google.com/web/tools/chrome-devtools/css/reference)


### exercises

- Ex1: [08-uib-fundamentals-css-units](https://classroom.github.com/a/9GaykpZ6)
- Ex2: [09-uib-fundamentals-build-a-blog](https://classroom.github.com/a/6Hf7A4P2)
- Ex3: [Fake news] Fake a piece of news on a news site, send it to a friend, family or post it on a random chat and tell us on Monday about the reactions. Use the Chrome Web Inspector and Debugger.

## Extra
Take a look into Firefox dev tools

## Theory

### CSS Units

- `px` and `%`
- `em` vs `rem`
- `vh` and `vw` (`dvh`, `dvw`)

Absolute units vs relative units
All units above are relative, but the pixels. Pixels can get problematic for responsiveness, but they are commonly used.

`em` are relative to the parent (if there's no parent, then the root) and `rem` are always relative to the root.

`vh` and `vw` work similar to percentatges, but they are relative to the viewport. Dinamic viewports can be a solution for different elements depending on devices (`dvh`, `dvw`).

### Images

Images can have absolute and relative paths. Relative to what? Relative to its current location.