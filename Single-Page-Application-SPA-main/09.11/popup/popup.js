/* 
window methods
alert()- shows a popup message in browser
prompt() - ask for an input
confirm() - ask to confirm (y/n, boolean)
*/

// alert("hello E04!")
// prompt("what's your name?")
// confirm("confirm this!")

/* 
? write a function `greetUser()`
1. ask the user name
2. confirm the user name
3. yes: "hello username!" no: ask again and again till it's confirmed 
*/

function greetUser() {
  //1. username is acquired from the user
  let username = prompt("what's your name?");

  //1-1 if user clicks cancel, exit the session
    // clicking the cancel means that `null` is assigned to the variable username 
  if (username === null) {
    return;
  }

  //2. confirm the username, if not confirmed, ask for the username over and over
    // by providing a fallback value "nobody", we can prevent showing `null` in browser
  while (!confirm(`are you ${username || "nobody"}, right?`)) {
    username = prompt("what's your name, again?");
  }

  //3. when confirmed, greet the user!
  alert(`hello, ${username || "nobody"}!`);
}

greetUser();
