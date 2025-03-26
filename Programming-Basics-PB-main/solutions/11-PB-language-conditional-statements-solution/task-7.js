let isValid = true;
const password = "1234567b";

if (password.length < 8) {
  isValid = false;
}

if (password[0] === password[password.length - 1]) {
  isValid = false;
}

if (password[0] === " ") {
  isValid = false;
}

if (password === "12345678") {
  isValid = false;
}

if (password[password.length - 1] === "!") {
  isValid = false;
}

console.log(`Is the password ${password} valid? ${isValid}`);