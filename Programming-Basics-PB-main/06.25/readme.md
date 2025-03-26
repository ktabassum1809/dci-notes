# PB - Language - 01: Introduction to programming

- note: to run the js code in index.js file use this command: 'node index.js'


**Yesterday**
- End of UIB

**TODAY**
- Introduction to programming
- NodeJS
- JavaScript data types
- Variables and constants

## Introduction to programming

- HTML and CSS are great
- But they are not considered programming languages
- Programming languages have the ability to perform computations and logic

- There are two main types of languages
    - Interpreted languages
    - Compiled languages

- Compiled languages
    - For example C++, Rust
        - Traditionally compiling changes source code to binary
    - Your computer can't run a C++ code file directly
        - It has to be converted into a machine-runnable form
        - Kind of like your browser can't understand SCSS directly

- Interpreted languages
    - For example Python and **JavaScript**
    - You run the source code file directly
        - Your computer reads it line by line and interprets it
        - No secondary format

- Programming languages are often sorted loosely as high-level to low-level
    - Low-level languages are closer to machine language
        - Closer to the physical language of the computer
    - High-level languages are closer to human language
        - They have a strong abstraction from the details of the computer

- From low to high
    - Physical binary ones and zeroes
    - Machine code
    - Assembly
    - C++
    - Java
    - Python
    - JavaScript

- We will learn JavaScript (JS)
    - A high-level interpreted language
    - Originally developed specifically to make websites dynamic
        - An image changes when you move your mouse over it
        - An input element value is checked before submitting a form
        - Every 10 seconds, an image changes
    - Now, JS is everywhere

- Atwood's law

    > Any application that can be written in JavaScript, will
    > eventually be written in JavaScript.
    >
    > Jeff Atwood, Co-Founder of Stack Overflow


- We will learn JS without the browser
    - This is to really focus on the concepts of programming
    - Not just programming for the web

- It happens that you start to work using a language you have never seen before
    - Once you know one language, adding more is much easier
    - Learning PHP after JavaScript will be much easier
    - Learning Java after JavaScript will be much easier
    - Learning Python after JavaScript will be much easier


- The _fundamental_ concepts we learn will apply to most languages
    - We are learning the concepts
    - We are learning the terminology of programming
    - We are learning how to think as a programmer
    - We are learning how to solve problems using code

- Some languages exist for a very specific usage
    - The language R is specially for statistics and data visualization

- JavaScript is more general purpose
    - It still dominates the browser
        - It's not the only language for programming things for the browser but it's the main one
    - It is mainly used in projects connected to the web
        - Which really now is most things
    - JS has grown from it's browser only roots to do many things, e.g.
        - Task automation
        - Mobile applications
        - Web servers (backend programming)

## ECMAScript

- We won't go into the history of JavaScript that much
- But JavaScript is actually based on a definition called ECMAScript (ES)

- ECMAScript is a standardized specification for scripting languages
    - It defines the syntax, semantics, and core features of a languages
    - Notable versions introducing new features include:
        - ECMAScript 3 (1999)
        - ECMAScript 5 (2009)
        - ECMAScript 6 (ES2015)
        - ECMAScript 2016 (ES7)

- JavaScript
    - JavaScript conforms to the ECMAScript specification
    - JavaScript is the only relevant implementation of ES any more
    - JavaScript adheres to the ECMAScript specification
        - Meaning it implements the features and behavior defined by ES
        - But it also adds its own features beyond what is specified in ES

## Node.js

- We are going to be running our code with `Node.js` instead of the browser
- Node is an open-source, cross-platform JavaScript runtime environment
- It's extremely popular
- It's a command line app, let's all try `node --version`

- The node program executes (interprets!) your JavaScript
    - You can use it to run a specific file
        - `node file.js`
    - Or you can run it like the terminal, interactively
        - `node`
        - This is called the REPL


## JavaScript data types

- JavaScript can handle all kinds of data
    - Our "Hello world" value is a String
    - String is a data type

- JS primitive data types: String, Number, Boolean, Undefined, Null
    - String values: "foo", "potato", "I am a fluffy bunny"
    - Number values: 4, 9001, -5, 3.14159
    - Boolean values: true, false

- The type of a value is really important
    - Numbers behave different from Strings, for example
    - https://www.vinted.de/catalog?search_text=cat&price_to=10&color_ids[]=1
        - Classic product search example
        - The URL contains three types of data
            - `search_text=cat` - `cat` is a String value
            - `price_to=10` ----- `10` is a Number value
            - `color_ids[]=1` --- `1` represents a Boolean value
                - The color number 1 is enabled; `true`
                - Normally booleans are "true" / "false", this is a complex case

- There are also Object data types
    - We will learn these later, they are more complex
    - But to mention a few; Array, Object, Date...

## Variables and constants

- In JS you usually store these values in variables
- You could think of variables are labelled boxes
    - The "greeting" box probably contains some text like "Hello world"
    - It will be much clearer with practice


- Variables declared with `const` are "constants"
    - They can't be assigned a new value
    - `const` is a called a "keyword"
        - Certain words have a special meaning
        - You can't use these for variable names, like `const const = 6`
    - The `=` is called an "assignment operator"
    - Its meaning is "Put whatever value is on my right side to my left side"
        - "Put 73 into age"

- We like constants
    - The help prevent errors in the long run
    - If you need to change a variable, you can use `let` instead of `const`
    - There's also a third one called `var`
        - That's kind of like `let`, but... historical
        - It does weird things
        - AVOID IT

- Always use `const` unless you need `let` and avoid the legacy: `var`


- All of these variables that we have exist for a _teeeeeny tiny_ moment in time
    - They exist in the _memory_ of your computer
        - Specifically RAM - Random Access Memory
        - This stores temporary values needed by applications
        - RAM = super mega fast, but *volatile*
            - Who knows what I mean by volatile?
            - Your RAM gets cleared every time you restart
        - More RAM means can run more programs at once
        - More RAM means programs can store more variables
        - Some programs need a LOT of memory
        - When you run `node main.js`, Node loads the file into memory
        - A limited resource
    - The disk storage is where things are stored long-term
        - Much slower
        - But keeps its values between restarts
        - And there's lots more of it than RAM

- When you do `const stuff = 42`
    - JavaScript (Node) reserves a little bit of your RAM
    - And writes the value "42" in there
    - Once it no longer needs that variable, that memory is cleared
    - Other programs can then reuse that bit of memory

## Wrap-up

- JavaScript (JS) is a high-level interpreted language
- Node is used to run JS files
- Variables are declared and a value is assigned
- `const` always, unless we need `let` to allow reassigns
- Error messages are our friend
- Code styling in JS is a bit flexible, consistent and clean code is important!
- JS primitive types: Number, String, Boolean, Undefined, Null
- A Null value means explicitly empty
- An Undefined value usually means variable is declared but not assigned a value


### Exercises:

- [1-PB-language-naming-conventions](https://classroom.github.com/a/4hAdY1IM)
- [2-PB-language-variables-and-constants-basic](https://classroom.github.com/a/BeRjVLtn)
- [3-PB-language-console-log](https://classroom.github.com/a/mZrf0Fkw)