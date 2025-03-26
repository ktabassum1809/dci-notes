# Realine sync

Use `readline-sync` to write a program that asks the user a series of questions and prints in output a message with the information collected.

Use the questions below (but feel free to add more of your choosing):

```plaintext
- What is your name?
- In which year were you born?
- In which city were you born?
- Were do you live now?
- What is the current year?
```

Example of the execution:
```plaintext
What is your name? Sandy 
In which year were you born? 1995
In which city were you born? London
Where do you live now? Berlin
What's the current year? 2022
```

Expected output:

```plaintext
Hello! My name is Sandy. I was born 27 years ago in London. Now I live in Berlin.
```

## Notes

- make sure that the questions are asked only one at a time and each question appears after the user presses `enter`
- make sure that there is an empty space between the question mark
- every input from the command line will be stored as a `string`. Make sure to convert the years to `numbers`

## Bonus

After solving the exercise, you can transform every input from the user to make sure that they have the right capitalisation.

For example:
```plaintext
SANDY -> Sandy
berlin -> Berlin
LONdOn -> London
```