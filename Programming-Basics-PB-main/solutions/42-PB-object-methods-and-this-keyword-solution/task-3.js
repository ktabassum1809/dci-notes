const goku = {
  name: "Goku",
  health: 50,
  attackSkill: "Kamehameha",
  attackDamage: 16,
};

const vegeta = {
  name: "Vegeta",
  health: 50,
  attackSkill: "Galaxy Breaker",
  attackDamage: 24, // This is clearly not a fair fight!
};

function attack(target) {
  target.health -= this.attackDamage;
  return `${this.name} attacked ${target.name} with a ${this.attackSkill} inflicting ${this.attackDamage} damage. ${target.name}'s health is now ${target.health}.`;
}

goku.attack = attack;
vegeta.attack = attack;

console.log(goku.attack(vegeta));
console.log(vegeta.attack(goku));