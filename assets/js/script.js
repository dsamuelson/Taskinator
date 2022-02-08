let formEL = document.querySelector("#task-form");
let tasksToDoEL = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    event.preventDefault();
    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEL.appendChild(listItemEl);
};

formEL.addEventListener("submit", createTaskHandler);