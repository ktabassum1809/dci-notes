const todosLS = localStorage.getItem("todos")
let todos = []

if (todosLS) {
    console.log("the data comes from localStorage")
    // If data from localStorage found, use that
    // Keep in mind: the data could also be outdated by now
    todos = JSON.parse(todosLS)
} else {
    console.log("the data comes from the server")
    const url = 'https://jsonplaceholder.typicode.com/todos'
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(json => {
            localStorage.setItem("todos", JSON.stringify(json))
            todos = json
        })
}

