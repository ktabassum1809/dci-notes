/**
 * Task 06
 *
 * Complete the code below so that the variable someDinosaurs will contain
 * a new array with only "triceratops" and "stegosaurus"
 * 
 * Expected output:
 * 
 * ["triceratops", "stegosaurus"]
 */

const dinosaurs = [
  "t-rex",
  "brontosaurus",
  "triceratops",
  "stegosaurus",
  "brachiosaurus",
];

const someDinosaurs = dinosaurs.slice(2,4);

console.log(someDinosaurs);