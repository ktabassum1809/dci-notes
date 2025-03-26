# Ternary operator

## Task 1

Create a variable `isMarried` and assign to it a `boolean` value

Create another variable `message` which should containd one of the following strings depending on the value of the boolean:

- if `isMarried` is `true`, `message` should be equal to: John is happily married
- if `isMarried` is `false`, `message` should be equal to: John is not married

Use the ternary operator to assign the correct string dynamically

## Task 2
 
You manage an e-commerce and you just introduced a new discount system.

You now want to display a message that tells customers the discount they used and how much they need to pay after using the discount.

In case the discount is bigger than the price to pay, the message should display 0€ to pay.

```plaintext
For example:

With an amount to pay of 100€ and a discount of 30€, the output message would be:

With a discount of 30€ you have to pay 70€. 

---

With an amount to pay of 20€ and a discount of 30€, the output message would be:

With a discount of 30€ you have to pay 0€. 
```

Create 2 variables, `discount` and `cartTotal`, and assign 2 numerical values of your choice

Create another variable `amountToPay`.

- this variable should be equal to 0 if `discount` is larger than `cartTotal`
- otherwise it should be equal to the difference between `cartTotal` and `discount`

## Task 3

You want to show a different greeting message for users that have a username and for user that don't.

- If the username is empty, output "Hello, dear guest!" to the console
- otherwise, assuming with a username equal to "Unicorn123" output 
 "Welcome back, Unicorn123!"

Create a variable for the username and one for the welcome message.

Use the ternary operator to assign the right message

## Task 4

Depending on the weather forecast you want to display a suggestion for something
to do.

- if it's raining, display the message "Stay at home."
- if it's not raining, display the message "Go out!"

Create a boolean to check if it's raining or not.

Create another variable for the suggestion and assign to it the right string
depending on the valur of the boolean you just created

Use the ternary operator and output the message to the console
