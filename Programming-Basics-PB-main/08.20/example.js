class User {
  constructor(username, firstName, lastName, email, password) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  info() {
    return `Username: ${this.username}\nfirst name: ${this.firstName}\nlast name: ${this.lastName}\nemail: ${this.email}`;
  }
}

const user1 = new User("Sasuke", "Dineo","modi","modi@gmail.whatever","sasukeUchiha");
console.log(user1)

console.log(user1.info())