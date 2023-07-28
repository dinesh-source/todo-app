function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <input type="checkbox">
            <span>${taskInput.value.trim()}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}
