# SASS

## last day:

- Animations with keyframes

## today:

- SASS (SCSS)
- DCI Boilerplate

### resources:

- [Sass in 100 Seconds](https://www.youtube.com/watch?v=akDIJa0AP5c)
- [Sass documentation](https://sass-lang.com/)
- [@use](https://sass-lang.com/documentation/at-rules/use/)

### exercises

Ex0: Create a little project using SCSS (as we learned with the watch command and try using new stuff, like nesting or variables)

optional:

- Ex1: [61-UIB-framework-sassy-speaker-shop](https://classroom.github.com/a/o3pOR_38)
- Ex2: [62-framework_sass_random_bars](https://classroom.github.com/a/xtt5SN0u)

## Theory

### Transpilation

- Some programming languages are "compiled"
    - They are converted from source code to machine code
    - That machine code can then be run by the computer

- HTML and CSS don't need to be compiled
    - The browser _understands_ them without compilation
    - Today we will write `SCSS` code and compile that to `CSS`
    - Sometimes people call this transpilation instead of compilation

- We are going to run a program that compiles our code
    - Our code can be in a language that's somehow better than CSS
    - A program then processes our code to regular CSS
    - This workflow is called using a CSS `preprocessor`

- There are many CSS preprocessors out there
    - PostCSS
    - LESS
    - Stylus
    - Sass

- Developer workflows and setups can get real complex real fast

“Sass has two syntaxes! The SCSS syntax (.scss) is used most commonly. It’s a superset of CSS, which means all valid CSS is also valid SCSS. The indented syntax (.sass) is more unusual: it uses indentation rather than curly braces to nest statements, and newlines instead of semicolons to separate them. All our examples are available in both syntaxes.”

SCSS avoids repetition
Self-study: mixins

### Installation

`$ npm install -g sass`
`$ sass --version`

### SCSS: compiling `sass [input file] [output file]`

- Create manually input.scss
- sass --watch input.scss output.css (we run it locally)
- Link the css file to the html

### SCSS Features

- variable declaration `$[name]: [value]` and usage `$[name]`
- nesting: 
```$mainColor: red;
$bgColor: lightpink;
main {
    h2 {color: $mainColor; background: $bgColor;}
    p {color: $mainColor; background: $bgColor;}
}
```

- @use to call modules
- built-in modules (like math)

### Boilerplate

NPM install: local versus global: `npm install`, `npm install -g`
-g installs in your whole computer

So you can install things with npm globally or locally
Global: install something into your system (we installed sass)
Local: install something into your project (we installed the boilerplate)
