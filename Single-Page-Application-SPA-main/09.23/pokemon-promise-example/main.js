function getData() {
	const fetchPromise = fetch("./generation1WithType.txt")
	const textPromise = fetchPromise.then((response) => response.text())
	textPromise.then((data) => {
		const array = data.split("\n")
		const cleanArray = array.map((item) => item.slice(4))
		console.log(cleanArray)
		const ul = document.querySelector("ul")

		cleanArray.forEach((element) => {
			const li = document.createElement("li")
			li.className = element.toLowerCase().split(",")[1].trim().split("/")[0]
			li.innerText = element.split(",")[0]
			ul.append(li)
		})
	})
}

const button = document.querySelector("button")
button.addEventListener("click", getData)
