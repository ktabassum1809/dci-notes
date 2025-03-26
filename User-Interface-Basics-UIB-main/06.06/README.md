# Bootstrap

## last day:

- NPM 
- Scss introduction 

## today:

- CSS framework 
- Bootstrap introduction

### resources:

- [CSS frameworks statistics](https://2023.stateofcss.com/en-US/css-frameworks/)
- [Bootstrap documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

### exercises

- Ex1: [63-UIB-framework-bootstrap](https://classroom.github.com/a/gtHFEEP0)

## Theory

### CSS Frameworks
- A CSS framework is like a library of classes
    - Instead of writing CSS, you use the library
    - You pick existing classes that fit your need
    - Class could be like this:

```css
.text-dark-warning {
            background: #ccc;
            color: orange;
        }
```

- To use a CSS framework you usually have to follow a system
    - Frameworks might have a specific way of working
    - They expect classes to be used in a specific way


- They might include
    - A color theme or themes
    - A built-in reset stylesheet
    - A grid system sometimes based on flex, sometimes grid
    - Typography rules (like our example class above)
    - Icons

- They also sometimes contains small JavaScript helpers
    - These provide more complex features
    - Popups, carousel elements, tooltips...

### Bootstrap

- The most used CSS framework is called Bootstrap 
> Bootstrap is used by 78.5% of all the websites whose
> CSS framework we know. This is 18.7% of all websites.

**Install with CDN**
Instead of downloading it. 

- Installing (adding) Bootstrap to a project is essentially
    - Adding one CSS and one JS link
    - Optionally adding one extra JavaScript link

**Bootstrap: documentation of Components and utilities**
- When using Frameworks (and other tools), *read the documentation*
    - Official docs are usually correct
    - Official docs are usually up to date
    - Resources like YouTube are great
        - But rarely enough alone
        - Advanced tools might not have YouTube content
        - So getting used to using docs is important

**Smart copy pasting**
- When using something like Bootstrap you often copy content
    - Examples from docs or other existing code
    - Really, you do this very often as a developer

- When you copy paste be smart
    - Actually read what you are copying
    - Understand the content
    - Experiment with the content to understand it deeper
    - This will slow you down in the beginning
    - But will speed you up in the long term