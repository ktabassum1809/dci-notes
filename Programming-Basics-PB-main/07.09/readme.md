# PB - Program - 02: Loops


**Yesterday**
- For Loops

**TODAY**
- Algorithms
- Pseudocode
- loops: break and continue
- More practice with Loops

## Algorithms

- What are algorithms?

- Algorithms are pretty theoretical
    - A set of reproducible steps to solve a class of problems

- An algorithm is the abstract concept or idea behind the solution to a problem
- Normally algorithms are usually systematic solutions to small problems
- VS Code as a program does solve a problem
    - Problem: How can I efficiently write and execute code
    - But you wouldn't say it's algorithm

- Algorithms usually solve smaller and much more specific problems

- Problem: "Sort this array of numbers from smallest to largest"
    - Here, the input is an array of numbers
    - Here, the output is an edited array of numbers
    - An algorithm is the steps to solve that problem for all relevant inputs

- Programming language syntax is like your toolkit
    - Your toolkit contains tools and techniques you can build an algorithm with
    - Variables, For loops, Conditionals...

- There's more than one way to bake a cake...
    - There are usually MANY algorithms to solve a specific problem
    - There are MANY, MANY number sorting algorithms, for example
    - Which one is best really depends
        - Some take more CPU speed
        - Some take more memory
        - Some are good for small arrays
        - Some are good for big arrays
        - Some are good if your data is close to being sorted
        - Some are good if your data is completely random
    - It's not even realistic to know them all
        - Quicksort
        - Bubble sort
        - Merge sort
        - ...
       
    - THIS is the kind of stuff that computer scientist learn and do
    - In Web Dev, we _rarely_ need to think about this level of performance

- Solving problems in programming is basically writing algorithms
    - Input: You get an array of products
    - Output: You need to display them on a page sorted by price

    - You then have to invent the code using the tools in your toolbox
        - Meaning syntax; variables, conditions, loops, etc.
        - The better you know your tools the easier it is to use them creatively

- When you get an exercise, you are basically getting a problem definition
    - You need to figure it out
    - What does the text of the problem mean
        - What are the inputs
        - What are the desired outputs
        - What steps do I need to do to get to the end results
    - When developing software, it is **very** common to have to start again
        - Or to take a few steps back
        - You might realize something more about the problem during development
        - You might learn something new along the way

- Sometimes developers even write _tests_ before they start on the algorithm

    ```js
    // Problem: Make a new array of all **odd** entries
    const input = [6,4,5,8,52,9,1,6]

    const results = []
    // Code here

    // Test cases, they should all be true
    console.log(results.length === 3) // There should be 3 results
    console.log(results[0] === 5) // First should be 5
    console.log(results[1] === 9) // Second should be 9
    console.log(results[2] === 1) // Third should be 1
    ```

### Pseudocode

- One thing that can help with solving a problem is writing pseudocode
- Something that's between human language and actual code
- Pseudocode is a simplified, informal syntax
- It represents the core principles and logic of an algorithm 
- But it avoids the specifics of any programming language syntax
- There is no one specific pseudocode syntax
- It can be as close or far from actual code as you like

    ```js
    // Problem: Make a new array of all **odd** entries
    const input = [6,4,5,8,52,9,1,6]

    // Pseudocode style 1
    const results = []
    for (each number in array) {
        if (number is odd) {
            add number to results array
        }
    }

    // Pseudocode style 2
    Initialize an empty array called "results"
    For each number in the "input" array:
        If the number is odd:
            Add the number to the "results" array
    End of the loop
    ```

## Loops and iterables

- We already learned about the basics of for loops
- We have looped over arrays and strings
- But you can't loop over numbers

- That's because arrays and strings are `iterable`
    - "Iterable" has a very specific technical definition
    - Only certain kinds of types are iterable
    - But there's no need to go deep here
    - Just knowing this is enough

- Let's learn and practice a bit more


## Wrap-up

- An algorithm is a solution to a well defined class of problems
- There are lots of existing algorithms for common problems, such as sorting
- The same algorithm can be implemented with different programming languages
- Pseudocode can help us translate problems into code
- In `for` loops we can use `continue` to skip to the next iteration
- In `for` loops we can use `break` to completely stop and exit out of the loop

## Exercises

- [24-PB-program-loop-with-iterables](https://classroom.github.com/a/7PWcKZAO)
- [25-PB-program-loop-array-with-input](https://classroom.github.com/a/Jmw5N7-k)
- [26-PB-accumulator-pattern](https://classroom.github.com/a/KjjSpmUF)