const addBtn = document.getElementById("addBtn");

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const taskText = taskInput.value;

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(li);

    taskInput.value = "";

    const deleteBtn = li.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", () => {

        li.remove();

    });

});