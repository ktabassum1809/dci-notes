const pokemon1 = {
	name: "Pikachu",
	type: "electric",
	evolvesWithStone: true,
	evolution: "Raichu",
	attackPower: 40,
}

function evolving(stone) {
	if (this.evolvesWithStone && String(stone) === stone) {
		this.attackPower *= 1.5
		let oldName = this.name
		this.name = this.evolution
		return `${oldName} has evolved to ${this.name} with a ${stone} and now its attack power is ${this.attackPower}!`
	} else {
		return "you need a stone to make your pokemon evolve or your pokemon doesn't evolve with a stone"
	}
}

pokemon1.evolving = evolving

console.log(pokemon1)

console.log(pokemon1.evolving("234"))

console.log(pokemon1)
