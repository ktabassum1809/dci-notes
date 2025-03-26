let input = document.querySelector("input");
let button = document.querySelector("button");
let section = document.querySelector("section");
let form = document.querySelector("form");
let main = document.querySelector("main");

let errorMessage = document.createElement("p");
errorMessage.textContent = "Please Enter your Todo 🙂";
errorMessage.style.color = "#dc2626";
errorMessage.style.display = "none";
main.appendChild(errorMessage);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let text = input.value.trim();
  if (text === "") {
    errorMessage.style.display = "block";
    return;
  }
  errorMessage.style.display = "none";
  let paragraph = document.createElement("p");

  // Add icons to delete task or mark task as completed
  const actions = document.createElement("span");
  let spanCloseButton = document.createElement("span");
  spanCloseButton.innerHTML = "<i class='fas fa-check'></i>";

  const deleteButton = document.createElement("i");
  deleteButton.classList.add("fas", "fa-trash");

  actions.append(spanCloseButton, deleteButton);

  let spanText = document.createElement("span");
  spanText.innerText = text;
  paragraph.appendChild(spanText);
  paragraph.appendChild(actions);
  section.appendChild(paragraph);
  input.value = "";

  paragraph.addEventListener("click", function (ev) {
    let target = ev.target;
    if (target.classList.contains("fa-trash")) {
      paragraph.remove();
    }
    if (target.classList.contains("fa-check")) {
      paragraph.classList.add("completed");
      spanCloseButton.classList.add("completed");
    }
  });

  spanCloseButton.addEventListener("click", function (ev) {
    ev.stopPropagation();
    paragraph.classList.toggle("completed");
    spanCloseButton.classList.toggle("completed");
  });
});
