/*const url = "https://jsonplaceholder.typicode.com/todos"
const options = {
    method: "POST",
}
const response = await fetch(url, options)
const result = await response.json()
console.log(result)
*/

const url = "https://jsonplaceholder.tyasdfdspicode.com/todos"
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({text:"Do the dishes!"})
}
const response = await fetch(url, options)
const result = await response.json()
console.log(result)