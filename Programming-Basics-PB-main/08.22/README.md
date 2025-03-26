# Algorithm complexity

## last day:

- Inheritance for js classes

## today:

- Corrected last day's exercise
- Big O notation

### resources:

- [Fireship short Big O notation](https://www.youtube.com/shorts/WbF2bLbAUik)
- [More in-depth big O notation](https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/)
- [Sorting algorithms in JavaScript](https://code-b.dev/blog/sorting-algorithms-javascript)
- [Podcast: intro to big O notation from a Computer scientist (starts minute 15)](https://open.spotify.com/episode/5DyJeGEHS5ivSXfkAhSrOn?si=lC7PnbiySoWvTl8OEcebSQ)
- [Big O notation from a Java developer](https://open.spotify.com/episode/7rfsy8DxBHws6lNWLS7UME?si=I7EE7aOKQ2mZy1e0FuI9fA)

### exercises

- Ex1: [57-PB-Review-Exc-Pt1](https://classroom.github.com/a/4kPgL-9r)

## Theory

- The topics of today are specifically to help prepare for job interviews
- AND also to get in the mindset of programming
- These kind of topics can be in some interviews
- Especially in very technical roles for large companies
- The topics of today are strongly tied to Computer Science

- What’s an algorithm?
    - A step-by-step procedure designed to solve a class of problems
    - A class of problems can be for example "sort this array of numbers"
        - It's a "class of problems" instead of a specific problem
        - Because there can be SO many different inputs
            - [2,1], [1,2,4,3,5], [6,0,-7,2,1,9012,52,3,-1,999132512369753427]


### Sorting algorithm

- There are MANY different sorting algorithms
    - Bubble sort
    - Quick sort
    - Merge sort

**Bubble sort**

- The earliest description of the Bubble sort algorithm was in 1956 (by Edward Harry Friend)
- In Pseudo code:

```js
loop through an array of numbers
    compare the current number and next number
    if current number is larger than the next number
        swap numbers around

repeat loop until the array is sorted
```

### Big O notation

- There many ways of solving a problem by programming
- Like many algorithms for sorting a list of numbers
- In high performance systems, it's very important to choose the right one

- Thinking of sorting algorithms, which one to choose depends:
    - Some algorithms take more time (CPU) and less memory (RAM)
    - Some algorithms take less time (CPU) and more memory (RAM)
    - Some algorithms are great for small amounts of data, but bad for lots

- The Big O notation is a way of estimating the performance of an algorithm
    - It's a way of classifying and simplifying algorithms so we can compare

- The Big O notation can be used for different aspects of an algorithm
    - These are called "complexities"
    - Usually you look at **Time complexity** or **Space complexity**
        - **Time complexity** is basically CPU
        - **Space complexity** is basically RAM

- For simplicity and for the sake of time, we will focus on **time complexity**

- The big o notation actually defines growth
    - As the amount of inputs grows, how does the algorithm react

![Big O notation examples graphic](./img/Big%20O%20notation%20examples%20graphic.png)

**Constant**

- Let's imagine a number sorting algorithm called "Splerch"
    - Splerch takes 100 seconds to sort 10 numbers
    - Splerch takes 100 seconds to sort 40 numbers
    - Splerch takes 100 seconds to sort 100 numbers
    - Splerch takes 100 seconds to sort 900 numbers

- This is called constant time complexity
    - Splerch takes the same amount of time, even when inputs increase

- In The Big O notation, this is represented as `O(1)`
    - You read that as "O of 1"

- Note that the actual duration does _not_ matter for Big O
        - Just the growth matters
    - Splerch looks HORRIBLE for small arrays
    - But if your array has billions of numbers.... AMAZING!
    - This kind of algorithm is not common or realistic

**Linear**

- Let's imagine a number sorting algorithm called "Blargh"
    - Blargh takes 10 seconds to sort 10 numbers
    - Blargh takes 40 seconds to sort 40 numbers
    - Blargh takes 50 seconds to sort 50 numbers

- This is called called linear time complexity
    - The time it takes increases linearly with the number of inputs
    - In The Big O notation, this is represented as `O(n)`
        - You read that as "O of n"
    - This is actually really good for an algorithm
        - However, Blargh takes quite a long time for small arrays

**Logarithmic**

- Let's imagine a number sorting algorithm called "Görp"
    - Görp takes 4 seconds to sort 10 numbers
    - Görp takes 7 seconds to sort 100 numbers
    - Görp takes 10 seconds to sort 1000 numbers

- This is called called logarithmic time complexity
    - The time taken by "Görp" increases gradually
    - But significantly slower compared to the size of the input list
    - As the input size grows, the increase in sorting time is much slower

- In The Big O notation, this is represented as `O(log n)`
    - You read that as "log O of n"

- Sorting 10 numbers in 4 seconds isn't great
- But 1000 numbers in 10 seconds sounds much better
- This algorithm isn't good for small inputs
- But sounds pretty good for big inputs

**Quadratic**

- Let's imagine a number sorting algorithm called "Görp"
    - Görp takes 0.1 seconds to sort 10 numbers
    - Görp takes 10 seconds to sort 100 numbers
    - Görp takes 1000 seconds to sort 1000 numbers
    - Görp takes 100000 seconds to sort 10000 numbers

- This is called called quadratic time complexity
    - As the input size doubles, the running time roughly quadruples

- In The Big O notation, this is represented as `O(n^2)`
    - You read that as "O of n squared"

- Görp starts out super fast, it's fantastic for tiny inputs
    - But it slows down a LOT, it's not good for large inputs

- Bubble Sort has a time complexity of `O(n^2)`
    - It's inefficient for large datasets
