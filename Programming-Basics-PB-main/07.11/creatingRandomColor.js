// You want three random colors
const arrayColors = ["red", "yellow", "green", "blue", "orange", "pink"]

const color1 = arrayColors[Math.floor(Math.random() * arrayColors.length)]
const color2 = arrayColors[Math.floor(Math.random() * arrayColors.length)]
const color3 = arrayColors[Math.floor(Math.random() * arrayColors.length)]

console.log(`Random color without a function: ${color1}, ${color2} and ${color3}`)


function getRandomColor() {
    const newColor = arrayColors[Math.floor(Math.random() * arrayColors.length)]
    return newColor
}

const color4 = getRandomColor()
const color5 = getRandomColor()
const color6 = getRandomColor()

console.log(`Random color with function: ${color4}, ${color5} and ${color6}`)
