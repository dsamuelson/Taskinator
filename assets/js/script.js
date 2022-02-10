let formEL = document.querySelector("#task-form");
let tasksToDoEL = document.querySelector("#tasks-to-do");
let taskIdCounter = 0;

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

    listItemEl.setAttribute("data-task-id", taskIdCounter);

    let taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    let taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    tasksToDoEL.appendChild(listItemEl);

    taskIdCounter++;
};

var createTaskActions = function (taskID) {
    let actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    let editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskID);

    actionContainerEl.appendChild(editButtonEl);

    let deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskID);

    actionContainerEl.appendChild(deleteButtonEl);

    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("data-task-id", taskID);
    statusSelectEl.setAttribute("name", "status-change");

    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (let i = 0; i < statusChoices.length; i++) {
        let statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        statusSelectEl.appendChild(statusOptionEl);
    }

    actionContainerEl.appendChild(statusSelectEl);

    return actionContainerEl;
};

formEL.addEventListener("submit", taskFormHandler);

