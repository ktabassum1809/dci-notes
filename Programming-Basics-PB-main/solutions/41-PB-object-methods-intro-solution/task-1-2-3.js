const describe = function () {
  return `${this.name} is a ${this.color} ${this.type}`;
};

const speak = function () {
  if (this.type === "cat") {
    return "meow";
  } else if (this.type === "dog") {
    return "woof woof";
  } else if (this.type === "fish") {
    return "blub blub";
  } else {
    return "Hey!";
  }
};

const pet1 = {
  type: "cat",
  name: "Jimmy",
  color: "grey",
  describe: describe,
  speak: speak,
};

const pet2 = {
  type: "dog",
  name: "Bog",
  color: "brown",
  describe: describe,
  speak: speak,
};
