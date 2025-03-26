# Styling Forms

## last day:

- HTML Forms

## today:

- Form design guidelines
- Placeholder attribute and styling it
- `:focus` pseudoclass and `outline`
- `disabled` and `readonly` attributes
- Checkbox Styling

### resources:

- [Placeholder attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder)
- [Placeholder pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder)
- [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)
- [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled)
- [`readonly`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
- [`accent-color`](https://css-tricks.com/almanac/properties/a/accent-color/)

### exercises

- Ex1: [33-uib-data-transparent-login-form](https://classroom.github.com/a/EJlvBnYo)
- Ex2: [34-uib-data-outlining-form-fields](https://classroom.github.com/a/_LpQpKJz)

## Theory

### Form design guidelines

The goal of a form is for people to complete it. Two things my prevent the user from it:

- Perceived complexity
    - How much time & effort does the form seems to need
    - Long and complex forms are demotivating

- Interaction cost
    - Cognitive and physical effort needed
    - The more effort users have to make, the less usable a form is
        - Data that's difficult to input (weird datetime format?)
        - Questions that are hard to understand
        - Confusing error messages

*What a typical form has*

- Inputs
- Input labels (what does an input field mean)
- Structure (order and appearance of fields)
- Action buttons (such as "Submit")
- Feedback (Error and success messages)

*Form guidelines*

- Minimize the amount of fields (complexity & interaction cost!)
- Indicate desired content size with input field length
- Use placeholder texts for complex and format-specific inputs
    - Often they are examples
    - Such as dates, tracking codes or credit card numbers
- Write clear and concise labels (a placeholder is not a label)
    - Labels help mobile users tap on the correct input too!
- When you have password inputs, provide a "show password" option
- Explain why you are asking for sensitive information
- Group related fields together
- Do not remove the outline that indicates a focused field
- Use the appropriate input type
    - This affects which keyboard mobile users are shown!
- Keep mobile users in mind when selecting which input element to use
    - Dropdowns are more difficult on mobile; would radio buttons work?
- Clearly indicate optional fields, if you do really need them
- Clearly indicate errors
    - Don't use color alone to communicate status!
- Write clear action buttons; "Create account" instead of "Go"
     - If you need more than two action buttons, make them distinct
     - Probably best to avoid reset buttons, misclicks can be frustrating
- If your form is too long, could you use a step-by-step wizard?

- This guidelines are learned from working on projects
    - These are guidelines; they might not be optimal for you
    - Test your design choices
        - Ask users
        - Collect data on interactions
        - Learn and improve

### Placeholder attribute and styling it
Not a substitute for a label (accessibility).
We add the placeholder attribute to our input element (`placeholder="example"`) and we access its styles with the pseudo-element `::placeholder`

### `:focus` pseudoclass and `outline`
We can combine both to indicate our users where they are located

### `disabled` and `readonly` attributes
We have access to their styles by using the pseudo-classes `:disabled` and `:readonly:`



*Quick terminology*
- An input is "dirty" if a user has changed its value
- A form is "dirty" if one of its fields has a changed value

### Checkbox Styling

The input element has multiple types
- These input types are often referred to as controls
- So `<input>` is the element
- Input (Text) is a control
- Input (Checkbox) is a control
- So you see documentation about form controls, they mean types of inputs

- Some controls, like the text box, are easy to style
    - color, background etc

- Some, like the checkboxes are harder
    - The browser and operating system work together to render checkboxes
    - You cannot fully control how they look without replacing the element
    - A technique sometimes used is to make the original checkbox transparent
    - Then you can place a fake checkbox image on top of it
    - With CSS, you set one image for the checked checkbox and one for unchecked
    - The user is actually clicking the checkbox, but it _looks_ like the image
    - That method might not be super accessible though

Accent-color is the way to go and it works for:

- checkboxes (<input type="checkbox">)
- radio buttons (<input type="radio">)
- range (<input type="range">)
- progress (<progress>)