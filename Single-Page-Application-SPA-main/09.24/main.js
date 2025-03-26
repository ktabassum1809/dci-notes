const data = '{ "id": 1, "name": "Angela Merkel", "born":"17.07.1954" }'
const chancellor = JSON.parse(data)
chancellor.name = "Olaf Scholz"
chancellor.born = "14.06.1958"

console.log(chancellor)

const prettyPrinted = JSON.stringify(chancellor, null, 1)
console.log(prettyPrinted)

console.clear()

// const url = "https://jsonplaceholder.typicode.com/todos"
// fetch(url)
// 	.then((response) => {
// 		console.log(response)
// 		return response.json()
// 	})
// 	.then((json) => console.log(json))

console.clear()

const url2 = "https://jsonplaceholder.typicode.com/todos"
fetch(url2) // create a promise
	.then((response) => { // a new promise
		console.log(response)
		console.log(response.ok)
		return response.json() // output new promise
	})
	.then((json) => console.log(json)) 
	.catch((error) => {
		console.log(error)
		console.log("Failed to contact glorpborgdorkhorp.org")
	})