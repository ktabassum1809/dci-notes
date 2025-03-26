const twofer = (who="you") => {
  return `Two for me and one for ${who}`;
};

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"