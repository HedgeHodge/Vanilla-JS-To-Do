var plusButton = document.getElementById("plus-button");
var inputField = document.getElementById("input-field");
var toDos = document.getElementById("to-dos");
var tutorialText = document.getElementById("tutorial-text");

var toDoList = [];

function makeToDoElement(text) {
  // Create li element
  var li = document.createElement("li");
  li.setAttribute("class", "to-do")

  // Create p element
  var p = document.createElement("p");
  p.textContent = text;
  p.id = text;

  // Create delete button element
  var button = document.createElement("button");
  button.textContent = "x";

  li.appendChild(p);
  li.appendChild(button);
  toDos.appendChild(li);
}

function renderItems() {
  toDoList.forEach(item => {
    if(document.getElementById(item)) {
      return;
    } else {
      makeToDoElement(item);
    }
  });
};

if(toDoList.length > 0) {
  renderItems();
  tutorialText.classList.add("hidden");
}

function changeInput() {
  if(!plusButton.classList.contains("hidden")) {
    plusButton.classList.add("hidden");
    inputField.classList.remove("hidden");
    inputField.focus();
    if(toDoList.length > 0) {
      tutorialText.classList.add("hidden");
    }
  } else {
    plusButton.classList.remove("hidden");
    inputField.classList.add("hidden");
  }
}

function addToDo(toDo) {
  toDoList.push(toDo);
  renderItems();
  if(toDoList.length > 0) {
    tutorialText.classList.add("hidden");
  }
  resetInput();
}

function removeToDo(toDo) {
  toDo.remove();
}

function resetInput() {
  inputField.value = "";
}

plusButton.addEventListener("click", changeInput);

inputField.addEventListener("keydown", event => {
  if(event.key === "Enter") {
    addToDo(inputField.value);
  }
});

inputField.addEventListener('focusout', (event) => {
  changeInput();
  resetInput();
});

toDos.addEventListener("click", (e) => {
  if(e.target.parentNode.classList.contains("to-do")) {
    removeToDo(e.target.parentNode);
  }
})