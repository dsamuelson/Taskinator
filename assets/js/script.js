let formEL = document.querySelector("#task-form");
let tasksToDoEL = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    event.preventDefault();
    let taskNameInput = document.querySelector("input[name='task-name']").value;
    let taskTypeInput = document.querySelector("select[name='task-type']").value;
    let taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    createTaskEl(taskDataObj);
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEL.reset();
};



var createTaskEl = function (taskDataObj) {
    let listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoEL.appendChild(listItemEl);
};

formEL.addEventListener("submit", taskFormHandler);

