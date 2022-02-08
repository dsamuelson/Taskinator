let buttonEl = document.querySelector("#save-task");
let tasksToDo = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    let taskItemEl = document.createElement("li");
    taskItemEl.textContent = "A new task has been added";
    taskItemEl.className = "task-item";
    tasksToDo.appendChild(taskItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);