const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click" , () =>
{
    const task = taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;
    if (task.trim() === "" || deadline === "") {
        alert ("Please select an upcoming date for the deadline.")
        return ;
    }
    const selectedDate = new Date(deadline);
    const currentDate = new Date();
})
