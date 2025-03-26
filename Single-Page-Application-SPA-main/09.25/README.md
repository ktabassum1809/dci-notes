# Async/await

## last day:

- JSON
- More fetching
- localStorage

## today:

- Async/await

### resources:

- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

### exercises

- Ex1: [16-spa-asynchronous-programming-github-api](https://classroom.github.com/a/f4Ngr2gD)

## Theory

### Async/await

- Promises can be tricky!

- Let's say you want to load lots of data for an app like Instagram
    - Get current user
        - Get notifications
        - Get posts from subscribed accounts
            - Get comments for each post
                - Get likes for each comment
                

```js
fetch("/api/checkLogin").then(x => x.json())
    .then(user => {
        if (!user) { return alert("Please log in") }
        fetch("/api/subscriptions").then(x => x.json())
            .then(subscriptions => {
                subscriptions.forEach(sub => {
                    fetch(`/api/posts/${sub.id}`).then(x => x.json())
                        .then(posts => {
                            posts.forEach(post => {
                                fetch(`/api/comments/${post.id}`).then(x => x.json())
                                    .then(comments => {
                                        comments.forEach(comment => {
                                            fetch(`/api/upvotes/${comment.id}`).then(x => x.json())
                                                .then(upvotes => {
                                                    showData(subscriptions, posts, comments, upvotes)
                                                }).catch(handleError)
                                        })
                                    }).catch(handleError)
                            })
                        }).catch(handleError)
                })
            }).catch(handleError)
    }).catch(handleError)
```

- This is called "callback hell" or "the pyramid of doom"
    - It can also be difficult to work with this many scopes

- To counter this issue, there is another syntax you can use with promises
    - It actually makes promise-based code work similar to synchronous code
    - It's called async/await and introduces the async and await keywords

- A simple async/await example

```js
async function getData() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = await response.json()
    return data
}
console.log(getData()) //this will be resolved before the function fetches, so it will return a pending status
getData().then(data => console.log(data)) // this would actually resolve in showing the data
```

- async is a keyword for functions
    - async functions will always return a promise
    - async also enables the use of the await keyword in a function
    - Feel free to check the code right up on Copilot

- To replace .catch() you will need to use try...catch

```js
async function getData() {
    try {
        const response = await fetch('https://example.org/data')
        const data = await response.json()
        return data
    } catch(error) {
        console.log("Error", error)
        return null
    }
}
```

- You can use await directly in your scripts
    - This is called "top-level await"
    - But if you have a function, you will need to make it async

- The pyramid of doom example with async/await is a bit easier
    - The pyramid exists, but a bit less "doom"

```js
try {
    const response1 = await fetch("/api/checkLogin");
    const user = await response1.json();
    if (!user) {
        alert("Please log in");
    } else {
        const response2 = await fetch("/api/subscriptions");
        const subscriptions = await response2.json();
        for (const sub of subscriptions) {
            const response3 = await fetch(`/api/posts/${sub.id}`);
            const posts = await response3.json();
            for (const post of posts) {
                const response4 = await fetch(`/api/comments/${post.id}`);
                const comments = await response4.json();
                for (const comment of comments) {
                    const response5 = await fetch(`/api/upvotes/${comment.id}`);
                    const upvotes = await response5.json();
                    showData(subscriptions, posts, comments, upvotes);
                }
            }
        }
    }
} catch (error) {
    console.error(error);
}
```