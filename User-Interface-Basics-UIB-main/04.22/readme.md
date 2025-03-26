# Some CSS concepts:

## Last week:

- colors
- images `<img>`
- working with dev tool
- CSS units
- pseudo classes
- hyperlinks `<a>`

## Today:

- accessibility 
- cascade 
- specificity 
- inheritance

### Accessibility:

- important for screen readers, mobile phones and slow internet.
- we can achieve high accessibility score by writing semantic html, adding alt attribute to img elements, adding title attribute when needed, adding description meta tag...
- you can find the accessibility score of your site by using the tool `lighthouse` inside chrome dev tool

### Cascading:

- CSS is cascading style sheet, the code is applied from top to bottom.
- if we select the same element multiple times and write conflicting css rules, the one that is at the bottom wins!

### Specificity:  

- how specific is a selector: e.g. id is more specific than class, and class is more specific than element: #box stronger than .box stronger than div
- Specificity is stronger than cascading, but when the selectors have the same specificity score then we fall back to cascading: the one at the bottom wins
- the more ids and classes and elements are mentioned in one selector, the more specific it is.
- you can use this tool to calculate the specificity score of any selector: [link](https://polypane.app/css-specificity-calculator/#selector=)

### Inheritance:

- we can pass css property values from parent to child element by using the value: inherit e.g. height: inherit
- some css properties are inherited by default e.g. color


## Resources:

- [css specificity & !important](https://techrangers.cdl.ucf.edu/2018/09/10/css-specificity.html)
- [css default values list](https://www.w3schools.com/cssref/css_default_values.php)
- [css selector specificity calculator](https://polypane.app/css-specificity-calculator/#selector=)
- [inheritance](https://blog.logrocket.com/css-inheritance-inherit-initial-unset-and-revert/)
- [list of css inherited properties by default](https://www.30secondsofcode.org/css/s/inherited-properties-cheatsheet/)

## Exercises:

- [10-uib-fundamentals-css-cascade](https://classroom.github.com/a/_DQ5zQhI)
- [11-uib-fundamentals-accessibility](https://classroom.github.com/a/WFz7k5bE)