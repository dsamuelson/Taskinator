let formEL = document.querySelector("#task-form");
let tasksToDo = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    let taskItemEl = document.createElement("li");
    taskItemEl.textContent = "A new task has been added";
    taskItemEl.className = "task-item";
    tasksToDo.appendChild(taskItemEl);
};

formEL.addEventListener("submit", createTaskHandler);