const pikachu = {
    name: "Pikachu",
    type: "Electric",
    abilities: ["Static", "Lightning Rod"],
    baseStats: {
        hp: 35,
        attack: 55,
        defense: 40,
        specialAttack: 50,
        specialDefense: 50,
        speed: 90
    },
    moves: [
        { name: "Thunder Shock", type: "Electric", power: 40, accuracy: 100 },
        { name: "Quick Attack", type: "Normal", power: 40, accuracy: 100 },
        { name: "Iron Tail", type: "Steel", power: 100, accuracy: 75 },
        { name: "Electro Ball", type: "Electric", power: null, accuracy: 100 }
    ],
    evolution: {
        evolvesTo: "Raichu",
        evolutionMethod: "Thunder Stone"
    }
}

/*
Breaking object as a mindmap
Object
    key + string
    key + string
    key + array 
            string 
            string
    key + object
            key + number
            key + number
            key + number
            key + number
            key + number
            key + number
    key + array
            object
                key + string
                key + string
                key + number
                key + number
            object
                key + string
                key + string
                key + number
                key + number
            object
                key + string
                key + string
                key + number
                key + number
            object
                key + string
                key + string
                key + null
                key + number
    key + object
            key + string
            key + string
*/