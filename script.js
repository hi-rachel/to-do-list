const inputTask = document.getElementById("input-task");
const toDoList = document.getElementById("to-do-list");

function addToDo() {
  if (inputTask.value == "") {
    alert("Please fill out the task.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputTask.value;
    toDoList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputTask.value = "";
  saveToDo();
}

toDoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveToDo();
    } else if (e.target.tagName === "SPAN") {
      if (confirm("Are you sure delete this task?")) {
        e.target.parentElement.remove();
        saveToDo();
      }
    }
  },
  false
);

function saveToDo() {
  localStorage.setItem("ToDo", toDoList.innerHTML);
}

function showToDo() {
  toDoList.innerHTML = localStorage.getItem("ToDo");
}
showToDo();

inputTask.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("add-task-btn").click();
  }
});
